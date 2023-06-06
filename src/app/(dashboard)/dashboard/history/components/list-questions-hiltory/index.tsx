'use client'

import { useState } from 'react'

import { SectionContent } from '@/components/interface/section-content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import { mockQuestion } from '@/mock/mock-questions'

import { AssessmentFilter } from '../filters/assessment-filter'
import { BankFilter } from '../filters/bank-filter'
import { IssuingFilter } from '../filters/issuing-filter'
import { SubjectsFilter } from '../filters/subject-filter'
import { YearFilter } from '../filters/year-filter'
import { Pagination } from '../pagination'
import { Question } from './question'

export const ListQuestionsHistory = () => {
  const [bank, setBank] = useState('')
  const [subjects, setSubjects] = useState('')
  const [year, setYear] = useState('')
  const [issuing, setIssuing] = useState('')
  const [assessment, setAssessment] = useState('')

  return (
    <SectionContent className="space-y-4 sm:mt-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="filter">
          <AccordionTrigger
            message="Selecione um filtro"
            className="w-full justify-between p-3 sm:justify-between sm:gap-y-3 sm:p-1"
          >
            <h1 className="my-4 from-slate-600 text-3xl font-semibold sm:my-0 sm:text-4xl">Provas de Concurso</h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="my-2 flex flex-col gap-y-1 py-1">
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
      <div className="space-y-7">
        {mockQuestion.map((question) => (
          <Question key={question.codeQuestion} {...question} userAnswer={'A'} />
        ))}
      </div>
      <Pagination total={150} page={1} perPage={5} />
    </SectionContent>
  )
}
