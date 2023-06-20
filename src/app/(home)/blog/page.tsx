import { CardBlog } from './components/card-blog'
import { NewPost } from './components/new-post'
import { SectionContent } from '@/components/interface/section-content'

const featuredPost = {
  id: '8d3310d0-8666-4f4b-b920-274a52d500e5',
  title: 'We’re incredibly proud to announce we have secured $75m in Series B',
  description:
    'Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  author: {
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
}

const posts = [
  {
    id: 'aa8463c8-ef2a-4b54-9f76-b9e46dc2fd0d',
    title: 'Boost your conversion rate',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: 'f0b3a70d-8fc1-433d-a99f-32d2e7e84c83',
    title: 'Boost your conversion rate',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Lindsay Walton',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
]

const Blog = () => {
  return (
    <SectionContent>
      <div className=" bg-white pb-10 pt-24">
        <div className="my-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Próximos concursos</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {posts.map((post) => (
            <CardBlog key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className=" bg-white py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça as ultimas notícias</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 ">
          <NewPost featuredPost={featuredPost} />
          <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-gray-900/10">
              {posts.map((post) => (
                <CardBlog key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conheça as próximas postagens</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
        </p>
      </div>
      <div className="grid grid-cols-1 border-t lg:grid-cols-2">
        {posts.map((post) => (
          <CardBlog key={post.id} post={post} />
        ))}
      </div>
    </SectionContent>
  )
}

export default Blog
