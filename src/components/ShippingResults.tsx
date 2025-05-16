'use client';

import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Table,
  Text,
} from '@mantine/core';
import { IconBrandWhatsapp, IconClock, IconCoins } from '@tabler/icons-react';

import { ShippingResultType } from './ShippingCalculator';

interface ShippingResultsProps {
  results: ShippingResultType[];
}

export default function ShippingResults({ results }: ShippingResultsProps) {
  const lowestPrice = Math.min(...results.map((r) => r.price));
  const fastestDelivery = Math.min(
    ...results.map((r) => parseInt(r.deliveryTime.split(' ')[0])),
  );

  const formatWhatsAppMessage = () => {
    const message = `Valor do frete:\n${results
      .map(
        (result) =>
          `- ${result.name}: R$ ${result.price
            .toFixed(2)
            .replace('.', ',')} – ${result.deliveryTime}`,
      )
      .join('\n')}`;

    return encodeURIComponent(message);
  };

  const handleShareWhatsApp = () => {
    const message = formatWhatsAppMessage();
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <Box>
      <Group justify="space-between" mb="lg" align="center" display="flex">
        <Text fw={600} size="lg" mb="md">
          Resultados
        </Text>

        <Box mt="md">
          <Button
            onClick={handleShareWhatsApp}
            leftSection={<IconBrandWhatsapp size={20} />}
            variant="filled"
            color="green"
            fullWidth
          >
            Compartilhar no WhatsApp
          </Button>
        </Box>
      </Group>
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Transportadora</Table.Th>
            <Table.Th>Valor</Table.Th>
            <Table.Th>Prazo</Table.Th>
            <Table.Th>Tipo</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {results.map((result, index) => (
            <Table.Tr key={index}>
              <Table.Td>{result.name}</Table.Td>
              <Table.Td>
                <Flex gap={8} align="center">
                  <Text>R$ {result.price.toFixed(2).replace('.', ',')}</Text>
                  {result.price === lowestPrice && (
                    <Badge color="green" size="sm" variant="filled">
                      <Flex gap={4} align="center">
                        <IconCoins size={12} />
                        <Text size="xs">Melhor preço</Text>
                      </Flex>
                    </Badge>
                  )}
                </Flex>
              </Table.Td>
              <Table.Td>
                <Flex gap={8} align="center">
                  <Text>{result.deliveryTime}</Text>
                  {parseInt(result.deliveryTime.split(' ')[0]) ===
                    fastestDelivery && (
                    <Badge color="blue" size="sm" variant="filled">
                      <Flex gap={4} align="center">
                        <IconClock size={12} />
                        <Text size="xs">Mais rápido</Text>
                      </Flex>
                    </Badge>
                  )}
                </Flex>
              </Table.Td>
              <Table.Td>
                <Badge
                  color={
                    result.type === 'Econômico'
                      ? 'green'
                      : result.type === 'Expresso'
                        ? 'red'
                        : 'blue'
                  }
                >
                  {result.type}
                </Badge>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Box className="md:hidden mt-4">
        {results.map((result, index) => (
          <Card key={index} withBorder mb="sm" p="sm">
            <Text fw={600}>{result.name}</Text>
            <Group mt="xs" justify="space-between">
              <Flex direction="column">
                <Text size="sm" c="dimmed">
                  Valor:
                </Text>
                <Flex gap={8} align="center" wrap="wrap">
                  <Text>R$ {result.price.toFixed(2).replace('.', ',')}</Text>
                  {result.price === lowestPrice && (
                    <Badge color="green" size="sm" variant="filled">
                      <Flex gap={4} align="center">
                        <IconCoins size={12} />
                        <Text size="xs">Melhor preço</Text>
                      </Flex>
                    </Badge>
                  )}
                </Flex>
              </Flex>
              <Flex direction="column">
                <Text size="sm" c="dimmed">
                  Prazo:
                </Text>
                <Flex gap={8} align="center" wrap="wrap">
                  <Text>{result.deliveryTime}</Text>
                  {parseInt(result.deliveryTime.split(' ')[0]) ===
                    fastestDelivery && (
                    <Badge color="blue" size="sm" variant="filled">
                      <Flex gap={4} align="center">
                        <IconClock size={12} />
                        <Text size="xs">Mais rápido</Text>
                      </Flex>
                    </Badge>
                  )}
                </Flex>
              </Flex>
              <Flex direction="column">
                <Text size="sm" c="dimmed">
                  Tipo:
                </Text>
                <Badge
                  color={
                    result.type === 'Econômico'
                      ? 'green'
                      : result.type === 'Expresso'
                        ? 'red'
                        : 'blue'
                  }
                >
                  {result.type}
                </Badge>
              </Flex>
            </Group>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
