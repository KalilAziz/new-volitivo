import Link from 'next/link'

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export type DisciplineProps = {
  id: string
  slug: string
  name: string
  subjects: { id: string; slug: string; name: string }[]
}

export const Discipline = (discipline: DisciplineProps) => {
  return (
    <div>
      <AccordionItem value={discipline.name}>
        <AccordionTrigger>
          <Link href={`/discipline/${discipline.slug}`}>{discipline.name}</Link>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            {discipline.subjects.map((subject) => (
              <div key={subject.id}>
                <span className="font-seminold">Assunto: </span>
                <Link className="text-blue-700" href={`/discipline/${discipline.slug}/subjects/${subject.slug}`}>
                  {subject.name}
                </Link>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  )
}
