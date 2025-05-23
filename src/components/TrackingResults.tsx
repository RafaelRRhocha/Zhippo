'use client';

import {
  Badge,
  Box,
  Card,
  Flex,
  Group,
  List,
  Stack,
  Text,
  Timeline,
} from '@mantine/core';
import { IconPackage, IconPackageExport, IconTruck } from '@tabler/icons-react';

import { TrackingResponse } from '@/interfaces/tracking';

interface TrackingResultsProps {
  results: TrackingResponse;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'posted':
      return <IconPackageExport size={20} />;
    case 'delivered':
      return <IconPackage size={20} />;
    default:
      return <IconTruck size={20} />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'posted':
      return 'blue';
    case 'delivered':
      return 'green';
    case 'canceled':
      return 'red';
    default:
      return 'gray';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'posted':
      return 'Postado';
    case 'delivered':
      return 'Entregue';
    case 'canceled':
      return 'Cancelado';
    default:
      return 'Em processamento';
  }
};

const formatDate = (dateString: string | null) => {
  if (!dateString) return 'N/A';

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export default function TrackingResults({ results }: TrackingResultsProps) {
  const trackingIds = Object.keys(results);

  if (!trackingIds.length) {
    return (
      <Card withBorder shadow="sm" p="md">
        <Text>Nenhuma informação de rastreamento encontrada.</Text>
      </Card>
    );
  }

  return (
    <Stack gap="md">
      {trackingIds.map((trackingId) => {
        const result = results[trackingId];

        return (
          <Card key={trackingId} withBorder shadow="sm" p="lg" radius="md">
            <Flex justify="space-between" align="center" mb="md">
              <Box>
                <Text fw={700} size="lg">
                  Protocolo: {result.protocol}
                </Text>
                <Text size="sm" c="dimmed">
                  Código de Rastreio: {result.tracking}
                </Text>
              </Box>
              <Badge size="lg" color={getStatusColor(result.status)}>
                {getStatusText(result.status)}
              </Badge>
            </Flex>

            <Timeline active={1} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconPackage size={16} />}
                title="Pedido Criado"
              >
                <Text size="sm">{formatDate(result.created_at)}</Text>
                <Text size="xs" c="dimmed">
                  O pedido foi criado no sistema
                </Text>
              </Timeline.Item>

              {result.paid_at && (
                <Timeline.Item
                  bullet={<IconPackage size={16} />}
                  title="Pedido Pago"
                >
                  <Text size="sm">{formatDate(result.paid_at)}</Text>
                  <Text size="xs" c="dimmed">
                    Pagamento confirmado
                  </Text>
                </Timeline.Item>
              )}

              {result.generated_at && (
                <Timeline.Item
                  bullet={<IconTruck size={16} />}
                  title="Etiqueta Gerada"
                >
                  <Text size="sm">{formatDate(result.generated_at)}</Text>
                  <Text size="xs" c="dimmed">
                    A etiqueta de envio foi gerada
                  </Text>
                </Timeline.Item>
              )}

              {result.posted_at && (
                <Timeline.Item
                  bullet={<IconPackageExport size={16} />}
                  title="Pacote Postado"
                >
                  <Text size="sm">{formatDate(result.posted_at)}</Text>
                  <Text size="xs" c="dimmed">
                    O pacote foi enviado
                  </Text>
                </Timeline.Item>
              )}

              {result.delivered_at && (
                <Timeline.Item
                  bullet={<IconPackage size={16} />}
                  title="Entregue"
                >
                  <Text size="sm">{formatDate(result.delivered_at)}</Text>
                  <Text size="xs" c="dimmed">
                    O pacote foi entregue ao destinatário
                  </Text>
                </Timeline.Item>
              )}

              {result.canceled_at && (
                <Timeline.Item
                  bullet={<IconPackage size={16} />}
                  title="Cancelado"
                  color="red"
                >
                  <Text size="sm">{formatDate(result.canceled_at)}</Text>
                  <Text size="xs" c="dimmed">
                    O pedido foi cancelado
                  </Text>
                </Timeline.Item>
              )}
            </Timeline>

            <Group mt="lg">
              <Card withBorder w="100%" p="sm">
                <Text fw={600} mb="xs">
                  Detalhes do Rastreio
                </Text>
                <List>
                  <List.Item>
                    <Text size="sm">
                      <strong>ID:</strong> {result.id}
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">
                      <strong>Código de Rastreio Melhor Envio:</strong>{' '}
                      {result.melhorenvio_tracking}
                    </Text>
                  </List.Item>
                </List>
              </Card>
            </Group>
          </Card>
        );
      })}
    </Stack>
  );
}
