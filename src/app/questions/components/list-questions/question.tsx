'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

type QuestionProps = {
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
}

export const Question = (question: QuestionProps) => {
  const [alternative, setAlternative] = useState('')

  const handleSelectQuestion = (option: string) => {
    if (option === alternative) {
      setAlternative('')
      return
    }

    setAlternative(option)
  }

  return (
    <div key={question.codeQuestion} className="flex flex-col rounded-md border border-slate-300 p-3 py-2">
      <div className="mb-3 flex items-center gap-3 border-b-2 border-slate-300 p-2 text-sm">
        <div>
          <span className="font-seminold">Ano: </span>
          <Link className="text-blue-700" href={`/year/${question.codeQuestion}`}>
            {question.year}
          </Link>
        </div>
        <div>
          <span className="font-seminold">Assunto: </span>
          <Link className="text-blue-700" href={`/subjects/${question.codeQuestion}`}>
            {question.subjects}
          </Link>
        </div>
        <div>
          <span className="font-seminold">Banca: </span>
          <Link className="text-blue-700" href={`/bank/${question.codeQuestion}`}>
            {question.bank}
          </Link>
        </div>
        <div>
          <span className="font-seminold">Orgão: </span>
          <Link className="text-blue-700" href={`/issuing/${question.codeQuestion}`}>
            {question.issuing}
          </Link>
        </div>
        <div>
          <span className="font-seminold">Prova: </span>
          <Link className="text-blue-700" href={`/assessment/${question.codeQuestion}`}>
            {question.assessment}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p>{question.text}</p>

        <div>
          <div className="mb-3 flex cursor-pointer items-center gap-3" onClick={() => handleSelectQuestion('A')}>
            <Button
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-200',
                alternative === 'A' && 'bg-green-500'
              )}
            >
              A
            </Button>
            <p
              className={cn(
                'text-slate-800 no-underline transition-all duration-200',
                alternative !== '' && alternative !== 'A' && 'text-slate-500 line-through'
              )}
            >
              {question.alternativeA}
            </p>
          </div>

          <div className="mb-3 flex cursor-pointer items-center gap-3" onClick={() => handleSelectQuestion('B')}>
            <Button
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-200',
                alternative === 'B' && 'bg-green-500'
              )}
            >
              B
            </Button>
            <p
              className={cn(
                'text-slate-800 no-underline transition-all duration-200',
                alternative !== '' && alternative !== 'B' && 'text-slate-500 line-through'
              )}
            >
              {question.alternativeB}
            </p>
          </div>
          <div className="mb-3 flex cursor-pointer items-center gap-3" onClick={() => handleSelectQuestion('C')}>
            <Button
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-200',
                alternative === 'C' && 'bg-green-500'
              )}
            >
              C
            </Button>
            <p
              className={cn(
                'text-slate-800 no-underline transition-all duration-200',
                alternative !== '' && alternative !== 'C' && 'text-slate-500 line-through'
              )}
            >
              {question.alternativeC}
            </p>
          </div>
          <div className="mb-3 flex cursor-pointer items-center gap-3" onClick={() => handleSelectQuestion('D')}>
            <Button
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-300',
                alternative === 'D' && 'bg-green-500'
              )}
            >
              D
            </Button>
            <p
              className={cn(
                'text-slate-800 no-underline transition-all duration-300',
                alternative !== '' && alternative !== 'D' && 'text-slate-500 line-through'
              )}
            >
              {question.alternativeD}
            </p>
          </div>
          <div className="mb-3 flex cursor-pointer items-center gap-3" onClick={() => handleSelectQuestion('E')}>
            <Button
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-200',
                alternative === 'E' && 'bg-green-500'
              )}
            >
              E
            </Button>
            <p
              className={cn(
                'text-slate-800 no-underline transition-all duration-200',
                alternative !== '' && alternative !== 'E' && 'text-slate-500 line-through'
              )}
            >
              {question.alternativeE}
            </p>
          </div>
        </div>
      </div>

      <Button className="ml-auto h-10 w-full  sm:w-auto">Responder Questão</Button>
    </div>
  )
}
