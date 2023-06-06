import { PageImage } from '../components/bg_image'
import { RegisterForms } from '../components/formsRegister'

const srcImage2 =
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

const Register = () => {
  return (
    <div className="mx-auto my-auto flex min-h-full max-w-7xl pt-5 sm:gap-x-6 sm:pl-12">
      <RegisterForms />
      <PageImage src={srcImage2} />
    </div>
  )
}

export default Register
