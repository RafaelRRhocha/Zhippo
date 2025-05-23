'use client';

import { Alert, Box, Card, Text } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { useState } from 'react';

import { TrackingData, TrackingResponse } from '@/interfaces/tracking';
import { trackingService } from '@/services/tracking/api';

import TrackingForm from './TrackingForm';
import TrackingResults from './TrackingResults';

export default function TrackingContainer() {
  const [results, setResults] = useState<TrackingResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trackOrder = async (data: TrackingData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await trackingService.track(data);

      if (Object.keys(response).length === 0) {
        setError('Nenhuma informação encontrada para este código de rastreio.');
        setResults(null);
      } else {
        setResults(response);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Ocorreu um erro ao buscar informações de rastreamento.',
      );
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Card withBorder shadow="sm" p="md" radius="md" mb="lg">
        <Text fw={600} size="lg" mb="md">
          Rastreamento de Pedidos
        </Text>
        <TrackingForm onSubmit={trackOrder} loading={loading} />
      </Card>

      {error && (
        <Alert
          icon={<IconAlertCircle size={16} />}
          title="Erro"
          color="red"
          mb="lg"
        >
          {error}
        </Alert>
      )}

      {results && <TrackingResults results={results} />}
    </Box>
  );
}
