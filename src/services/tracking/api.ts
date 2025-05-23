import { TrackingData, TrackingResponse } from '@/interfaces/tracking';
import { apiClient } from '@/services/api/client';

class TrackingService {
  async track(data: TrackingData): Promise<TrackingResponse> {
    const { data: response } = await apiClient.post<TrackingResponse>(
      '/api/tracking/track',
      data,
    );

    return response;
  }
}

export const trackingService = new TrackingService();
