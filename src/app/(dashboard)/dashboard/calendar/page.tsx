import { CardBlog } from '@/app/(home)/blog/components/card-blog'
import { SectionContent } from '@/components/interface/section-content'

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

const userExamsPage = () => {
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
    </SectionContent>
  )
}

export default userExamsPage
