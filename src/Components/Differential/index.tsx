import { Goal, Handshake, MapPinned, UserCheck } from "lucide-react"
import Image from '../../assets/diferençasImages.jpg'

export const Differential = () => {
  return (
    <section className="w-full h-auto flex items-center bg-center bg-fixed bg-cover bg-parallaxDescktop bg-no-repeat overflow-hidden" style={{ minHeight: '35rem' }}>
      <div className="container max-w-6xl mx-auto py-10 px-4 space-y-5">
        <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-around">
          <div className="flex items-center justify-center space-x-2 relative" data-aos="fade-right" data-aos-duration="1000">
            <span className="position-absolute bg-primary px-1 rounded-lg"></span>
            <img className="rounded-md w-60 md:w-72 lg:w-80" src={Image} alt="" />

            <div className="h-24 w-32 md:h-32 md:w-40 -bottom-6 -right-6 md:-right-7 px-1 flex flex-col items-center justify-center absolute md:-bottom-8  lg:-right-12 bg-primary rounded-lg">
              <h1 className="text-2xl md:text-3xl text-white font-bold ">+ 2000 </h1>
              <h3 className="text-sm md:text-xl text-white font-bold text-center">Clientes <br /> Atendidos!</h3>
            </div>
          </div>

          <div className=' md:w-1/2 flex flex-col items-center justify-center space-y-7 lg:w-1/2' data-aos="fade-left" data-aos-duration="1000">
            <div className='space-y-3 '>
              <div className=''>
                <h1 className="text-black pt-4 text-base md:text-lg">Diferenças</h1>
                <h2 className='text-black text-2xl md:text-3xl font-semibold'>
                  Muito Mais que uma Consulta!
                </h2>
              </div>
              <p className='text-black text-sm md:text-lg'>
                Cada atendimento é feito com dedicação e exclusividade, garantindo que suas
                necessidades sejam compreendidas com empatia e profissionalismo. Com um olhar
                atento e humanizado, meu compromisso é oferecer soluções que realmente façam
                a diferença na sua vida.
              </p>
            </div>

            <div className=" w-full flex flex-col items-start justify-center space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-full md:w-1/2 flex items-center justify-center gap-3">
                  <Handshake className="size-16 text-greenTheme" />
                  <h1 className="text-sm md:text-md font-semibold">Atendimento Personalizado</h1>
                </div>

                <div className="w-full md:w-1/2 flex items-center gap-3">
                  <UserCheck className="size-16 text-greenTheme" />
                  <h1 className="text-sm md:text-md font-semibold">Experiência e Dedicação</h1>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-full md:w-1/2 flex items-center justify-center gap-3">
                  <Goal className="size-16 text-greenTheme" />
                  <h1 className="text-sm md:text-md font-semibold">Mais de 2000 Clientes Satisfeitos</h1>
                </div>

                <div className="w-full md:w-1/2 flex items-center gap-3">
                  <MapPinned className="size-16 text-greenTheme" />
                  <h1 className="text-sm md:text-md font-semibold">Excelência e Confiança</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}


