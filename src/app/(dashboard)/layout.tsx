import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/interface/footer'
import { Toaster } from '@/components/ui/toaster'
import { UserHeader } from '@/components/interface/userHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Painel do Usuário',
  description: 'Generated by create next app'
}

type RootLayoutProps = { children: React.ReactNode }

const user = {
  name: 'Pedro Galvão',
  email: 'pedro@gmail.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const RootLayout = ({ children } : RootLayoutProps) => {
  return (
    <html lang="pt-BR">
    <body className={inter.className}>
      <UserHeader user = {user} />
      <main>
        {children}
      </main>
      <Toaster/>
      <Footer/>
      </body>
    </html>
  )
}

export default RootLayout