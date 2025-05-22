import { NextResponse } from 'next/server';

import { CreateShippingData, Shipping } from '@/interfaces/shipping';
import { apiClient } from '@/services/api/client';

export async function POST(request: Request) {
  try {
    const body: CreateShippingData = await request.json();

    const { data } = await apiClient.post<Shipping[]>(
      '/me/shipment/calculate',
      body,
    );

    return NextResponse.json(data);
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
