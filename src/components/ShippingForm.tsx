'use client';

import {
  Button,
  Flex,
  Grid,
  NumberInput,
  Select,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCalculator } from '@tabler/icons-react';
import { useState } from 'react';

import { CreateShippingData } from '@/interfaces/shipping';

interface ShippingFormProps {
  onSubmit: (values: CreateShippingData) => void;
  loading: boolean;
}

export default function ShippingForm({ onSubmit, loading }: ShippingFormProps) {
  const [showDimensions, setShowDimensions] = useState(false);

  const form = useForm<CreateShippingData>({
    initialValues: {
      from: {
        postal_code: '',
      },
      to: {
        postal_code: '',
      },
      package: {
        weight: 1,
        height: undefined,
        width: undefined,
        length: undefined,
      },
    },
    validate: {
      from: {
        postal_code: (value) =>
          value.length === 8 || value.length === 9
            ? null
            : 'CEP de origem inválido',
      },
      to: {
        postal_code: (value) =>
          value.length === 8 || value.length === 9
            ? null
            : 'CEP de destino inválido',
      },
      package: {
        weight: (value) => (value > 0 ? null : 'Peso deve ser maior que 0'),
      },
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    if (!showDimensions) {
      const formattedValues = {
        ...values,
        package: {
          weight: values.package.weight,
        },
      };
      onSubmit(formattedValues);
    } else {
      onSubmit(values);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="CEP de Origem"
            placeholder="00000-000"
            required
            {...form.getInputProps('from.postal_code')}
            classNames={{
              input: 'placeholder:text-gray-400',
            }}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TextInput
            label="CEP de Destino"
            placeholder="00000-000"
            required
            {...form.getInputProps('to.postal_code')}
            classNames={{
              input: 'placeholder:text-gray-400',
            }}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <NumberInput
            label="Peso (kg)"
            placeholder="0"
            min={0.01}
            step={0.1}
            required
            {...form.getInputProps('package.weight')}
            classNames={{
              input: 'placeholder:text-gray-400',
            }}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Select
            label="Dimensões"
            placeholder="Incluir dimensões?"
            data={[
              { value: 'yes', label: 'Sim' },
              { value: 'no', label: 'Não' },
            ]}
            defaultValue="no"
            onChange={(value) => setShowDimensions(value === 'yes')}
            classNames={{
              input: 'placeholder:text-gray-400',
            }}
          />
        </Grid.Col>

        {showDimensions && (
          <>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <NumberInput
                label="Altura (cm)"
                placeholder="0"
                min={0}
                {...form.getInputProps('package.height')}
                classNames={{
                  input: 'placeholder:text-gray-400',
                }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <NumberInput
                label="Largura (cm)"
                placeholder="0"
                min={0}
                {...form.getInputProps('package.width')}
                classNames={{
                  input: 'placeholder:text-gray-400',
                }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <NumberInput
                label="Comprimento (cm)"
                placeholder="0"
                min={0}
                {...form.getInputProps('package.length')}
                classNames={{
                  input: 'placeholder:text-gray-400',
                }}
              />
            </Grid.Col>
          </>
        )}

        <Grid.Col span={12}>
          <Flex justify="center" mt="md">
            <Button
              type="submit"
              size="md"
              loading={loading}
              leftSection={<IconCalculator size={20} />}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Calcular Frete
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  );
}
