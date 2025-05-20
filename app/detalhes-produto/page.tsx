import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DetalhesProduto() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-center text-blue-900">Centro de Verificação Digital | ANVISA</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
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
          <Link href="/endereco-entrega" className="hover:underline">
            Endereço de Entrega
          </Link>
          <span className="mx-2">{">"}</span>
          <span className="font-medium">Detalhes da Compra</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Detalhes do Produto</h2>
          <p className="text-gray-700 mb-6">Revise as informações e confirme sua aquisição do Mounjaro.</p>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Site Oficial
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Conexão Segura
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Dados Protegidos
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              Aprovado pela ANVISA
            </Badge>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image
                  src="/mounjaro-pen.png"
                  alt="Mounjaro - Tirzepatida 5mg"
                  width={50}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-blue-900 mb-1">Mounjaro – Tirzepatida 5mg</h3>
                <p className="text-gray-600 mb-4">Fabricante: Eli Lilly</p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <h4 className="text-amber-800 font-medium mb-2">Recomendação Personalizada</h4>
                  <p className="font-bold text-amber-700 mb-1">
                    Apenas <span className="text-amber-600">184</span> unidades em estoque
                  </p>
                  <div className="flex items-start">
                    <div className="border-l-4 border-red-500 pl-3 py-1">
                      <p className="text-red-600 font-bold mb-1">Estoque limitado!</p>
                      <p className="text-gray-700">A ANVISA liberou somente 1.000 canetas... restam 184 unidades.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-800 mb-4">Mounjaro (Tirzepatida)</h3>
                <p className="text-gray-700 mb-2">3 Canetas injetáveis de 5mg – Tratamento para 3 meses</p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center text-amber-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span className="text-gray-600 ml-2">(4.8/5 - 3.427 avaliações)</span>
                </div>

                <h4 className="text-lg font-bold text-blue-800 mb-3 border-b border-blue-800 pb-1 inline-block">
                  Principais Benefícios
                </h4>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="border-l-4 border-green-500 pl-3 py-1">
                      <h5 className="text-blue-800 font-bold mb-1">Aplicação Simplificada</h5>
                      <p className="text-gray-700">Caneta pronta para uso, sem necessidade de preparo.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="border-l-4 border-indigo-500 pl-3 py-1">
                      <h5 className="text-blue-800 font-bold mb-1">Tecnologia Avançada</h5>
                      <p className="text-gray-700">Desenvolvido com tecnologia de última geração.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Opções de Entrega</h3>

          <div className="border border-green-200 rounded-lg p-4 bg-green-50 mb-6">
            <h4 className="font-bold text-gray-800 mb-1">Correios Normal</h4>
            <p className="text-gray-600 mb-1">Até 9 dias úteis – Grátis</p>
            <p className="text-gray-600">Entrega em 28/05/2025</p>
          </div>

          <div className="flex items-center justify-between border-t pt-6">
            <div>
              <p className="text-gray-700 font-medium">Valor Total:</p>
              <p className="text-2xl font-bold text-blue-800">R$ 97.90</p>
            </div>

            <Link href="/pagamento">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
                Realizar Pagamento
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
