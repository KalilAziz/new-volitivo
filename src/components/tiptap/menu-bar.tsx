import { BsParagraph } from 'react-icons/bs'

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
    <div className="flex items-center justify-between gap-2 bg-gray-100">
      <Select
        onValueChange={(value: '1' | '2' | '3') =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: Number(value) as Level })
            .run()
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecione um título" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">Título</SelectItem>
            <SelectItem value="2">Subtítulo</SelectItem>
            <SelectItem value="3">Subsubtítulo</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <BsParagraph />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'is-active' : ''}
      >
        highlight
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        justify
      </button>
    </div>
  )
}
