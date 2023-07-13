'use client'

import { useState } from 'react'

import { ListDisciplines } from '@/app/(home)/courseware/components'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { SectionContent } from '../section-content'

export const ScrollAreaMobile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute left-4 rounded-lg bg-slate-100 lg:hidden">
      <SectionContent>
        <nav>
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
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-3 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="-mb-5 flex items-center justify-between gap-x-6 pt-5">
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
            <div className="">
              <ScrollArea>
                <ListDisciplines />
              </ScrollArea>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
