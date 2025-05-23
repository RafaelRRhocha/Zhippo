'use client';

import { Button, Flex, Grid, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';

import { TrackingData } from '@/interfaces/tracking';

interface TrackingFormProps {
  onSubmit: (values: TrackingData) => void;
  loading: boolean;
}

export default function TrackingForm({ onSubmit, loading }: TrackingFormProps) {
  const form = useForm<{
    trackingCode: string;
  }>({
    initialValues: {
      trackingCode: '',
    },
    validate: {
      trackingCode: (value) => {
        if (!value) return 'Código de rastreio é obrigatório';
        if (value.length < 8) return 'Código de rastreio inválido';
        return null;
      },
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    onSubmit({
      orders: [values.trackingCode],
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Col span={12}>
          <TextInput
            label="Código de Rastreamento"
            placeholder="Insira o código de rastreamento (ex: ME23002OWZ7BR)"
            required
            {...form.getInputProps('trackingCode')}
            classNames={{
              input: 'placeholder:text-gray-400',
            }}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Flex justify="center" mt="md">
            <Button
              type="submit"
              size="md"
              loading={loading}
              leftSection={<IconSearch size={20} />}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Rastrear Pedido
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  );
}
