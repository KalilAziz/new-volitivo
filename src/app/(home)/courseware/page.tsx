import { ListDisciplines } from './components'
import { ScrollAreaMobile } from '@/components/interface/courseware-menu'
import { SectionContent } from '@/components/interface/section-content'
import { ScrollArea } from '@/components/ui/scroll-area'

import PagePost from '../blog/[postId]/page'

const PageCourseware = () => {
  return (
    <SectionContent>
      <div className="md:grd-cols-[220px_minmax(0,1fr)] lg:gid-cols-[240px_minmax(0,1fr)] relative flex-1 items-start md:grid md:gap-6 lg:gap-10">
        <div className="hidden lg:fixed lg:flex">
          <ScrollArea className="h-screen w-60 rounded-md border-y pb-20 ">
            <ListDisciplines />
          </ScrollArea>
        </div>

        <ScrollAreaMobile />

        <div className="lg:pl-60">
          <PagePost
            params={{
              postId: ''
            }}
          />
        </div>
      </div>
    </SectionContent>
  )
}

export default PageCourseware
