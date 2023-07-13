'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import { navigationDashboard } from '@/config/navigation-dashboard'
import { cn } from '@/lib/utils'
import { UserButton } from '@clerk/nextjs'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { SubHeader } from './sub-header'
import { UserAvatar } from './user-avatar'

type HeaderDashboardProps = {
  children: React.ReactNode
}

export const HeaderDashboard = ({ children }: HeaderDashboardProps) => {
  const segment = useSelectedLayoutSegments()

  const segmentUser = segment[segment.length - 1]

  const isCurrent = (href: string) => {
    if (href === '' && segmentUser === 'dashboard') return true

    return segmentUser === href
  }

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="border-b border-gray-200 bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/">
                      <Image
                        width={40}
                        height={40}
                        className="block h-10 w-auto lg:hidden"
                        src="/logo.png"
                        alt="Your Company"
                      />
                      <Image
                        width={40}
                        height={40}
                        className="hidden h-10 w-auto lg:block"
                        src="/logo.png"
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:-my-px sm:ml-8 sm:flex sm:space-x-8">
                    {navigationDashboard.map((item) => (
                      <Link
                        key={item.name}
                        href={`/dashboard/${item.href}`}
                        className={cn(
                          isCurrent(item.href)
                            ? 'border-blue-700 text-gray-900'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                        )}
                        aria-current={isCurrent(item.href) ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <UserAvatar />

                <div className="-mr-2 flex items-center gap-x-4 sm:hidden">
                  <div>
                    <UserButton />
                  </div>
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigationDashboard.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={`/dashboard/${item.href}`}
                    className={cn(
                      isCurrent(item.href)
                        ? 'border-blue-500 bg-indigo-50 text-blue-700'
                        : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                      'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                    )}
                    aria-current={isCurrent(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <UserButton />
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="py-10">
        <SubHeader />
        <main>
          <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

{
  /*
  <div className="flex-shrink-0">
    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
  </div>
  <div className="ml-3">
    <div className="text-base font-medium text-gray-800">{user.name}</div>
    <div className="text-sm font-medium text-gray-500">{user.email}</div>
  </div>
  <div className="mt-3 space-y-1">
      {userNavigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
*/
}
