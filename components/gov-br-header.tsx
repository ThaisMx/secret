import Image from "next/image"
import Link from "next/link"

export function GovBrHeader() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-2">
        <Link href="/">
          <Image
            src="/govbr-header.png"
            alt="gov.br"
            width={500}
            height={60}
            className="w-full max-w-[500px] h-auto"
            priority
          />
        </Link>
      </div>
    </header>
  )
}
