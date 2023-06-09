import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

import { cn } from '@/lib/utils'
import { Scissors } from 'lucide-react'

type OptionQuestionProps = {
  simbol: string
  optionsSelected: string[]
  handleSelectOption: (option: string) => void
  handleSelectQuestion: (option: string) => void
  alternative: string
  textAlternative: string
}

export const OptionQuestion = (props: OptionQuestionProps) => {
  return (
    <div className="group flex items-center justify-start gap-1 sm:gap-3">
      <div className="flex h-full w-full max-w-[30px] items-center">
        <button
          className="relative h-9 w-full overflow-hidden text-slate-700"
          onClick={() => {
            props.handleSelectOption(props.simbol)
          }}
        >
          <Scissors
            className={cn(
              'absolute top-1/2 -translate-y-1/2 transition-all duration-200 group-hover:left-0 sm:-left-full',
              props.optionsSelected.includes(props.simbol) && 'left-0 text-green-500'
            )}
          />
        </button>
      </div>
      <div className="flex cursor-pointer items-center gap-3 " onClick={() => props.handleSelectQuestion(props.simbol)}>
        <Button
          variant={'test'}
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-200',
            props.alternative === props.simbol && 'border-sky-500 bg-sky-500 text-white',
            props.optionsSelected.includes(props.simbol) && 'border-red-500 bg-red-500 text-white'
          )}
        >
          {props.simbol}
        </Button>
        <Text
          size={'default'}
          className={cn(
            'text-sm font-normal text-slate-700',
            props.alternative !== '' && props.alternative !== props.simbol && 'italic text-slate-500 line-through',
            props.optionsSelected.includes(props.simbol) && 'italic text-slate-500 line-through'
          )}
        >
          {props.textAlternative}
        </Text>
      </div>
    </div>
  )
}
