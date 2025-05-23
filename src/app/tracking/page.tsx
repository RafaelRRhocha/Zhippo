import { Box, Container, Title } from '@mantine/core';

import TrackingContainer from '@/components/TrackingContainer';

export default function TrackingPage() {
  return (
    <Container size="md" my="xl">
      <Box mb="xl" className="text-center">
        <Title order={1} mb="sm">
          Rastreamento de Pedidos
        </Title>
        <p className="text-gray-600">
          Consulte o status e informações detalhadas do seu pedido
        </p>
      </Box>
      <TrackingContainer />
    </Container>
  );
}
