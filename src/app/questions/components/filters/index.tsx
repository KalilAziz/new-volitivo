'use client'

import { useState } from 'react'

import { SectionContent } from '@/components/interface/section-content'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import { ListQuestions } from '../list-questions'
import { Pagination } from '../pagination'
import { AssessmentFilter } from './assessment-filter'
import { BankFilter } from './bank-filter'
import { IssuingFilter } from './issuing-filter'
import { SubjectsFilter } from './subject-filter'
import { YearFilter } from './year-filter'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'

export const Filters = () => {
  const [bank, setBank] = useState('')
  const [subjects, setSubjects] = useState('')
  const [year, setYear] = useState('')
  const [issuing, setIssuing] = useState('')
  const [assessment, setAssessment] = useState('')

  return (
    <SectionContent className="sm:mt-8 space-y-4">
      <div className='p-3 sm:p-1 flex flex-col sm:gap-y-3'>
      <Heading className='my-4 sm:my-0 text-3xl sm:text-4xl font-semibold from-slate-600'>Provas de Concurso</Heading>
       <Accordion type="single" collapsible>
        <AccordionItem value="filter">
          <AccordionTrigger>
           <button className="inline-flex items-center justify-center rounded-md px-5 py-2 focus-visible:outline-none focus-visible:ring-offset-2 transition-colors focus-visible:ring-2 focus-visible:ring-ring ring-offset-background text-sm bg-blue-700 text-white font-semibold hover:bg-sky-300 sm:text-base">Filtro</button>
          </AccordionTrigger>
          <AccordionContent>
      <div className='flex flex-col gap-y-1 my-2 py-1'>
        <h1 className="text-lg font-bold sm:text-xl md:text-2xl">Selecione um filtro</h1>
        <p className="text-sm text-slate-700">
          Use nossos filtros para que possamos te ajudar a encontrar suas questões
        </p>
      <div className="my-2 grid items-stretch gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <SubjectsFilter subjects={subjects} setSubjects={setSubjects} />
        <YearFilter year={year} setYear={setYear} />
        <BankFilter bank={bank} setBank={setBank} />
        <IssuingFilter issuing={issuing} setIssuing={setIssuing} />
        <AssessmentFilter assessment={assessment} setAssessment={setAssessment} />
      </div>
      </div>
      </AccordionContent>
      </AccordionItem>
      </Accordion>
      </div>
      <ListQuestions />
      <Pagination total={150} page={1} perPage={5} />
    </SectionContent>
  )
}
