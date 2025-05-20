import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GovBrHeader } from "@/components/gov-br-header"
import { GovBrFooter } from "@/components/gov-br-footer"

export default function Pagamento() {
  return (
    <div className="flex flex-col min-h-screen">
      <GovBrHeader />

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

        <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto text-center">
          <div className="mb-6">
            <Image src="/mounjaro-pen.png" alt="Monjaro" width={40} height={80} className="mx-auto" />
          </div>

          <h2 className="text-lg font-bold mb-2">3x Canetas Monjaro (5mg)</h2>
          <p className="text-2xl font-bold text-blue-800 mb-6">R$ 97.90</p>

          <div className="mb-6">
            <Image src="/qr-code.png" alt="QR Code PIX" width={200} height={200} className="mx-auto border p-2" />
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Código PIX (Copia e Cola):</h3>
            <div className="bg-gray-100 p-3 rounded text-xs text-gray-800 break-all mb-2">
              00020101021226280014br.gov.bcb.pix2668qrc.pde.cillumpay.com.br/payment/5af1da83-8fa 0a2d5c0a9b1a1b
              LTDA6M9Sao Paulo6ZM9503***
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Copiar Código</Button>
          </div>

          <div className="bg-red-100 text-red-800 p-2 rounded-md mb-4">Este PIX expira em: 14:50</div>

          <p className="text-sm text-gray-600 mb-6">
            Abra o aplicativo do seu banco, escolha PIX, escaneie o QR Code ou cole o código.
          </p>

          <p className="text-sm text-gray-600 mb-2">
            Após o pagamento, confirmação será processada e você poderá ser notificado por e-mail ou SMS.
          </p>

          <p className="text-xs text-gray-500">
            Referente à sua solicitação de Monjaro (D.M. Farmácia (VVGLLC) bvsd33aa)
          </p>
        </div>
      </main>

      <GovBrFooter />
    </div>
  )
}
