'use client'

import { useState } from 'react'

import { SectionContent } from '@/components/interface/section-content'

import { ListQuestions } from '../list-questions'
import { Pagination } from '../pagination'
import { AssessmentFilter } from './assessment-filter'
import { BankFilter } from './bank-filter'
import { IssuingFilter } from './issuing-filter'
import { SubjectsFilter } from './subject-filter'
import { YearFilter } from './year-filter'

export const Filters = () => {
  const [bank, setBank] = useState('')
  const [subjects, setSubjects] = useState('')
  const [year, setYear] = useState('')
  const [issuing, setIssuing] = useState('')
  const [assessment, setAssessment] = useState('')

  return (
    <SectionContent className="space-y-3">
      <div>
        <h1 className="text-lg font-bold sm:text-xl md:text-2xl">Selecione um filtro</h1>
        <p className="text-sm text-slate-700">
          Use nossos filtros para que possamos te ajudar a encontrar suas questões
        </p>
      </div>
      <div className="grid items-stretch gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <SubjectsFilter subjects={subjects} setSubjects={setSubjects} />
        <YearFilter year={year} setYear={setYear} />
        <BankFilter bank={bank} setBank={setBank} />
        <IssuingFilter issuing={issuing} setIssuing={setIssuing} />
        <AssessmentFilter assessment={assessment} setAssessment={setAssessment} />
      </div>
      <ListQuestions />
      <Pagination total={150} page={1} perPage={5} />
    </SectionContent>
  )
}
