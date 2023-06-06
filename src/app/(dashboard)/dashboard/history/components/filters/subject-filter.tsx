import { Combobox } from '@/components/ui/combobox'

type SubjectsFilterProps = {
  subjects: string
  setSubjects: (subjects: string) => void
}

const info = {
  label: 'Selecione uma assunto',
  placeholder: 'Digite uma assunto',
  labelEmpty: 'Assunto não encontrada'
}

const options = [
  {
    value: 'assunto 1',
    label: 'Assunto 1'
  },
  {
    value: 'assunto 2',
    label: 'Assunto 2'
  },
  {
    value: 'assunto 3',
    label: 'Assunto 3'
  },
  {
    value: 'assunto 4',
    label: 'Assunto 4'
  },
  {
    value: 'assunto 5',
    label: 'Assunto 5'
  }
]

export const SubjectsFilter = ({ subjects, setSubjects }: SubjectsFilterProps) => {
  return (
    <div className="flex flex-col text-sm">
      <span>Assuntos:</span>
      <Combobox value={subjects} setValue={setSubjects} options={options} {...info} />
    </div>
  )
}
