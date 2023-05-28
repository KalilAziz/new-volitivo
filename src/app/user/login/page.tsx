import { SectionContent } from '@/components/interface/section-content'
import { Heading } from '@/components/ui/heading'
import { PageImage } from '../components/bg_image'
import { LoginForms } from '../components/formsLogin'

const srcImage1 = "https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"

const srcImage2 = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"

const Login = () => {
  return (
      <div className="flex min-h-full pt-5 mx-auto my-auto max-w-7xl sm:pl-8">
        <LoginForms/>
        <PageImage src = {srcImage1}/>

      </div>
  )
}

export default Login
