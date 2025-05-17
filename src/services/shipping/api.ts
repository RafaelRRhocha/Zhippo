import { CreateShippingData, Shipping } from '@/interfaces/shipping';
import { apiClient } from '@/services/api/client';

import { MOCK_SHIPPING_DATA } from './mock-data';

class ShippingService {
  async calculate(
    data: CreateShippingData,
    mode: 'mock' | 'external',
  ): Promise<Shipping[]> {
    if (mode === 'mock') {
      return MOCK_SHIPPING_DATA.filter((r) => r.error === undefined);
    }

    const { data: response } = await apiClient.post<Shipping[]>(
      '/me/shipment/calculate',
      data,
    );

    return response.filter((r) => r.error === undefined);
  }
}

export const shippingService = new ShippingService();
