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
      <AccordionItem value={discipline.name} className="mt-6 border-gray-200 px-3">
        <AccordionTrigger className="text-lg text-gray-700">
          <Link href={`/discipline/${discipline.slug}`}>{discipline.name}</Link>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            {discipline.subjects.map((subject) => (
              <div key={subject.id}>
                <span className="font-seminold">Assunto: </span>
                <Link
                  className="text-base text-gray-600 hover:text-sky-500"
                  href={`/discipline/${discipline.slug}/subjects/${subject.slug}`}
                >
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
