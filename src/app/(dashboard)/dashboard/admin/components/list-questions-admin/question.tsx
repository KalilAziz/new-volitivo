'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

import { OptionQuestion } from './option-question'

export type QuestionProps = {
  codeQuestion: string
  year: string
  subjects: string
  bank: string
  issuing: string
  assessment: string
  text: string
  alternativeA: string
  alternativeB: string
  alternativeC: string
  alternativeD: string
  alternativeE: string
  correctAnswer: string
  discipline: {
    name: string
    slug: string
  } | null
}

export const Question = (question: QuestionProps) => {
  return (
    <div key={question.codeQuestion} className="border-b-1 my-10 flex flex-col p-2 sm:p-2">
      <div className="mx-2 my-4 grid grid-cols-2 items-stretch gap-3 gap-y-1 border-y-2 border-slate-300 p-2 text-xs sm:text-sm md:grid-cols-3 lg:grid-cols-6">
        <div>
          <span className="font-semibold">Ano: </span>
          <Link className="text-xs text-blue-700 sm:text-sm" href={`/year/${question.codeQuestion}`}>
            {question.year}
          </Link>
        </div>
        <div>
          <span className="font-semibold">Assunto: </span>
          <Link className="text-xs text-blue-700 sm:text-sm" href={`/subjects/${question.codeQuestion}`}>
            {question.subjects}
          </Link>
        </div>
        <div>
          <span className="font-semibold">Banca: </span>
          <Link className="text-xs text-blue-700 sm:text-sm" href={`/bank/${question.codeQuestion}`}>
            {question.bank}
          </Link>
        </div>
        <div>
          <span className="font-semibold">Orgão: </span>
          <Link className="text-xs text-blue-700 sm:text-sm" href={`/issuing/${question.codeQuestion}`}>
            {question.issuing}
          </Link>
        </div>
        <div>
          <span className="font-semibold">Prova: </span>
          <Link className="text-xs text-blue-700 sm:text-sm" href={`/assessment/${question.codeQuestion}`}>
            {question.assessment}
          </Link>
        </div>
        {question.discipline && (
          <div className="">
            <span className="font-semibold">Disciplina: </span>
            <Link className="text-xs text-blue-700 sm:text-sm" href={`/discipline/${question.discipline.slug}`}>
              <span className=""> {question.discipline.name}</span>
            </Link>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <Button size="sm">Editar</Button>
      </div>

      <div className="my-4 flex flex-col gap-6">
        <Text size={'default'} className="p-2 font-sans text-sm font-normal text-slate-700 sm:p-4 sm:text-base">
          {question.text}
        </Text>

        <div className=" my-3 space-y-4 sm:mr-1 md:mr-4 lg:mr-6">
          <OptionQuestion simbol="A" correctAnswer={question.correctAnswer} textAlternative={question.alternativeA} />

          <OptionQuestion simbol="B" correctAnswer={question.correctAnswer} textAlternative={question.alternativeB} />

          <OptionQuestion simbol="C" correctAnswer={question.correctAnswer} textAlternative={question.alternativeC} />

          <OptionQuestion simbol="D" correctAnswer={question.correctAnswer} textAlternative={question.alternativeD} />

          <OptionQuestion simbol="E" correctAnswer={question.correctAnswer} textAlternative={question.alternativeE} />
        </div>
      </div>
    </div>
  )
}
