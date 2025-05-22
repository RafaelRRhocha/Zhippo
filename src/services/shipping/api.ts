import { CreateShippingData, Shipping } from '@/interfaces/shipping';
import { apiClient } from '@/services/api/client';

class ShippingService {
  async calculate(data: CreateShippingData): Promise<Shipping[]> {
    const { data: response } = await apiClient.post<Shipping[]>(
      '/api/shipping/calculate',
      data,
    );

    return response.filter((r) => r.error === undefined);
  }
}

export const shippingService = new ShippingService();
