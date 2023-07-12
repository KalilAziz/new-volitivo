'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { navigationMaster } from '@/config/navigation-master'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { SectionContent } from '../section-content'

type HeaderProps = {
  user: {
    userName?: string | null
    image?: string | null
  }
}

export const Header = ({ user }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const segment = useSelectedLayoutSegment()

  return (
    <header className=" bg-white">
      <SectionContent>
        <nav className="flex items-center justify-between gap-x-6 " aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Volitivo</span>
              <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
              <span className="text-lg font-medium">Volitivo</span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigationMaster.map((item) => {
              const current =
                item.href.replace('/', '') === segment || (item.href.replace('/', '') === '' && segment == null)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold leading-6 text-gray-900',
                    current
                      ? 'border-b-2 border-blue-700 text-blue-700'
                      : 'border-b-2 border-transparent hover:text-blue-600'
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
          <div className="flex flex-1 items-center justify-end sm:gap-x-6">
            {user.userName ? (
              <>
                <Link href="/dashboard">
                  <Button variant={'link'}>Painel</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button
                    variant={'ghost'}
                    className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button>Cadastre-se</Button>
                </Link>
              </>
            )}
          </div>
          <div className="flex lg:hidden">
            <Button
              variant={'link'}
              className="-m-2.5 inline-flex items-center justify-center text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </nav>
      </SectionContent>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between gap-x-6">
            <Link href="/" className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Volitivo</span>
              <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
              <span className="text-lg font-medium">Volitivo</span>
            </Link>
            {!user.userName && (
              <Link href="/sign-up" className="-mr-5">
                <Button onClick={() => setMobileMenuOpen(false)} className="w-32">
                  Cadrastre-se
                </Button>
              </Link>
            )}

            <Button
              variant={'link'}
              className="-m-2.5 inline-flex items-center justify-center text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-gray-500/8 -my-6 divide-y">
              <div className="space-y-2 py-6">
                {navigationMaster.map((item) => {
                  const current =
                    item.href.replace('/', '') === segment || (item.href.replace('/', '') === '' && segment == null)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50',
                        current
                          ? 'border-b-2 border-blue-700 text-blue-700'
                          : 'order-b-2 border-transparent hover:text-blue-600'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
              <div className="py-6">
                {user.userName ? (
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Painel
                  </Link>
                ) : (
                  <Link
                    href="/sign-in"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
