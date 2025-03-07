
export const Hero = () => {
  return (
    <section className="w-full md:h-svh h-[51rem] p-5 md:p-16 flex flex-col items-start justify-start lg:justify-center gap-2 bg-center bg-cover bg-no-repeat bg-bannerMobile md:bg-bannerDescktop md:bg-[-47rem_0] lg:bg-center">
      <h1 className=" md:w-3/4 text-3xl md:text-6xl text-white font-bold mt-24 md:mt-52 lg:mt-0">
        Excelência  e  <br /> Comprometimento  com o Cliente
      </h1>
      <p className="md:w-2/3 text-white text-lg md:text-xl mt-2">
        Consultoria jurídica extrajudicial especializada, focada em soluções
        para testamentos, <br /> planejamento sucessório e proteção patrimonial,
        sempre com a segurança e a tranquilidade que sua família merece.
      </p>
      <button className="w-36 self-start text-lg bg-white px-6 py-3 mt-2 rounded text-greenTheme font-bold">Saiba Mais!</button>
    </section>
  )
}

