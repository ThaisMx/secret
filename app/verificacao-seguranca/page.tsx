"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GovBrHeader } from "@/components/gov-br-header"
import { GovBrFooter } from "@/components/gov-br-footer"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function VerificacaoSeguranca() {
  const router = useRouter()
  const [selectedImages, setSelectedImages] = useState<number[]>([])

  const images = [
    { id: 1, src: "/traffic-light-1.png", alt: "Semáforo com luz vermelha", isTrafficLight: true },
    { id: 2, src: "/car-dark.png", alt: "Carro escuro", isTrafficLight: false },
    { id: 3, src: "/traffic-light-2.png", alt: "Semáforo com luz verde", isTrafficLight: true },
    { id: 4, src: "/dock-water.png", alt: "Escada perto da água", isTrafficLight: false },
    { id: 5, src: "/curved-road.png", alt: "Estrada curva", isTrafficLight: false },
    { id: 6, src: "/lake-mountains.png", alt: "Lago com montanhas", isTrafficLight: false },
    { id: 7, src: "/traffic-light-3.png", alt: "Semáforo com luzes vermelha e verde", isTrafficLight: true },
    { id: 8, src: "/snowy-mountain.png", alt: "Montanha com neve", isTrafficLight: false },
    { id: 9, src: "/brooklyn-bridge.png", alt: "Ponte do Brooklyn", isTrafficLight: false },
  ]

  const toggleImageSelection = (id: number) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter((imageId) => imageId !== id))
    } else {
      setSelectedImages([...selectedImages, id])
    }
  }

  const handleVerify = () => {
    // Na vida real, verificaríamos se as imagens corretas foram selecionadas
    // Aqui, apenas redirecionamos para a próxima página
    router.push("/verificacao-cpf")
  }

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

        <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Verificação de Segurança</h2>

          <p className="text-center mb-6">
            Selecione as imagens que contêm <strong>semáforo de trânsito</strong>.
          </p>

          <div className="grid grid-cols-3 gap-2 mb-6">
            {images.map((image) => (
              <div
                key={image.id}
                className={`aspect-square bg-gray-100 rounded overflow-hidden cursor-pointer relative ${
                  selectedImages.includes(image.id) ? "ring-4 ring-blue-500" : ""
                }`}
                onClick={() => toggleImageSelection(image.id)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
                {selectedImages.includes(image.id) && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
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
                )}
              </div>
            ))}
          </div>

          <p className="text-center mb-4 text-sm">
            Selecionado: {selectedImages.length}/3
            {selectedImages.length > 3 && <span className="text-red-500 ml-2">Selecione apenas 3 imagens</span>}
          </p>

          <div className="flex justify-center">
            <Button
              className={`py-2 px-8 rounded-full ${
                selectedImages.length === 3
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-200 text-blue-800 cursor-not-allowed"
              }`}
              onClick={handleVerify}
              disabled={selectedImages.length !== 3}
            >
              Verificar
            </Button>
          </div>
        </div>
      </main>

      <GovBrFooter />
    </div>
  )
}
