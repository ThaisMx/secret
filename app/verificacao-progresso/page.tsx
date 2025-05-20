"use client"

import Link from "next/link"
import { GovBrHeader } from "@/components/gov-br-header"
import { GovBrFooter } from "@/components/gov-br-footer"
import { CheckCircle, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function VerificacaoProgresso() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Verificando Histórico Clínico",
      description: "Consultando bases de dados da ANVISA",
      completed: false,
    },
    {
      id: 2,
      title: "Consultando Registros no SUS",
      description: "Verificando histórico médico e elegibilidade",
      completed: false,
    },
    {
      id: 3,
      title: "Validando Prescrição com a Anvisa",
      description: "Conferindo registros de medicamentos prescritos",
      completed: false,
    },
    {
      id: 4,
      title: "Obtendo Dados de Saúde Complementares",
      description: "Buscando histórico de saúde familiar",
      completed: false,
    },
  ])

  useEffect(() => {
    // Função para completar cada etapa sequencialmente
    const completeSteps = async () => {
      // Etapa 1
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSteps((prev) => prev.map((step) => (step.id === 1 ? { ...step, completed: true } : step)))
      setProgress(25)

      // Etapa 2
      await new Promise((resolve) => setTimeout(resolve, 1800))
      setSteps((prev) => prev.map((step) => (step.id === 2 ? { ...step, completed: true } : step)))
      setProgress(50)

      // Etapa 3
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSteps((prev) => prev.map((step) => (step.id === 3 ? { ...step, completed: true } : step)))
      setProgress(75)

      // Etapa 4
      await new Promise((resolve) => setTimeout(resolve, 2500))
      setSteps((prev) => prev.map((step) => (step.id === 4 ? { ...step, completed: true } : step)))
      setProgress(100)

      // Redirecionar após completar todas as etapas
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/detalhes-produto")
    }

    completeSteps()
  }, [router])

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

          <h3 className="text-xl font-bold text-center mb-6">Verificação em Progresso</h3>

          <div className="mb-8">
            <div className="relative pt-1 mb-8">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-blue-600">0%</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">50%</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">100%</span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                ></div>
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start">
                  <div
                    className={`${step.completed ? "bg-green-100 text-green-500" : "bg-gray-100 text-blue-500"} rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0`}
                  >
                    {step.completed ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Loader2 className={`w-4 h-4 ${steps[step.id - 2]?.completed ? "animate-spin" : ""}`} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{step.title}</h4>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <span className="text-blue-600 text-sm">Aguarde enquanto verificamos seus dados...</span>
          </div>
        </div>
      </main>

      <GovBrFooter />
    </div>
  )
}
