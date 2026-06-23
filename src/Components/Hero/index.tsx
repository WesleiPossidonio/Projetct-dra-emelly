import ImageBanner2 from '../../../public/BannerDraEmelly2.webp'
import ImageBannerMobile from '../../../public/BannerImgMobile.webp'

export const Hero = () => {
  return (
    <section className="relative w-full md:h-svh h-[52rem] overflow-hidden -z-1">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={ImageBanner2}
        />

        <img
          src={ImageBannerMobile}
          alt="Dra. Emelly Fontes"
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      <div
        className="
          relative z-10
          w-full h-full
          p-5 md:p-13
          flex flex-col items-start justify-start
          lg:justify-center
          gap-2
          lg:px-24
        "
      >
        <h1 className="md:w-[60%] text-3xl md:text-5xl text-white font-bold mt-20 md:mt-52 lg:mt-0">
          Excelência e <br />
          Comprometimento com o Cliente
        </h1>

        <p className="md:w-[60%] text-white md:text-lg lg:text-xl mt-2">
          Compromisso em oferecer atendimento personalizado,
          compreendendo cada caso de forma única e buscando sempre a
          melhor resolução, com eficiência e sensibilidade na atuação
          jurídica seja no âmbito extrajudicial ou judicial.
        </p>

        <a
          href="https://api.whatsapp.com/send/?phone=5522999599450&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-36 self-start text-lg bg-white px-6 py-3 mt-2 md:mt-4 rounded text-greenTheme font-bold"
        >
          Saiba Mais!
        </a>
      </div>
    </section>
  );
};