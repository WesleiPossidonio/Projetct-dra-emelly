import { Goal, Handshake, MapPinned, UserCheck } from "lucide-react"
import Image from '../../assets/diferençasImages.jpg'

export const Differential = () => {
  return (
    <section className="w-full h-auto flex items-center" style={{ minHeight: '35rem' }}>
      <div className="container max-w-6xl mx-auto py-10 px-4 space-y-5">
        <div className="flex flex-col-reverse gap-8 lg:flex-row items-center justify-around">
          <div className="flex items-center justify-center space-x-2 relative">
            <span className="position-absolute bg-primary px-1 rounded-lg"></span>
            <img className="rounded-md w-60 md:w-80" src={Image} alt="" />

            <div className="h-24 w-32 md:h-32 md:w-40 -bottom-6 right-2 px-1 flex flex-col items-center justify-center absolute md:-bottom-8 md:right-32 lg:-right-12 bg-primary rounded-lg">
              <h1 className="text-2xl md:text-3xl text-white font-bold ">+ 2000 </h1>
              <h3 className="text-sm md:text-xl text-white font-bold text-center">Clientes <br /> Atendidos!</h3>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center space-y-7 lg:w-1/2'>
            <div className='space-y-3 '>
              <div className=''>
                <h1 className="text-black pt-4 text-base md:text-lg">Diferenças</h1>
                <h2 className='text-black text-xl md:text-3xl font-semibold'>
                  Muito Mais que uma Consulta!
                </h2>
              </div>
              <p className='text-black text-sm md:text-lg'>
                amet consectetur adipisicing elit.
                Minus cumque asperiores omnis velit provident, eum vero
                maxime eius quibusdam magnam sequi sit, nesciunt cupiditate!
                Magni officia facilis voluptatum consequatur sed.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-full md:w-1/2 flex items-center justify-center gap-3">
                  <Handshake className="size-16 text-greenTheme" />
                  <h1 className="text-sm md:text-md font-semibold">Lorem ipsum dolor sit amet consectetur </h1>
                </div>

                <div className="w-full md:w-1/2 flex items-center gap-3">
                  <UserCheck className="size-16 text-greenTheme" />
                  <h1 className="text-sm md:text-md font-semibold">Lorem ipsum dolor sit amet consectetur </h1>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-full md:w-1/2 flex items-center justify-center gap-3">
                  <Goal className="size-16 text-greenTheme" />
                  <h1 className="text-sm md:text-md font-semibold">Lorem ipsum dolor sit amet consectetur </h1>
                </div>

                <div className="w-full md:w-1/2 flex items-center gap-3">
                  <MapPinned className="size-16 text-greenTheme" />
                  <h1 className="text-sm md:text-md font-semibold">Lorem ipsum dolor sit amet consectetur </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}


