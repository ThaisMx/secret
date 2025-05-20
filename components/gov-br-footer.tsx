import Link from "next/link"

export function GovBrFooter() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="flex items-center">
            <span className="text-white font-bold text-2xl">gov</span>
            <span className="text-white font-bold text-2xl">.br</span>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="border-b border-blue-800 py-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold uppercase">Acesso à Informação</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="border-b border-blue-800 py-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold uppercase">Áreas de Atuação</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="border-b border-blue-800 py-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold uppercase">Assuntos</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="border-b border-blue-800 py-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold uppercase">Canais de Atendimento</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="border-b border-blue-800 py-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold uppercase">Centrais de Conteúdo</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="border-b border-blue-800 py-3">
            <div className="flex justify-between items-center">
              <h3 className="font-bold uppercase">Composição</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white mr-2"
          >
            <path d="M12 2a10 10 0 1 0 20 0 10 10 0 0 0-20 0z" />
          </svg>
          <span className="text-white text-sm">Redefinir Cookies</span>
        </div>

        <div className="mt-8">
          <h3 className="font-bold uppercase mb-4">REDES SOCIAIS</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7s3.358 7 7.5 7z" />
                <path d="M12 16.5c1.933 0 3.5-1.567 3.5-3.5S13.933 9.5 12 9.5 8.5 11.067 8.5 13s1.567 3.5 3.5 3.5z" />
                <path d="M17.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
            </a>
            <a href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center">
          <div className="bg-white rounded-full p-2 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-900"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <span className="text-white font-medium">Acesso à Informação</span>
        </div>

        <div className="mt-8 text-sm text-gray-300">
          <p>
            Todo o conteúdo deste site está publicado sob a licença Creative Commons Atribuição-SemDerivações 3.0 Não
            Adaptada
          </p>
        </div>
      </div>
    </footer>
  )
}
