'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

import { cn } from '@/lib/utils'

import { OptionQuestion } from './option-question'
import { Text } from '@/components/ui/text'

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

  const disabledButton = !alternative || loading

  return (
    <div key={question.codeQuestion} className="my-10 flex flex-col p-2">
      <div className="my-4 mx-2 flex items-center justify-between border-y-2 border-slate-300 p-2 text-s">
        <div className=" flex items-center gap-10">
          <div>
            <span className="font-semibold">Ano: </span>
            <Link className="text-blue-700" href={`/year/${question.codeQuestion}`}>
              {question.year}
            </Link>
          </div>
          <div>
            <span className="font-semibold">Assunto: </span>
            <Link className="text-blue-700" href={`/subjects/${question.codeQuestion}`}>
              {question.subjects}
            </Link>
          </div>
          <div>
            <span className="font-semibold">Banca: </span>
            <Link className="text-blue-700" href={`/bank/${question.codeQuestion}`}>
              {question.bank}
            </Link>
          </div>
          <div>
            <span className="font-semibold">Orgão: </span>
            <Link className="text-blue-700" href={`/issuing/${question.codeQuestion}`}>
              {question.issuing}
            </Link>
          </div>
          <div>
            <span className="font-semibold">Prova: </span>
            <Link className="text-blue-700" href={`/assessment/${question.codeQuestion}`}>
              {question.assessment}
            </Link>
          </div>
        </div>

        {question.discipline && (
          <div className="flex items-center">
            <span className="font-semibold">Disciplina: </span>
            <Link className="text-blue-700" href={`/discipline/${question.discipline.slug}`}>
              <span className="font-semibold"> {question.discipline.name}</span>
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6 my-4">
        <Text size={'default'} className='mx-4 font-normal'>{question.text}</Text>

        <div className="mr-6 my-3 space-y-4">
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
