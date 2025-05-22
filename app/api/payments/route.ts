import { NextResponse } from 'next/server';
import axios from 'axios';
import { generateBloobankHeaders } from '@/lib/auth';

const API_URL = process.env.BLOOBANK_API_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const bodyString = JSON.stringify(body);

    const headers = generateBloobankHeaders('POST', '/v1/payments', bodyString);

    const response = await axios.post(`${API_URL}/payments`, body, { headers });
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Erro ao criar pagamento:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Erro ao processar pagamento' },
      { status: error.response?.status || 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get('paymentId');

    if (!paymentId) {
      return NextResponse.json(
        { error: 'ID do pagamento não fornecido' },
        { status: 400 }
      );
    }

    const headers = generateBloobankHeaders('GET', `/v1/payments/${paymentId}`);

    const response = await axios.get(`${API_URL}/payments/${paymentId}`, { headers });
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Erro ao verificar status do pagamento:', error.response?.data || error.message);
    return NextResponse.json(
      { error: 'Erro ao verificar status do pagamento' },
      { status: error.response?.status || 500 }
    );
  }
} 