import { Forms } from './components/forms'
import { Text } from '@/components/ui/text'

const PageContact = () => {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Entrar em Contato</h2>
        <Text size={'lg'} className="mt-2 leading-8 text-gray-600">
          Prencha os campos abaixos.
        </Text>
      </div>
      <Forms />
    </div>
  )
}

export default PageContact
