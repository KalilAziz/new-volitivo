import { Button } from '@/components/ui/button'

type IssuingFilterProps = {
  issuing: string
  setIssuing: (issuing: string) => void
}

export const IssuingFilter = ({ issuing, setIssuing }: IssuingFilterProps) => {
  return (
    <div className="flex gap-3 text-sm">
      <input
        type="text"
        placeholder="Digite o nome da disciplina"
        value={issuing}
        onChange={(e) => setIssuing(e.target.value)}
        className="rounded-md border border-gray-300"
      />
      <Button>Buscar</Button>
    </div>
  )
}
