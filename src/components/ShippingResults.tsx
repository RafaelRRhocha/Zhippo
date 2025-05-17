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

import { Shipping } from '@/interfaces/shipping';

interface ShippingResultsProps {
  results: Shipping[];
}

function getShippingType(deliveryTime: number): string {
  if (deliveryTime <= 1) return 'Expresso';
  if (deliveryTime <= 3) return 'Normal';
  return 'Econômico';
}

export default function ShippingResults({ results }: ShippingResultsProps) {
  const lowestPrice = Math.min(
    ...results.map((r) => parseFloat(r.price || '0')),
  );
  const fastestDelivery = Math.min(...results.map((r) => r.delivery_time || 0));

  const formatWhatsAppMessage = () => {
    const message = `Valor do frete:\n${results
      .map(
        (result) =>
          `- ${result.company.name} - ${result.name}: R$ ${parseFloat(
            result.price || '0',
          )
            .toFixed(2)
            .replace('.', ',')} – ${result.delivery_time} dias úteis`,
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
              <Table.Td>
                <div className="flex items-center gap-2">
                  {/* <Image
                    src={result.company.picture}
                    alt={result.company.name}
                    width={20}
                    height={20}
                  /> */}

                  <Text>{`${result.company.name} - ${result.name}`}</Text>
                </div>
              </Table.Td>
              <Table.Td>
                <Flex gap={8} align="center">
                  <Text>
                    R${' '}
                    {parseFloat(result.price || '0')
                      .toFixed(2)
                      .replace('.', ',')}
                  </Text>
                  {parseFloat(result.price || '0') === lowestPrice && (
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
                  <Text>{`${result.delivery_time} dias úteis`}</Text>
                  {result.delivery_time === fastestDelivery && (
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
                    getShippingType(result.delivery_time || 0) === 'Econômico'
                      ? 'green'
                      : getShippingType(result.delivery_time || 0) ===
                          'Expresso'
                        ? 'red'
                        : 'blue'
                  }
                >
                  {getShippingType(result.delivery_time || 0)}
                </Badge>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Box className="md:hidden mt-4">
        {results.map((result, index) => (
          <Card key={index} withBorder mb="sm" p="sm">
            <Text fw={600}>{`${result.company.name} - ${result.name}`}</Text>
            <Group mt="xs" justify="space-between">
              <Flex direction="column">
                <Text size="sm" c="dimmed">
                  Valor:
                </Text>
                <Flex gap={8} align="center" wrap="wrap">
                  <Text>
                    R${' '}
                    {parseFloat(result.price || '0')
                      .toFixed(2)
                      .replace('.', ',')}
                  </Text>
                  {parseFloat(result.price || '0') === lowestPrice && (
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
                  <Text>{`${result.delivery_time} dias úteis`}</Text>
                  {result.delivery_time === fastestDelivery && (
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
                    getShippingType(result.delivery_time || 0) === 'Econômico'
                      ? 'green'
                      : getShippingType(result.delivery_time || 0) ===
                          'Expresso'
                        ? 'red'
                        : 'blue'
                  }
                >
                  {getShippingType(result.delivery_time || 0)}
                </Badge>
              </Flex>
            </Group>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
