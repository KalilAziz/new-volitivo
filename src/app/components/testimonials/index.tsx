import { SectionContent } from '@/components/interface/section-content'
import { Text } from '@/components/ui/text'

export const Testimonials = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <SectionContent>
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <img className="h-12 self-start" src="logo.png" alt="" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <Text>
                Além de milhares de questões, a Volitivo também conta com materias de resumo para cada tópico de questão, sendo muito útil para revisar um assunto. 
                </Text>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Julia Ramos</div>
                  <div className="mt-1 text-gray-500">Estudante</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <img className="h-12 self-start" src="logo.png" alt="" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
              <Text>
              Devo muito a Volitivo, graças a seu mais completo banco de questões e acompanhamento personalizado de acertos e erros, pude progredir até minha tão sonhada aprovação!
              </Text>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-auto rounded-full bg-gray-50"
                  src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Mariana Pâmela</div>
                  <div className="mt-1 text-gray-500">Concursada</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </SectionContent>
    </section>
  )
}
