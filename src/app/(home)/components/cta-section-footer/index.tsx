import Link from 'next/link'

import { SectionContent } from '@/components/interface/section-content'
import { Text } from '@/components/ui/text'

export const CtaSectionFooter = () => {
  return (
    <div className="bg-white">
      <SectionContent className="py-24 sm:py-32">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Aumente sua produtividade hoje.
          </h2>
          <Text className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Na Volitivo você conta com uma plataforma que acompanha seu progresso e aprendizado, ajudando a melhorar
            cada vez mais seus resultados.
          </Text>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/login"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Comece agora
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white">
              Saiba mais <span aria-hidden="true">→</span>
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </SectionContent>
    </div>
  )
}
