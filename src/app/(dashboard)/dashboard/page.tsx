import { SectionContent } from '@/components/interface/section-content'

const DashboardPage = () => {
  return (
    <SectionContent>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      </div>

      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
    </SectionContent>
  )
}

export default DashboardPage
