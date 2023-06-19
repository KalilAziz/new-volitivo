import { BsParagraph, BsTypeBold, BsTypeItalic, BsTypeStrikethrough } from 'react-icons/bs'
import { CiTextAlignCenter, CiTextAlignJustify, CiTextAlignLeft, CiTextAlignRight } from 'react-icons/ci'
import { FaHighlighter } from 'react-icons/fa'
import { Editor } from '@tiptap/react'

import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem, SelectGroup } from '../ui/select'

type MenuBarProps = {
  editor: Editor | null
}

type Level = 1 | 2 | 3

export const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null
  }

  return (
    <div className="flex px-4 items-center justify-start gap-8 bg-gray-100 rounded-lg">
      <Select
        onValueChange={(value: '1' | '2' | '3') =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: Number(value) as Level })
            .run()
        }
      >
        <SelectTrigger className="w- bg-white">
          <SelectValue placeholder="Selecione um título" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">Título</SelectItem>
            <SelectItem value="2">Subtítulo 1</SelectItem>
            <SelectItem value="3">Subtítulo 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className='flex items-center justify-betwee gap-6'>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active bg-blue-100 justify-center inline-flex rounded-md h-8 w-8 items-center m-2' : 'm-2 hover:bg-white inline-flex items-center justify-center rounded-md h-8 w-8 text-lg font-medium'}
      >
        <BsParagraph />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active bg-blue-100 justify-center inline-flex rounded-md h-8 w-8 items-center m-2' : 'm-2 hover:bg-white inline-flex items-center justify-center rounded-md h-8 w-8 text-lg font-medium'}
      >
        <BsTypeBold/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active bg-blue-100 justify-center inline-flex rounded-md h-8 w-8 items-center m-2' : 'm-2 hover:bg-white inline-flex items-center justify-center rounded-md h-8 w-8 text-lg font-medium'}
      >
        <BsTypeItalic/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active bg-blue-100 justify-center inline-flex rounded-md h-8 w-8 items-center m-2' : 'm-2 hover:bg-white inline-flex items-center justify-center rounded-md h-8 w-8 text-lg font-medium'}
      >
        <BsTypeStrikethrough/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'is-active bg-blue-100 justify-center inline-flex rounded-md h-8 w-8 items-center m-2' : 'm-2 hover:bg-white inline-flex items-center justify-center rounded-md h-8 w-8 text-lg font-medium'}
      >
        <FaHighlighter/>
      </button>
      </div>
      <Select
        onValueChange={(value: 'left' | 'center' | 'right' | 'justify') =>
          editor
            .chain()
            .focus()
            .setTextAlign(value)
            .run()
        }
      >
        <SelectTrigger className="w-32 bg-white">
          <SelectValue placeholder="Alinhar" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="left">Esquerda</SelectItem>
            <SelectItem value="center">Centro</SelectItem>
            <SelectItem value="right">Direita</SelectItem>
            <SelectItem value="justify">Justificar</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    
    </div>
  )
}
