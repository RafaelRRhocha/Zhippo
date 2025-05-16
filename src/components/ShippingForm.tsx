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

interface IValues {
  origin: string;
  destination: string;
  weight: number;
  height?: number;
  width?: number;
  length?: number;
}

interface ShippingFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: IValues) => void;
  loading: boolean;
}

export default function ShippingForm({ onSubmit, loading }: ShippingFormProps) {
  const [showDimensions, setShowDimensions] = useState(false);

  const form = useForm({
    initialValues: {
      origin: '',
      destination: '',
      weight: 0.5,
      height: 0,
      width: 0,
      length: 0,
    },
    validate: {
      origin: (value) =>
        value.length === 8 || value.length === 9
          ? null
          : 'CEP de origem inválido',
      destination: (value) =>
        value.length === 8 || value.length === 9
          ? null
          : 'CEP de destino inválido',
      weight: (value) => (value > 0 ? null : 'Peso deve ser maior que 0'),
    },
  });

  const handleSubmit = form.onSubmit((formValues) => {
    if (!showDimensions) {
      // eslint-disable-next-line no-unused-vars
      const { height, width, length, ...basicData } = formValues;
      onSubmit(basicData);
    } else {
      onSubmit(formValues);
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
            {...form.getInputProps('origin')}
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
            {...form.getInputProps('destination')}
            classNames={{
              input: 'placeholder:text-gray-400',
            }}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <NumberInput
            label="Peso"
            description="em kg"
            placeholder="0.5"
            min={0.01}
            step={0.1}
            required
            {...form.getInputProps('weight')}
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
                label="Altura"
                description="em cm"
                placeholder="0"
                min={0}
                {...form.getInputProps('height')}
                classNames={{
                  input: 'placeholder:text-gray-400',
                }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <NumberInput
                label="Largura"
                description="em cm"
                placeholder="0"
                min={0}
                {...form.getInputProps('width')}
                classNames={{
                  input: 'placeholder:text-gray-400',
                }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <NumberInput
                label="Comprimento"
                description="em cm"
                placeholder="0"
                min={0}
                {...form.getInputProps('length')}
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
