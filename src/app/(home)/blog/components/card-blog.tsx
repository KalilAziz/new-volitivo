import Link from 'next/link'

export type Post = {
  post: {
    id: string
    title: string
    description: string
    date: string
    datetime: string
    author: {
      name: string
      imageUrl: string
    }
  }
}

export const CardBlog = ({ post }: Post) => {
  return (
    <div key={post.id} className="py-12">
      <div className="group relative max-w-xl">
        <time dateTime={post.datetime} className="block text-sm leading-6 text-gray-600">
          {post.date}
        </time>
        <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
          <Link href={`/blog/${post.id}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-sm leading-6 text-gray-600">{post.description}</p>
      </div>
      <div className="mt-4 flex">
        <span className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
          <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50" />
          {post.author.name}
        </span>
      </div>
    </div>
  )
}
