'use client';

import { Box, Card, Text } from '@mantine/core';
import { useState } from 'react';

import { CreateShippingData, Shipping } from '@/interfaces/shipping';
import { shippingService } from '@/services/shipping/api';

import ShippingForm from './ShippingForm';
import ShippingResults from './ShippingResults';

export default function ShippingCalculator() {
  const [results, setResults] = useState<Shipping[] | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateShipping = async (data: CreateShippingData) => {
    try {
      setLoading(true);
      const response = await shippingService.calculate(data);
      setResults(response);
    } finally {
      setLoading(false);
    }
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
          <ShippingResults results={results} />
        </Card>
      )}
    </Box>
  );
}
