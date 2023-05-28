import { SectionContent } from '@/components/interface/section-content'
import { Heading } from '@/components/ui/heading'
import { LoginImage } from './components/bg_image'
import { LoginForms } from './components/forms'

const Login = () => {
  return (
      <div className="flex min-h-full pt-5 mx-auto my-auto max-w-7xl sm:pl-8">
        <LoginForms/>
        <LoginImage/>

      </div>
  )
}

export default Login
