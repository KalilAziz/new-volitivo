import { PageImage } from '../../user/components/bg_image'

import { SignUp } from '@clerk/nextjs'

const srcImage1 =
  'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

export default function Page() {
  return (
    <div className="grid justify-center justify-items-center lg:grid-cols-2">
      <div>
        <SignUp afterSignUpUrl="/" />
      </div>
      <PageImage src={srcImage1} />
    </div>
  )
}
