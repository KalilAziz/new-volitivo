import { SectionContent } from '@/components/interface/section-content'
import { ListDisciplines } from './components'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ScrollAreaMobile } from '@/components/interface/courseware-menu'
import PagePost from '../blog/[postId]/page'

const PageCourseware = () => {
  return (
    <SectionContent>
      <div className='flex-1 relative items-start md:grid md:grd-cols-[220px_minmax(0,1fr)] md:gap-6 lg:gid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
        <div className='hidden lg:flex lg:fixed'>
        <ScrollArea className='h-screen w-60 pb-20 rounded-md border-y '>
        
        <ListDisciplines/>
        
        </ScrollArea>
        </div>
        
          <ScrollAreaMobile/>
  
        <div className='lg:pl-60'>
        <PagePost params={{
            postId: ''
          }}/>
        </div>
      </div>
    </SectionContent>
  )
}

export default PageCourseware
