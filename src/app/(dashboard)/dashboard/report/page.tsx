import { Forms } from '@/app/(home)/contact/components/forms'
import { Text } from '@/components/ui/text'

const ReportPage = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <Text size={'lg'} className="mt-2 leading-8 text-gray-600">
          Prencha os campos abaixos.
        </Text>
      </div>
      <Forms />
    </>
  )
}

export default ReportPage
