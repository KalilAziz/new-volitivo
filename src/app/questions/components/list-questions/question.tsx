'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { useToast } from '@/components/ui/use-toast'

import { cn } from '@/lib/utils'

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
  const [loading, setLoading] = useState(false)
  const [alternative, setAlternative] = useState('')
  const [optionsSelected, setOptionsSelected] = useState<string[]>([])
  const { toast } = useToast()

  const handleSelectQuestion = (option: string) => {
    if (option === alternative) {
      setAlternative('')
      return
    }

    if (optionsSelected.includes(option) && alternative !== option) {
      setOptionsSelected(optionsSelected.filter((item) => item !== option))
    }

    setAlternative(option)
  }

  const handleSelectOption = (option: string) => {
    if (alternative === option) {
      setAlternative('')
    }

    if (optionsSelected.includes(option)) {
      setOptionsSelected(optionsSelected.filter((item) => item !== option))
      return
    }

    setOptionsSelected([...optionsSelected, option])
  }

  const handleSendAnswerUser = async () => {
    setLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setAlternative('')
    setLoading(false)

    if (alternative === question.correctAnswer) {
      toast({
        title: 'Resposta correta!',
        description: 'Você marcou a alternativa correta',
        variant: 'success'
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      })
    }

    if (alternative !== question.correctAnswer) {
      toast({
        title: 'Resposta incorreta',
        description: 'Você marcou a alternativa incorreta',
        variant: 'destructive'
        // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      })
    }
  }
  //grid gap-3 items-center grid-cols-1 text-xs sm:grid-cols-2 sm:gap-x-12 lg:gap-10 lg:text-base lg:grid-cols-6"
  const disabledButton = !alternative || loading

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

      <div className="my-4 flex flex-col gap-6">
        <Text size={'default'} className="p-2 font-sans text-sm font-normal text-slate-700 sm:p-4 sm:text-base">
          {question.text}
        </Text>

        <div className=" my-3 space-y-4 sm:mr-1 md:mr-4 lg:mr-6">
          <OptionQuestion
            simbol="A"
            optionsSelected={optionsSelected}
            alternative={alternative}
            handleSelectOption={handleSelectOption}
            handleSelectQuestion={handleSelectQuestion}
            textAlternative={question.alternativeA}
          />

          <OptionQuestion
            simbol="B"
            optionsSelected={optionsSelected}
            alternative={alternative}
            handleSelectOption={handleSelectOption}
            handleSelectQuestion={handleSelectQuestion}
            textAlternative={question.alternativeB}
          />

          <OptionQuestion
            simbol="C"
            optionsSelected={optionsSelected}
            alternative={alternative}
            handleSelectOption={handleSelectOption}
            handleSelectQuestion={handleSelectQuestion}
            textAlternative={question.alternativeC}
          />

          <OptionQuestion
            simbol="D"
            optionsSelected={optionsSelected}
            alternative={alternative}
            handleSelectOption={handleSelectOption}
            handleSelectQuestion={handleSelectQuestion}
            textAlternative={question.alternativeD}
          />

          <OptionQuestion
            simbol="E"
            optionsSelected={optionsSelected}
            alternative={alternative}
            handleSelectOption={handleSelectOption}
            handleSelectQuestion={handleSelectQuestion}
            textAlternative={question.alternativeE}
          />
        </div>
      </div>

      <Button
        onClick={handleSendAnswerUser}
        disabled={disabledButton}
        className={cn(
          'ml-auto h-10 w-full cursor-default sm:w-auto',
          disabledButton ? 'cursor-not-allowed' : 'cursor-pointer'
        )}
      >
        Responder Questão
        {loading && <div className="ml-2 h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-blue-500" />}
      </Button>
    </div>
  )
}
