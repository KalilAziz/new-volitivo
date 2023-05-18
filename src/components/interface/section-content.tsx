import { cn } from '@/lib/utils'

type SectionContentProps = {
  children: React.ReactNode
  className?: string
}

export const SectionContent = ({ children, className }: SectionContentProps) => {
  return <div className={cn('mx-auto max-w-7xl p-6 lg:px-8', className)}>{children}</div>
}