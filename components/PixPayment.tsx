"use client";
import { useState, useEffect } from 'react';
import { paymentService } from '@/lib/payments';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Image from 'next/image';

interface PixPaymentProps {
  amount: number;
  customerData: {
    name: string;
    cpf: string;
  };
  onSuccess?: () => void;
}

export function PixPayment({ amount, customerData, onSuccess }: PixPaymentProps) {
  const [loading, setLoading] = useState(false);
  const [pixData, setPixData] = useState<{
    qrcode: string;
    copypaste: string;
    expiresAt: string;
  } | null>(null);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  const handleCreatePixPayment = async () => {
    try {
      setLoading(true);
      const response = await paymentService.createPixPayment({
        method: 'pix',
        amount: {
          value: amount,
        },
        customer: {
          doc: {
            type: 'CPF',
            value: customerData.cpf,
          },
          name: customerData.name,
        },
        installments: 1,
        pix: {
          expiresIn: 7200, // 2 horas (anteriormente 3600 - 1 hora)
        },
      });

      setPixData(response.pix);
      setPaymentId(response.id);
      console.log('QR Code base64:', response.pix.qrcode); // Log para depuração
      toast.success('QR Code PIX gerado com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar pagamento PIX:', error);
      toast.error('Erro ao gerar pagamento PIX. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const copyPixCode = () => {
    if (pixData?.copypaste) {
      navigator.clipboard.writeText(pixData.copypaste);
      toast.success('Código PIX copiado!');
    }
  };

  // Gerar o pagamento PIX automaticamente ao carregar o componente
  useEffect(() => {
    handleCreatePixPayment();
  }, []); // Array de dependências vazio para executar apenas uma vez ao montar o componente

  // Verificar status do pagamento
  useEffect(() => {
    if (!paymentId) return;

    const checkStatus = async () => {
      try {
        const status = await paymentService.getPaymentStatus(paymentId);
        if (status.status === 'approved') {
          toast.success('Pagamento aprovado!');
          onSuccess?.();
        } else if (['rejected', 'expired'].includes(status.status)) {
          toast.error('Pagamento não foi concluído. Tente novamente.');
          setPixData(null);
          setPaymentId(null);
        }
      } catch (error) {
        console.error('Erro ao verificar status:', error);
      }
    };

    const interval = setInterval(checkStatus, 5000); // Verifica a cada 5 segundos
    return () => clearInterval(interval);
  }, [paymentId, onSuccess]);

  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Pagamento via PIX</h2>
          <p className="text-gray-500 mt-2">
            Valor: R$ {(amount / 100).toFixed(2).replace('.', ',')}
          </p>
        </div>

        {!pixData ? (
          <div className="text-center text-gray-500">
            {loading ? 'Gerando QR Code...' : 'Aguardando geração do QR Code...'}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Image
                src={`data:image/png;base64,${pixData.qrcode}`}
                alt="QR Code PIX"
                width={200}
                height={200}
                className="border rounded-lg p-2"
              />
            </div>

            <div className="space-y-2">
              <Label>Código PIX Copia e Cola</Label>
              <div className="flex gap-2">
                <Input
                  value={pixData.copypaste}
                  readOnly
                  className="flex-1"
                />
                <Button
                  onClick={copyPixCode}
                  variant="outline"
                >
                  Copiar
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>QR Code válido até:</p>
              <p>{new Date(pixData.expiresAt).toLocaleString()}</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-sm text-yellow-800">
              <p className="font-medium">Instruções:</p>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Abra o aplicativo do seu banco</li>
                <li>Escolha a opção PIX</li>
                <li>Escaneie o QR Code ou cole o código</li>
                <li>Confirme o pagamento</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
} 