import { ListDisciplines } from './components'
import { ScrollAreaMobile } from '@/components/interface/courseware-menu'
import { SectionContent } from '@/components/interface/section-content'
import { ScrollArea } from '@/components/ui/scroll-area'

import PagePost from '../blog/[postId]/page'

const PageCourseware = () => {
  return (
    <SectionContent className="flex w-full items-start gap-x-8 py-10">
      <ScrollAreaMobile />
      <aside className="sticky top-8 hidden w-60 shrink-0 lg:block">
        <ScrollArea className="h-screen pr-4">
          <ListDisciplines />
        </ScrollArea>
      </aside>

      <div className="flex-1">
        <PagePost
          params={{
            postId: ''
          }}
        />
      </div>

      {/* <div className="md:grd-cols-[220px_minmax(0,1fr)] lg:gid-cols-[240px_minmax(0,1fr)] relative flex-1 items-start md:grid md:gap-6 lg:gap-10">
        <div className="absolute inset-y-0 left-0 hidden lg:flex"></div>

       

        <div className="lg:pl-60"></div>
      </div> */}
    </SectionContent>
  )
}

export default PageCourseware
