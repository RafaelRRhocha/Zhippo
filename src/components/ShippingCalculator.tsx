'use client';

import { Box, Card, Divider, Text } from '@mantine/core';
import { useState } from 'react';

import ShippingForm from './ShippingForm';
import ShippingResults from './ShippingResults';

// Type for shipping calculation results
export interface ShippingResultType {
  name: string;
  price: number;
  deliveryTime: string;
  type: string;
}

export default function ShippingCalculator() {
  const [results, setResults] = useState<ShippingResultType[] | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to calculate shipping (mock data initially)
  const calculateShipping = async (data: {
    origin: string;
    destination: string;
    weight: number;
    height?: number;
    width?: number;
    length?: number;
  }) => {
    setLoading(true);

    // In a real implementation, we would use form data to calculate
    console.log('Calculating shipping with data:', data);

    // Simulating API call with setTimeout
    setTimeout(() => {
      // Mock data as requested
      const mockResults: ShippingResultType[] = [
        {
          name: 'Correios - PAC',
          price: 21.5,
          deliveryTime: '5 dias úteis',
          type: 'Econômico',
        },
        {
          name: 'Jadlog',
          price: 28.9,
          deliveryTime: '3 dias úteis',
          type: 'Expresso',
        },
        {
          name: 'Correios - SEDEX',
          price: 35.9,
          deliveryTime: '1 dia útil',
          type: 'Expresso',
        },
        {
          name: 'Loggi',
          price: 25.9,
          deliveryTime: '2 dias úteis',
          type: 'Normal',
        },
      ];

      setResults(mockResults);
      setLoading(false);
    }, 1500); // Simulating a 1.5 second delay
  };

  return (
    <Box>
      <Card withBorder shadow="sm" p="md" radius="md" mb="lg">
        <Text fw={600} size="lg" mb="md">
          Informe os dados para cálculo
        </Text>
        <ShippingForm onSubmit={calculateShipping} loading={loading} />
      </Card>

      {results && (
        <Card withBorder shadow="sm" p="md" radius="md">
          <Text fw={600} size="lg" mb="md">
            Resultados
          </Text>
          <Divider mb="md" />
          <ShippingResults results={results} />
        </Card>
      )}
    </Box>
  );
}
