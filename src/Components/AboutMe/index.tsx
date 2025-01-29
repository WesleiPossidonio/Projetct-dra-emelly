import ImageAbout from '../../assets/ImgEmelyFontes-1.jpg'


const AboutMe = () => {
  return (
    <section className='w-full h-full p-4 bg-center bg-fixed bg-cover bg-parallaxDescktop bg-no-repeat relative min-h-mobile lg:min-h-0 ' style={{ height: '35rem' }}>
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-center lg:justify-between items-center md:px-10 py-10 lg:py-24 space-y-4">
        <div className="space-y-4 lg:w-1/2 self-start">
          <div>
            <h3 className="text-primary text-sm font-semibold mb-0.5">Um Pouco Mais Sobre</h3>
            <h1 className="text-primary text-2xl font-bold">Dra Emelly Fontes</h1>
          </div>

          <p className="text-black text-sm md:text-lg">
            Me chamo Emely, sou advogada com mais de 12 anos de experiência,
            voltada em oferecer soluções jurídicas ágeis e personalizadas para
            atender às necessidades específicas dos meus clientes.
            <br /><br />
            Ao longo da minha trajetória, construí uma reputação de eficiência,
            integridade e resultados práticos, ajudando indivíduos e empresas a
            superar desafios legais com rapidez e assertividade.
          </p>

          <p className="text-black text-sm md:text-lg">
            Meu foco é simplificar processos complexos e entregar soluções que realmente façam a diferença
          </p>
        </div>

        <div className="border-4 border-greenTheme w-56 md:w-60 lg:w-72 rounded-md absolute lg:relative -bottom-4 lg:-bottom-6 shadow-lg">
          <img className="flex-shrink-0 object-cover mt-4 -mb-4 -ml-4 mr-4 rounded-sm shadow-lg" src={ImageAbout} alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
