import { Combobox } from '@/components/ui/combobox'

type YearFilterProps = {
  year: string
  setYear: (year: string) => void
}

const info = {
  label: 'Selecione uma ano',
  placeholder: 'Digite um ano',
  labelEmpty: 'Ano não encontrada'
}

const options = [
  {
    value: '2023',
    label: '2023'
  },
  {
    value: '2022',
    label: '2022'
  },
  {
    value: '2021',
    label: '2021'
  },
  {
    value: '2020',
    label: '2020'
  },
  {
    value: '2019',
    label: '2019'
  }
]

export const YearFilter = ({ year, setYear }: YearFilterProps) => {
  return (
    <div className="flex flex-col text-sm">
      <span>Ano:</span>
      <Combobox value={year} setValue={setYear} options={options} {...info} />
    </div>
  )
}
