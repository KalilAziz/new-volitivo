'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'

type Option = {
  value: string
  label: string
}

type ComboboxProps = {
  value: string
  setValue: (value: string) => void
  options: Option[]
  label: string
  placeholder: string
  labelEmpty: string
}

export const Combobox = ({ value, setValue, options, label, placeholder, labelEmpty }: ComboboxProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full max-w-[450px] justify-between">
          {value ? options.find((framework) => framework.value.toLowerCase() === value.toLowerCase())?.label : label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-[450px] ">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{labelEmpty}</CommandEmpty>
          <CommandGroup>
            {options.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value.toLowerCase() === framework.value.toLowerCase() ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
