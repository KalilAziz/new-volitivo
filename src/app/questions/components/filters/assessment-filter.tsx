import { Combobox } from '@/components/ui/combobox'

type AssessmentFilterProps = {
  assessment: string
  setAssessment: (assessment: string) => void
}

const info = {
  label: 'Selecione uma prova',
  placeholder: 'Digite uma prova',
  labelEmpty: 'Prova não encontrada'
}

const options = [
  {
    value: 'prova 1',
    label: 'Prova 1'
  },
  {
    value: 'prova 2',
    label: 'Prova 2'
  },
  {
    value: 'prova 3',
    label: 'Prova 3'
  },
  {
    value: 'prova 4',
    label: 'Prova 4'
  },
  {
    value: 'prova 5',
    label: 'Prova 5'
  }
]

export const AssessmentFilter = ({ assessment, setAssessment }: AssessmentFilterProps) => {
  return (
    <div className="flex flex-col text-sm">
      <span>Provas:</span>
      <Combobox value={assessment} setValue={setAssessment} options={options} {...info} />
    </div>
  )
}
