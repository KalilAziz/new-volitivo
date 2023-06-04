'use client'
import { useState } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/lib/utils';

type User = {
  name: string;
  email: string;
  imageUrl: string;
};

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

type UserNavigationItem = {
  name: string;
  href: string;
};

const userNavigation: UserNavigationItem[] = [
  { name: 'Perfil', href: '#' },
  { name: 'Configurações', href: '#' },
  { name: 'Sair', href: '/' },
];

const navigation: NavigationItem[] = [
  { name: "Painel", href: "/dashboard", current: true },
  { name: "Provas", href: "/exams", current: false },
  { name: "Histórico", href: "/dashboard/", current: false },
  { name: "Calendário", href: "/blog", current: false },
  { name: "Reportar", href: "/contact", current: false },
]

function classNames(...navigation: string[]) {
  return navigation.filter(Boolean).join(' ');
}

export const UserHeader = ({ user } : { user: User }) => {
  const segment = useSelectedLayoutSegment()
  
  return (
  <Disclosure as="nav" className="bg-white border">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-white">
                <Link href="/" >
                <img
                  className="h-12 w-12"
                  src="/logo.png"
                  alt="logo"
                />
                </Link>
              </div>
              <div className="hidden h-16 items-center ml-10 md:flex space-x-8">
                  {navigation.map((item) => {
                  const current = item.href.replace('/', '') === segment || (item.href.replace('/', '') === '' && segment == null)
  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'text-sm font-medium leading-6 pt-5 text-gray-400 h-16',
                        current
                          ? 'border-b-2 border-blue-700 text-blue-700 font-semibold'
                          : 'border-b-2 border-transparent hover:text-gray-500 hover:border-gray-300'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                      })}
                
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-3 flex items-center md:ml-6">
                {/*<button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-800 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inherit"
                >
                  <span className="sr-only">Ver notificações</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>*/}
                
                {/* Lista suspensa de perfil */}
                <Menu as="div" className="relative ml-3">
                  <div className="flex gap-3">
                    <Menu.Button className="rounded-full bg-white p-1 text-gray-800 hover:text-slate-500 hover:ring-2 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-400">
                      <span className="sr-only">Ver notificações</span>
                      <BellIcon className="h-6 w-7 rounded-full" aria-hidden="true" />
                    </Menu.Button>
                    <Menu.Button className="flex max-w-xs items-center rounded-full border-white bg-gray-800 text-sm hover:ring-2 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-400">
                      <span className="sr-only">Abrir menu do usuário</span>
                      <img className="h-9 w-9 rounded-full" src={user.imageUrl} alt="Avatar" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Botão de Menu Mobile */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md mr-2 bg-white p-1 text-gray-700 hover:bg-gray-400 hover:text-white focus:outline-none">
                <span className="sr-only">Abrir menu principal</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                href={item.href}
                as = "a"
                className={cn(
                  item.href.replace('/', '') === segment || (item.href.replace('/', '') === '' && segment == null) ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-blue-300 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}            
              </Disclosure.Button>
            )) }
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">{user.name}</div>
                <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:bg-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Ver notificações</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-blue-300 hover:text-white"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  
  );
};