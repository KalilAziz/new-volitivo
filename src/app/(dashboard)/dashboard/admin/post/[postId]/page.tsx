import { Tiptap } from '@/components/tiptap'

type PostProps = {
  params: {
    postId: string
  }
}

const Post = ({ params }: PostProps) => {
  return <Tiptap postId={params.postId} />
}

export default Post
