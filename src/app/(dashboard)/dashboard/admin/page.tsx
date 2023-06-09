'use client'
import { useState } from 'react'

import { CreateNewCalendar } from './components/create-new-calendar'
import { CreateNewPost } from './components/create-new-post'
import { CreateNewQuestion } from './components/create-new-question'
import { ListQuestionsAdmin } from './components/list-questions-admin'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('questions')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <Tabs defaultValue="questions" value={activeTab} onValueChange={handleTabChange} className="w-full">
      <div className="flex w-full justify-between">
        <TabsList>
          <TabsTrigger value="questions">Questões</TabsTrigger>
          <TabsTrigger value="blog">Blogs</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        {activeTab === 'questions' && <CreateNewQuestion />}
        {activeTab === 'blog' && <CreateNewPost />}
        {activeTab === 'calendar' && <CreateNewCalendar />}
      </div>
      <TabsContent value="questions">
        <ListQuestionsAdmin />
      </TabsContent>
      <TabsContent value="blog">Make changes to your account here.</TabsContent>
      <TabsContent value="calendar">Change your password here.</TabsContent>
    </Tabs>
  )
}

export default AdminDashboard
