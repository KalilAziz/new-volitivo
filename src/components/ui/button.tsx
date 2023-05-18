import { HtmlHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, ...props }: ButtonProps) => {
  return <button type="button" className={cn('rounded-md p-2.5', className)} {...props} />
}
