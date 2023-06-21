import { AiOutlineOrderedList, AiOutlineUnorderedList } from 'react-icons/ai'
import { BiAlignJustify, BiAlignLeft, BiAlignMiddle, BiAlignRight, BiRedo, BiUndo } from 'react-icons/bi'
import { BsFillImageFill, BsParagraph, BsTypeBold, BsTypeItalic, BsTypeStrikethrough } from 'react-icons/bs'
import { FaHighlighter } from 'react-icons/fa'
import { GrBlockQuote } from 'react-icons/gr'
import { ImPagebreak } from 'react-icons/im'
import { MdHorizontalRule } from 'react-icons/md'

import { Editor } from '@tiptap/react'

import { Button } from '../ui/button'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem, SelectGroup } from '../ui/select'
import { Separator } from '../ui/separator'
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
           <Separator orientation='vertical'/>
      <div className="justify-betwee flex items-center gap-2">
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          variant={editor.isActive('paragraph') ? 'editorActive' : 'editorDisable'}
          size={'editor'}
        >
          <BsParagraph />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          variant={editor.isActive('bold') ? 'editorActive' : 'editorDisable'}
          size={'editor'}
        >
          <BsTypeBold />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          variant={editor.isActive('italic') ? 'editorActive' : 'editorDisable'}
          size={'editor'}   
        >
          <BsTypeItalic />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          variant={editor.isActive('strike') ? 'editorActive' : 'editorDisable'}
          size={'editor'}
        >
          <BsTypeStrikethrough />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          variant={editor.isActive('highlight') ? 'editorActive' : 'editorDisable'}
          size={'editor'}
        >
          <FaHighlighter />
        </Button>
      </div>
          <Separator orientation="vertical"/>
      <Select
        value={editor.getAttributes('textAlign') ? String(editor.getAttributes('textAlign').level) : undefined}
        onValueChange={(value: 'left' | 'center' | 'right' | 'justify') =>
          editor.chain().focus().setTextAlign(value).run()
        }
      >
        <SelectTrigger className="max-w-[80px] bg-white">
          <SelectValue placeholder="Alinhamento" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="left">
                <BiAlignLeft className="h-4 w-4" />   
            </SelectItem>
            <SelectItem value="center">
                <BiAlignMiddle/>
            </SelectItem>
            <SelectItem value="right">
                <BiAlignRight/>
            </SelectItem>
            <SelectItem value="justify">
                <BiAlignJustify/>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className='justify-betwee flex items-center gap-2'>
      <Button 
        onClick={addImage}
        variant={'editorDisable'}
        size={'editor'}
      >
        <BsFillImageFill />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={editor.isActive('bulletList') ? 'editorActive' : 'editorDisable'}
        size={'editor'}
      >
        <AiOutlineUnorderedList />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        variant={editor.isActive('orderedList') ? 'editorActive' : 'editorDisable'}
        size={'editor'}
      >
        <AiOutlineOrderedList />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        variant={editor.isActive('blockquote') ? 'editorActive' : 'editorDisable'}
        size={'editor'}
      >
        <GrBlockQuote />
      </Button>
      <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}
      variant={'editorDisable'}
      size={'editor'}
      >
        <MdHorizontalRule />
      </Button>
      <Button 
        onClick={() => editor.chain().focus().setHardBreak().run()}
        variant={'editorDisable'}
        size={'editor'}
        >
        <ImPagebreak />
      </Button>
      </div>
      <div className='justify-betwee flex items-center gap-2'>
      <Button 
        onClick={() => editor.chain().focus().undo().run()}
        variant={'editorDisable'}
        size={'editor'}
      >
        <BiUndo />
      </Button>
      <Button 
        onClick={() => editor.chain().focus().redo().run()}
        variant={'editorDisable'}
        size={'editor'}
      >
        <BiRedo />
      </Button>
      </div>
    </div>
  )
}
