import { PageImage } from '../components/bg_image'

import { SignIn } from '@clerk/nextjs'

const srcImage1 =
  'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

const Login = () => {
  return (
    <div className="mx-auto my-auto flex min-h-full max-w-7xl items-center pt-5 sm:gap-x-6 sm:pl-12">
      <SignIn />
      <PageImage src={srcImage1} />
    </div>
  )
}

export default Login

{
  /*<div className="mx-auto my-auto flex min-h-full max-w-7xl pt-5 sm:gap-x-6 sm:pl-12">
      <LoginForms />
      <PageImage src={srcImage1} />
     </div>*/
}
