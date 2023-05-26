import { Question } from './question'

const questions = [
  {
    codeQuestion: 'INV001',
    subjects: 'Paid',
    year: '$250.00',
    bank: 'Credit Card',
    issuing: 'CESPE',
    assessment: 'exame 1',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    alternativeA:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    alternativeB:
      'y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
    alternativeC:
      ' typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
    alternativeD:
      'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa',
    alternativeE:
      'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    correctAnswer: 'A',
    discipline: {
      name: 'Portugues',
      slug: 'portugues'
    }
  },
  {
    codeQuestion: 'INV002',
    subjects: 'Paid',
    year: '$250.00',
    bank: 'Credit Card',
    issuing: 'CESPE',
    assessment: 'exame 1',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    alternativeA:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    alternativeB:
      'y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
    alternativeC:
      ' typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
    alternativeD:
      'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa',
    alternativeE:
      'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    correctAnswer: 'B',
    discipline: null
  },
  {
    codeQuestion: 'INV003',
    subjects: 'Paid',
    year: '$250.00',
    bank: 'Credit Card',
    issuing: 'CESPE',
    assessment: 'exame 1',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    alternativeA:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    alternativeB:
      'y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
    alternativeC:
      ' typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
    alternativeD:
      'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa',
    alternativeE:
      'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    correctAnswer: 'alternativeA',
    discipline: {
      name: 'Matemática',
      slug: 'matematica'
    }
  },
  {
    codeQuestion: 'INV004',
    subjects: 'Paid',
    year: '$250.00',
    bank: 'Credit Card',
    issuing: 'CESPE',
    assessment: 'exame 1',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    alternativeA:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    alternativeB:
      'y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
    alternativeC:
      ' typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
    alternativeD:
      'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa',
    alternativeE:
      'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    correctAnswer: 'C',
    discipline: null
  },
  {
    codeQuestion: 'INV005',
    subjects: 'Paid',
    year: '$250.00',
    bank: 'Credit Card',
    issuing: 'CESPE',
    assessment: 'exame 1',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    alternativeA:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    alternativeB:
      'y text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
    alternativeC:
      ' typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker',
    alternativeD:
      'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa',
    alternativeE:
      'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    correctAnswer: 'D',
    discipline: {
      name: 'Quimica',
      slug: 'quimica'
    }
  }
]

export const ListQuestions = () => {
  return (
    <div className="space-y-7">
      {questions.map((question) => (
        <Question key={question.codeQuestion} {...question} />
      ))}
    </div>
  )
}
