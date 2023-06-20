import { AiOutlineOrderedList, AiOutlineUnorderedList } from 'react-icons/ai'
import { BiAlignLeft, BiRedo, BiUndo } from 'react-icons/bi'
import { BsFillImageFill, BsParagraph, BsTypeBold, BsTypeItalic, BsTypeStrikethrough } from 'react-icons/bs'
import { FaHighlighter } from 'react-icons/fa'
import { GrBlockQuote } from 'react-icons/gr'
import { ImPagebreak } from 'react-icons/im'
import { MdHorizontalRule } from 'react-icons/md'

import { Editor } from '@tiptap/react'

import { Button } from '../ui/button'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem, SelectGroup } from '../ui/select'
type MenuBarProps = {
  editor: Editor | null
}

type Level = 1 | 2 | 3

export const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null
  }

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <div className="flex items-center justify-between gap-8 rounded-lg bg-gray-100 px-4 py-3">
      <Select
        value={editor.getAttributes('heading').level ? String(editor.getAttributes('heading').level) : 'void'}
        onValueChange={(value: '1' | '2' | '3') =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: Number(value) as Level })
            .run()
        }
      >
        <SelectTrigger className="max-w-[250px] bg-white">
          <SelectValue placeholder="Selecione um título" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="void">Selecione um valor</SelectItem>
            <SelectItem value="1">Título</SelectItem>
            <SelectItem value="2">Subtítulo 1</SelectItem>
            <SelectItem value="3">Subtítulo 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="justify-betwee flex items-center gap-6">
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          variant={editor.isActive('paragraph') ? 'default' : 'link'}
          className="px-3 py-1"
          // className={
          //   editor.isActive('paragraph')
          //     ? 'is-active m-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-100'
          //     : 'm-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-lg font-medium hover:bg-white'
          // }
        >
          <BsParagraph />
        </Button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'is-active m-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-100'
              : 'm-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-lg font-medium hover:bg-white'
          }
        >
          <BsTypeBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'is-active m-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-100'
              : 'm-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-lg font-medium hover:bg-white'
          }
        >
          <BsTypeItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            editor.isActive('strike')
              ? 'is-active m-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-100'
              : 'm-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-lg font-medium hover:bg-white'
          }
        >
          <BsTypeStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={
            editor.isActive('highlight')
              ? 'is-active m-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-100'
              : 'm-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-lg font-medium hover:bg-white'
          }
        >
          <FaHighlighter />
        </button>
      </div>
      <Select
        value={editor.getAttributes('textAlign') ? String(editor.getAttributes('textAlign').level) : undefined}
        onValueChange={(value: 'left' | 'center' | 'right' | 'justify') =>
          editor.chain().focus().setTextAlign(value).run()
        }
      >
        <SelectTrigger className="max-w-[150px] bg-white">
          <SelectValue placeholder="Alinhamento" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="left" className="flex">
              <div className="flex items-center justify-center gap-3">
                <BiAlignLeft className="h-4 w-4" />
                Esquerda
              </div>
            </SelectItem>
            <SelectItem value="center">Centro</SelectItem>
            <SelectItem value="right">Direita</SelectItem>
            <SelectItem value="justify">Justificar</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <button onClick={addImage}>
        <BsFillImageFill />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <AiOutlineUnorderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <AiOutlineOrderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <GrBlockQuote />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <MdHorizontalRule />
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <ImPagebreak />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <BiUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <BiRedo />
      </button>
    </div>
  )
}
