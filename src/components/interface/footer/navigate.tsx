'use client'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { navigationMaster } from '@/config/naviagation-master'
import { cn } from '@/lib/utils'

export const Navigate = () => {
  const segment = useSelectedLayoutSegment()
  return (
    <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
      {navigationMaster.map((item) => {
        const current = item.href.replace('/', '') === segment || (item.href.replace('/', '') === '' && segment == null)

        return (
          <div key={item.name} className="pb-6">
            <Link
              href={item.href}
              className={cn('text-sm leading-6 text-gray-600 hover:text-indigo-600', current && ' text-indigo-600')}
            >
              {item.name}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}
