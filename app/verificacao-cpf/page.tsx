import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { GovBrHeader } from "@/components/gov-br-header"
import { GovBrFooter } from "@/components/gov-br-footer"

export default function VerificacaoCPF() {
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

        <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-1">Portal de Verificação de Identidade</h2>
          <p className="text-gray-700 mb-6">
            Confirme seus dados para prosseguir com o processo de aquisição do Monjauros.
          </p>

          <div className="border-l-4 border-blue-800 bg-blue-50 p-4 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                <span>i</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">Verificação de Identidade</h3>
                <p className="text-sm text-gray-700">
                  Seus dados serão consultados na base governamental para confirmar sua identidade. Este processo é 100%
                  seguro e seus dados estão protegidos de acordo com a LGPD.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-center mb-4">Consulta de CPF</h3>
          <p className="text-center mb-4">Confira se os dados estão corretos</p>

          <div className="mb-6">
            <p className="text-center font-medium mb-1">CPF:</p>
            <p className="text-center text-lg font-bold mb-4">70272153656</p>

            <div className="text-blue-600 text-center text-sm mb-4">
              Dados encontrados! Para sua segurança, por favor, confirme as informações abaixo.
            </div>

            <p className="font-medium mb-2">Etapa 1 de 2: Qual é o seu nome completo?</p>

            <RadioGroup defaultValue="option-1" className="space-y-2">
              <div className="border rounded-md p-3">
                <RadioGroupItem value="option-1" id="option-1" className="peer sr-only" />
                <Label
                  htmlFor="option-1"
                  className="flex flex-col gap-1 cursor-pointer p-2 rounded-md peer-data-[state=checked]:bg-blue-50"
                >
                  <span>PEDRO ALVES SILVA</span>
                </Label>
              </div>
              <div className="border rounded-md p-3">
                <RadioGroupItem value="option-2" id="option-2" className="peer sr-only" />
                <Label
                  htmlFor="option-2"
                  className="flex flex-col gap-1 cursor-pointer p-2 rounded-md peer-data-[state=checked]:bg-blue-50"
                >
                  <span>MANUELA PEREIRA ALMEIDA</span>
                </Label>
              </div>
              <div className="border rounded-md p-3">
                <RadioGroupItem value="option-3" id="option-3" className="peer sr-only" />
                <Label
                  htmlFor="option-3"
                  className="flex flex-col gap-1 cursor-pointer p-2 rounded-md peer-data-[state=checked]:bg-blue-50"
                >
                  <span>LAURA TEIXEIRA ALVES</span>
                </Label>
              </div>
              <div className="border rounded-md p-3">
                <RadioGroupItem value="option-4" id="option-4" className="peer sr-only" />
                <Label
                  htmlFor="option-4"
                  className="flex flex-col gap-1 cursor-pointer p-2 rounded-md peer-data-[state=checked]:bg-blue-50"
                >
                  <span>THAIS MAXIMIANA SOARES GOMES</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-center">
            <Link href="/verificacao-data">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded-full">
                Continuar
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <GovBrFooter />
    </div>
  )
}
