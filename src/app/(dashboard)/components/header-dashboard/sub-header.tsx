'use client'

import { useSelectedLayoutSegments } from 'next/navigation'

const options = {
  dashboard: 'Dashboard',
  history: 'Histórico',
  calendar: 'Calendário',
  contact: 'Contato'
}

export const SubHeader = () => {
  const segment = useSelectedLayoutSegments()

  const segmentUser = segment[segment.length - 1] as keyof typeof options

  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-700">
          {options[segmentUser] ?? 'Dashboard'}
        </h1>
      </div>
    </header>
  )
}
