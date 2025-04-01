
export const Hero = () => {
  return (
    <section className="w-full  md:h-svh h-[52rem] p-5 md:p-16 lg:p-28 flex flex-col items-start justify-start 
    lg:justify-center gap-2 bg-center bg-cover bg-no-repeat bg-bannerMobile md:bg-bannerDescktop md:bg-[-47rem_0] lg:bg-center">
      <h1 className="md:w-[60%] text-3xl md:text-6xl text-white font-bold mt-24 md:mt-52 lg:mt-0">
        Excelência  e  <br /> Comprometimento  com o Cliente
      </h1>
      <p className="md:w-[60%] text-white text-lg md:text-xl mt-2">
        Compromisso em oferecer atendimento personalizado, compreendendo cada
        caso de forma única e buscando sempre a melhor resolução, com eficiência
        e sensibilidade na atuação jurídica seja no âmbito extrajudicial ou judicial.
      </p>
      <button className="w-36 self-start text-lg bg-white px-6 py-3 mt-4 rounded text-greenTheme font-bold">Saiba Mais!</button>
    </section>
  )
}

