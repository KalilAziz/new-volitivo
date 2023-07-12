import { Fragment } from 'react'

import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from 'lucide-react'

export const userNavigation = [
  { name: 'Seu perfil', href: '#' },
  { name: 'Configurações', href: '#' },
  { name: 'Sair', href: '/' }
]

export const UserAvatar = () => {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:gap-x-3">
      <button
        type="button"
        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <UserButton />
    </div>
  )
}
