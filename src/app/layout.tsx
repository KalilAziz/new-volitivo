import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Painel do Usuário',
  description: 'Generated by create next app'
}

type RootLayoutProps = { children: React.ReactNode }

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={cn('h-full', inter.className)}>{children}</body>
    </html>
  )
}

export default RootLayout
