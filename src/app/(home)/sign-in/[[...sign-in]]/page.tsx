import { PageImage } from '../../user/components/bg_image'

import { SignIn } from '@clerk/nextjs'

const srcImage1 =
  'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

export default function Page() {
  return (
    <div className="mx-auto my-auto flex min-h-full max-w-7xl items-center justify-center py-12">
      <SignIn afterSignInUrl="/" />
    </div>
  )
}
