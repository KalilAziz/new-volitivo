import { SectionContent } from '@/components/interface/section-content'
import Exam from './components/exam'
import PanelElement from './components/panelElement'

const DashboardPage = () => {
  return (
    <SectionContent>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b-2 w-full">
        <h1 className="text-3xl font-bold tracking-tight text-gray-700">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 sm:gap-y-7 sm:gap-x-5 py-8 md:grid-cols-2 grid-flow-row md:grid-flow-col mx-auto max-w-7xl">
        {/* Your content */}
        <div className="pb-7 border-b">
        <PanelElement></PanelElement>
        </div>

        <div className="pb-7 ">
        <PanelElement></PanelElement>
        <PanelElement></PanelElement>
        </div>

        <div className="row-span-3 p-5 md:border-l">
        <Exam></Exam>
        </div>

        </div>
    </SectionContent>
  )
}

export default DashboardPage
