import { Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel"


export const Coments = () => {
  return (
    <section className="w-full h-auto flex items-center bg-primary overflow-hidden" style={{ minHeight: '35rem' }}>
      <div className="container max-w-6xl mx-auto py-10 px-8 space-y-5 flex flex-col lg:flex-row items-center justify-center gap-7">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-start gap-3" data-aos="fade-right" data-aos-duration="1000">
          <div className="self-start">
            <h4 className="text-white font-semibold">Testemunhos</h4>
            <h1 className="text-white text-2xl md:text-3xl">O que Falam da Dra Emely Fontes</h1>
          </div>
          <p className="text-white text-md md:text-lg m-0  self-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quod modi libero
          </p>
          <button className="w-36 self-start text-base bg-white px-4 py-2 mt-2 rounded text-greenTheme font-bold">Saiba Mais!</button>
        </div>

        <Carousel className="w-full" plugins={[
          Autoplay({
            delay: 2000,
          }),

        ]} data-aos="zoom-in-up" data-aos-duration="1000">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 flex items-center justify-center">
              <div className="w-full h-56 p-6 flex flex-col items-start justify-center gap-10 rounded-md shadow-sm bg-white">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio pariatur eaque sit
                </p>
                <div className="flex flex-col items-start justify-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
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

            <CarouselItem className="md:basis-1/2 flex items-center justify-center">
              <div className="w-full h-56 p-6 flex flex-col items-start justify-center gap-10 rounded-md shadow-sm bg-white">
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio pariatur eaque sit</p>
                <div className="flex flex-col items-start justify-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    <Star className="size-4" />
                  </Avatar>
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
            <CarouselItem className="md:basis-1/2 flex items-center justify-center">
              <div className="w-full h-56 p-6 flex flex-col items-start justify-center gap-10 rounded-md shadow-sm bg-white">
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio pariatur eaque sit</p>
                <div className="flex flex-col items-start justify-center gap-3">

                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
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
            <CarouselItem className="md:basis-1/2 flex items-center justify-center">
              <div className="w-full h-56 p-6 flex flex-col items-start justify-center gap-10 rounded-md shadow-sm bg-white">
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio pariatur eaque sit</p>
                <div className="flex flex-col items-start justify-center gap-3">

                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
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
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}


