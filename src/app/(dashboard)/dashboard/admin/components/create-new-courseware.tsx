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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const CreateNewCourseware = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Criar um resumo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>Criar um resumo</DialogTitle>
          <DialogDescription>Preencha os campos abaixo para criar um evento</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="title">Título</Label>
            <Input id="title" className="col-span-3" />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="description">Descrição</Label>
            <Textarea id="description" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Criar um resumo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
