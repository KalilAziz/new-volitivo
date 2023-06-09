'use client'
import Link from 'next/link'
import { useState } from 'react'

import { CreateNewCourseware } from './components/create-new-courseware'
import { CreateNewPost } from './components/create-new-post'
import { CreateNewQuestion } from './components/create-new-question'
import { ListQuestionsAdmin } from './components/list-questions-admin'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { ChevronRight } from 'lucide-react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('questions')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <Tabs defaultValue="questions" value={activeTab} onValueChange={handleTabChange} className="w-full">
      <div className="flex w-full justify-between ">
        <TabsList>
          <TabsTrigger value="questions">Questões</TabsTrigger>
          <TabsTrigger value="blog">Blogs</TabsTrigger>
          <TabsTrigger value="courseware">Materiais</TabsTrigger>
        </TabsList>
        {activeTab === 'questions' && <CreateNewQuestion />}
        {activeTab === 'blog' && <CreateNewPost />}
        {activeTab === 'courseware' && <CreateNewCourseware />}
      </div>
      <TabsContent value="questions">
        <ListQuestionsAdmin />
      </TabsContent>
      <TabsContent value="blog">
        <div
          className="rounded-lg border bg-white p-4 dark:bg-gray-800 md:p-8"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Powering innovation & trust at 200,000+ companies worldwide
          </h2>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and
            deliver great customer and employee service experiences fast.
          </p>
          <Link
            href={`/dashboard/admin/post/${1}`}
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Editar
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </TabsContent>
      <TabsContent value="courseware"></TabsContent>
    </Tabs>
  )
}

export default AdminDashboard
