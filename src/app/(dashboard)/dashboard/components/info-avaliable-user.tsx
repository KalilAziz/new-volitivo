'use client'
import { Card, Title, AreaChart } from '@tremor/react'

const stats = [
  { id: 1, name: 'Questões respondidas', value: '156' },
  { id: 2, name: 'Porcentagem de acerto', value: '48%', unit: 'mins' },
  { id: 3, name: 'Acertos', value: '75' },
  { id: 4, name: 'Erros', value: '81' }
]

const chartdata = [
  {
    date: 'Jan 22',
    Acertos: 10,
    Erros: 12
  },
  {
    date: 'Feb 22',
    Acertos: 10,
    Erros: 2
  },
  {
    date: 'Mar 22',
    Acertos: 30,
    Erros: 2
  },
  {
    date: 'Apr 22',
    Acertos: 5,
    Erros: 15
  },
  {
    date: 'May 22',
    Acertos: 10,
    Erros: 20
  },
  {
    date: 'Jun 22',
    Acertos: 10,
    Erros: 30
  }
]

export const InfoAvailableUser = () => {
  return (
    <div className="space-y-3">
      <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl border text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <Card className="bg-gray-400/5">
        <Title> Questões respondidas por mês </Title>
        <AreaChart
          className="mt-4 h-72"
          data={chartdata}
          index="date"
          categories={['Acertos', 'Erros']}
          colors={['green', 'red']}
        />
      </Card>
    </div>
  )
}
