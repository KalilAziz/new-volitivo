import { SectionContent } from '@/components/interface/section-content'

type PageDisciplineProps = {
  params: {
    postId: string
  }
}

const PageDiscipline = ({ params }: PageDisciplineProps) => {
  console.log(params)
  return (
    <SectionContent>
      <h1>hello word</h1>
    </SectionContent>
  )
}

export default PageDiscipline
