import { Combobox } from '@/components/ui/combobox'

type BankFilterProps = {
  bank: string
  setBank: (bank: string) => void
}

const info = {
  label: 'Selecione uma banca',
  placeholder: 'Digite uma banca',
  labelEmpty: 'Banca não encontrada'
}

const options = [
  {
    value: 'banca 1',
    label: 'Banca 1'
  },
  {
    value: 'banca 2',
    label: 'Banca 2'
  },
  {
    value: 'banca 3',
    label: 'Banca 3'
  },
  {
    value: 'banca 4',
    label: 'Banca 4'
  },
  {
    value: 'banca 5',
    label: 'Banca 5'
  }
]

export const BankFilter = ({ bank, setBank }: BankFilterProps) => {
  return (
    <div className="flex flex-col text-sm">
      <span>Bancas:</span>
      <Combobox value={bank} setValue={setBank} options={options} {...info} />
    </div>
  )
}
