'use client'

import { useState } from 'react'

import { PaginationQuestion } from '@/components/interface/pagination-question'
import { SectionContent } from '@/components/interface/section-content'

import { ListDisciplines } from '../list-disciplines'
import { IssuingFilter } from './discipline'

export const Filters = () => {
  const [issuing, setIssuing] = useState('')

  return (
    <SectionContent className="space-y-3">
      <div>
        <h1 className="text-lg font-bold sm:text-xl md:text-2xl">Use nosso campo se buscas</h1>
        <p className="text-sm text-slate-700">
          Use nosso campo de busca para filtrar as disciplinas que deseja estudar
        </p>
      </div>
      <div className="ml-auto w-full sm:max-w-xs">
        <IssuingFilter issuing={issuing} setIssuing={setIssuing} />
      </div>
      <ListDisciplines />
      <PaginationQuestion total={150} page={1} perPage={5} />
    </SectionContent>
  )
}
