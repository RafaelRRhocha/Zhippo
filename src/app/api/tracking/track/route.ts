import { NextResponse } from 'next/server';

import { TrackingData, TrackingResponse } from '@/interfaces/tracking';
import { apiClient } from '@/services/api/client';

export async function POST(request: Request) {
  try {
    const body: TrackingData = await request.json();

    console.log(body);

    const { data } = await apiClient.post<TrackingResponse>(
      '/me/shipment/tracking',
      body,
    );

    console.log(data);

    // const data = {
    //   '164ad792-66db-4ea2-b234-75e632465b53': {
    //     id: '164ad792-66db-4ea2-b234-75e632465b53',
    //     protocol: 'ORD-202304125603',
    //     status: 'posted',
    //     tracking: 'ME23002OWZ7BR',
    //     melhorenvio_tracking: 'ME23002OWZ7BR',
    //     created_at: '2023-04-14 20:32:15',
    //     paid_at: '2023-04-17 13:36:53',
    //     generated_at: '2023-04-17 13:38:20',
    //     posted_at: '2023-04-17 13:55:05',
    //     delivered_at: null,
    //     canceled_at: null,
    //     expired_at: null,
    //   },
    // };

    return NextResponse.json({} as TrackingResponse);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 },
    );
  }
}
