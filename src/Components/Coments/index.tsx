import { Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel"

const comentsArray = [
  {
    name: 'Rafael',
    text: 'Ótima escolha para a regularização imobiliária da casa dos meus pais. Com conhecimento e experiência na área, ela garantiu um processo seguro e eficiente, trazendo mais tranquilidade e segurança.',
    id: 1,
  },

  {
    name: 'Claudia',
    text: 'Quando eu pensei que não tinha mais solução, eis que Dra. Emely com toda sua humanidade e eficiência conduziu o processo para um bom desfecho. Sem dúvidas que recomendo seus serviços.',
    id: 2,
  },

  {
    name: 'Otávio',
    text: 'Ela foi impecável na negociação. Contratei para consultoria de compra e venda de imóvel. Fiquei muito seguro com todo trabalho e transparência.',
    id: 3,
  },

  {
    name: 'Sheila',
    text: 'Dra. Emely foi uma excelente escolha na consultoria trabalhista da minha empresa! Com visão estratégica, conseguimos alinhar segurança jurídica e crescimento sustentável da empresa.',
    id: 4,
  },

  {
    name: 'Luiz Paulo',
    text: 'A demanda da minha empresa era complexa. Inicialmente demoramos para buscar profissional e quando recebemos a indicação da Dra. Emely, agendamos consulta jurídica. Do primeiro contato até a finalização da negociação a transparência em cada ato realizado nos garantia o comprometimento com a nossa questão e a segurança da transparência. Foi uma excelente experiência.',
    id: 5,
  },

  {
    name: 'Larissa',
    text: 'Dra. Emely com todo profissionalismo e humanidade desembolou uma demanda que estava “em aberto” por mais de dez anos. Não tenho palavras para agradecer a boa condução da negociação, a transparência e a segurança em cada etapa até a finalização do procedimento.',
    id: 6,
  },

]


export const Coments = () => {
  return (
    <section className="w-full h-auto flex items-center bg-primary overflow-hidden" style={{ minHeight: '35rem' }}>
      <div className="full container max-w-6xl mx-auto py-10 px-8 space-y-5 flex flex-col items-start justify-center gap-7">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-start gap-3" data-aos="fade-right" data-aos-duration="1000">
          <div className="self-start">
            <h4 className="text-white font-semibold">Testemunhos</h4>
            <h1 className="text-white text-2xl md:text-3xl">O que Falam da Dra Emely Fontes</h1>
            <p className="text-white text-md md:text-lg m-0 self-start">
              Veja o que meus clientes dizem sobre meu trabalho
            </p>
          </div>
          <button className="w-36 self-start text-base bg-white px-4 py-2 mt-2 rounded text-greenTheme font-bold">Saiba Mais!</button>
        </div>

        <Carousel className="w-full" plugins={[
          Autoplay({
            delay: 2000,
          }),

        ]} data-aos="zoom-in-up" data-aos-duration="1000">
          <CarouselContent>

            {
              comentsArray.map(coments => {
                return (
                  <CarouselItem key={coments.id} className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                    <div className="w-full h-56 p-6 flex flex-col items-start justify-center gap-3 rounded-md shadow-sm bg-white">
                      <p className="text-md font-semibold">
                        {coments.name}
                      </p>
                      <p className="text-sm overflow-hidden">
                        {coments.text}
                      </p>
                      <div className="flex flex-col items-start justify-center gap-3">
                        <div className="flex">
                          <Star className="size-4 text-yellow-400" />
                          <Star className="size-4 text-yellow-400" />
                          <Star className="size-4 text-yellow-400" />
                          <Star className="size-4 text-yellow-400" />
                          <Star className="size-4 text-yellow-400" />
                        </div>
                      </div>

                    </div>
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}


