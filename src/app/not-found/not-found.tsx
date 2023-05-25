import { SectionContent } from '@/components/interface/section-content'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import Link from 'next/link'

const NotFound = () => {
  return (
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
       <img src="/logo.png" alt="logo" className='h-20 w-auto'/>
        <div className="text-center">
          <Text className="text-base font-semibold text-blue-600">404</Text>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página não encontrada</h1>
          <Text className="mt-6 text-base leading-7 text-gray-600">Desculpe, não encontramos a página que você está procurando.</Text>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/" >
             <Button>
              Voltar a home
              </Button> 
            </Link>
            <Link href="/contact">
             <Button variant={'link'} className='font-semibold text-gray-900'> 
              Contatar suporte<span aria-hidden="true">&rarr;</span>
             </Button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default NotFound