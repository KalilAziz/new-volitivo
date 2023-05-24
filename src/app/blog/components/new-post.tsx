import Link from 'next/link'

export type NewPostProps = {
  featuredPost: {
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

export const NewPost = ({ featuredPost }: NewPostProps) => {
  return (
    <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
      <time dateTime={featuredPost.datetime} className="block text-sm leading-6 text-gray-600">
        {featuredPost.date}
      </time>
      <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {featuredPost.title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-600">{featuredPost.description}</p>
      <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
        <div className="flex">
          <Link
            href={`/blog/${featuredPost.id}`}
            className="text-sm font-semibold leading-6 text-indigo-600"
            aria-describedby="featured-post"
          >
            Continue reading <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
          <span className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
            <img src={featuredPost.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50" />
            {featuredPost.author.name}
          </span>
        </div>
      </div>
    </article>
  )
}
