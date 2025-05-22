import axios from 'axios';

interface CreatePixPaymentRequest {
  method: 'pix';
  amount: {
    value: number;
  };
  customer: {
    doc: {
      type: 'CPF';
      value: string;
    };
    name: string;
    phone?: string;
    email?: string;
  };
  pix?: {
    expiresIn?: number; // opcional, padrão 8600 segundos
  };
  installments: number;
  metadata?: Record<string, any>;
}

interface PixPaymentResponse {
  id: string;
  status: 'pending' | 'approved' | 'rejected' | 'in_process' | 'expired' | 'refunded' | 'chargeback';
  pix: {
    qrcode: string;
    copypaste: string;
    expiresAt: string;
  };
}

export const paymentService = {
  createPixPayment: async (data: CreatePixPaymentRequest): Promise<PixPaymentResponse> => {
    try {
      const response = await axios.post('/api/payments', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar pagamento PIX:', error);
      throw error;
    }
  },

  getPaymentStatus: async (paymentId: string): Promise<PixPaymentResponse> => {
    try {
      const response = await axios.get(`/api/payments?paymentId=${paymentId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao verificar status do pagamento:', error);
      throw error;
    }
  },
}; 