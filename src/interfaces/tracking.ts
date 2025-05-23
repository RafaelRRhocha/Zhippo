export interface TrackingData {
  orders: string[];
}

export interface TrackingResult {
  id: string;
  protocol: string;
  status: string;
  tracking: string;
  melhorenvio_tracking: string;
  created_at: string;
  paid_at: string;
  generated_at: string;
  posted_at: string;
  delivered_at: string | null;
  canceled_at: string | null;
  expired_at: string | null;
}

export interface TrackingResponse {
  [key: string]: TrackingResult;
}
