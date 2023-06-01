import { Combobox } from '@/components/ui/combobox'

type IssuingFilterProps = {
  issuing: string
  setIssuing: (issuing: string) => void
}

const info = {
  label: 'Selecione um Orgão',
  placeholder: 'Digite um Orgão',
  labelEmpty: 'Orgão não encontrada'
}

const options = [
  {
    value: 'orgão 1',
    label: 'Orgão 1'
  },
  {
    value: 'orgão 2',
    label: 'Orgão 2'
  },
  {
    value: 'orgão 3',
    label: 'Orgão 3'
  },
  {
    value: 'orgão 4',
    label: 'Orgão 4'
  },
  {
    value: 'orgão 5',
    label: 'Orgão 5'
  }
]

export const IssuingFilter = ({ issuing, setIssuing }: IssuingFilterProps) => {
  return (
    <div className="flex flex-col text-sm">
      <span>Orgãos:</span>
      <Combobox value={issuing} setValue={setIssuing} options={options} {...info} />
    </div>
  )
}
