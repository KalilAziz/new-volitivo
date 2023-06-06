import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

import { cn } from '@/lib/utils'

type OptionQuestionProps = {
  simbol: string
  userAnswer: string
  correctAnswer: string
  textAlternative: string
}

export const OptionQuestion = (props: OptionQuestionProps) => {
  return (
    <div className="group flex items-center justify-start gap-1 sm:gap-3">
      <div className="flex items-center gap-3 ">
        <Button
          variant="test"
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-200',
            props.correctAnswer !== props.simbol && 'border-red-500 bg-red-500 text-white',
            props.correctAnswer === props.simbol && 'border-green-500 bg-green-500 text-white',
            props.userAnswer === props.simbol && 'border-sky-500 bg-sky-500 text-white'
          )}
        >
          {props.simbol}
        </Button>
        <Text
          size={'default'}
          className={cn(
            'text-sm',
            props.correctAnswer !== props.simbol && 'text-slate-500 line-through',
            props.correctAnswer === props.simbol && 'font-semibold'
          )}
        >
          {props.textAlternative}
        </Text>
      </div>
    </div>
  )
}
