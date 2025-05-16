import { Box, Container, Title } from '@mantine/core';

import ShippingCalculator from '@/components/ShippingCalculator';

export default function Home() {
  return (
    <Container size="md" my="xl">
      <Box mb="xl" className="text-center">
        <Title order={1} mb="sm">
          Calculadora de Frete
        </Title>
        <p className="text-gray-600">
          Compare preços e prazos de entrega de diferentes transportadoras
        </p>
      </Box>
      <ShippingCalculator />
    </Container>
  );
}
