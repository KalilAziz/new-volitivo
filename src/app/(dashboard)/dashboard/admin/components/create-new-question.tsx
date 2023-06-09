'use client'

import { useState } from 'react'

import { AssessmentFilter } from '@/components/interface/filtersQuestion/assessment-filter'
import { BankFilter } from '@/components/interface/filtersQuestion/bank-filter'
import { IssuingFilter } from '@/components/interface/filtersQuestion/issuing-filter'
import { SubjectsFilter } from '@/components/interface/filtersQuestion/subject-filter'
import { YearFilter } from '@/components/interface/filtersQuestion/year-filter'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export const CreateNewQuestion = () => {
  const [infoQuestion, setInfoQuestion] = useState({
    subject: '',
    year: '',
    bank: '',
    issuing: '',
    statement: '',
    imageUpload: '',
    alternativeA: '',
    alternativeB: '',
    alternativeC: '',
    alternativeD: '',
    alternativeE: '',
    correctAlternative: ''
  })

  const [subjects, setSubjects] = useState('')
  const [year, setYear] = useState('')
  const [bank, setBank] = useState('')
  const [issuing, setIssuing] = useState('')
  const [assessment, setAssessment] = useState('')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Criar uma questão</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Criar uma questão</DialogTitle>
          <DialogDescription>Preencha os campos abaixo para criar uma questão</DialogDescription>
        </DialogHeader>
        <div className="grid max-h-96 gap-4 overflow-y-auto px-3 py-4">
          <div className="my-2 flex flex-col gap-y-1 py-1">
            <div className="my-2 grid items-stretch gap-3 md:grid-cols-2 lg:grid-cols-3">
              <SubjectsFilter subjects={subjects} setSubjects={setSubjects} />
              <YearFilter year={year} setYear={setYear} />
              <BankFilter bank={bank} setBank={setBank} />
              <IssuingFilter issuing={issuing} setIssuing={setIssuing} />
              <AssessmentFilter assessment={assessment} setAssessment={setAssessment} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="statement">Enunciado</Label>
            <Textarea
              id="statement"
              value={infoQuestion.statement}
              onChange={(e) => setInfoQuestion({ ...infoQuestion, statement: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="alternativeA">Alternativa A</Label>
            <Textarea
              id="alternativeA"
              value={infoQuestion.alternativeA}
              onChange={(e) => setInfoQuestion({ ...infoQuestion, alternativeA: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="alternativeB">Alternativa B</Label>
            <Textarea
              id="alternativeB"
              value={infoQuestion.alternativeB}
              onChange={(e) => setInfoQuestion({ ...infoQuestion, alternativeB: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="alternativeC">Alternativa C</Label>
            <Textarea
              id="alternativeC"
              value={infoQuestion.alternativeC}
              onChange={(e) => setInfoQuestion({ ...infoQuestion, alternativeC: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="alternativeD">Alternativa D</Label>
            <Textarea
              id="alternativeD"
              value={infoQuestion.alternativeD}
              onChange={(e) => setInfoQuestion({ ...infoQuestion, alternativeD: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="alternativeE">Alternativa E</Label>
            <Textarea
              id="alternativeE"
              value={infoQuestion.alternativeE}
              onChange={(e) => setInfoQuestion({ ...infoQuestion, alternativeE: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="correctAlternative">Alternativa correta</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma alternativa" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Alternativas</SelectLabel>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                  <SelectItem value="E">E</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Criar uma questão</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
