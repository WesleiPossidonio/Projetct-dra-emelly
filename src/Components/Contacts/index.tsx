
import ImageContact from '../../assets/contactImage.svg'
import { MailPlus, Map, Smartphone } from 'lucide-react'
import { WhatsappLogoIcon } from "@phosphor-icons/react"

export const Contact = () => {

  return (
    <section className='w-full h-auto bg-white pb-16 px-4 flex justify-center items-center overflow-hidden' id='contacts' style={{ minHeight: '35rem' }}>
      <div className="w-full container flex flex-col gap-14 lg:flex-row items-end md:items-center lg:items-end justify-center lg:justify-around lg:gap-4">
        <img className='w-96 md:w-maps order-2' src={ImageContact} alt="" data-aos="fade-up" data-aos-offset="300"
          data-aos-easing="ease-in-sine" />

        <div className="w-full lg:w-1/2  flex flex-col gap-10 order-1" data-aos="fade-right" data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <div className='flex flex-col items-start justify-center'>
            <h4 className='text-md md:text-lg text-greenTheme font-bold'>- Contatos</h4>
            <h1 className="text-xl md:text-3xl text-greenTheme font-bold">
              Entre em contato e dê o primeiro passo para resolver suas questões jurídicas com confiança e excelência.
            </h1>

            <div className='w-full flex flex-col items-start justify-center gap-4'>
              <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-20">
                <div className='flex items-center'>
                  <Smartphone className='text-greenTheme size-11' />
                  <span className='flex flex-col align-start'>
                    <p>Telefone</p>
                    <a className='text-lg font-bold text-greenTheme' href="https://api.whatsapp.com/send?phone=5522999599450" target="_blank" rel="noopener noreferrer">22 99959-9450</a>
                  </span>
                </div>

                <div className='flex items-center gap-2'>
                  <MailPlus className='text-greenTheme size-11' />
                  <span className='flex flex-col align-start'>
                    <p>E-mail</p>
                    <a className='text-lg font-bold text-greenTheme' href="mailto:emelyfontes@hotmail.com" rel="noopener noreferrer">emelyfontes@hotmail.com</a>
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <Map className='text-greenTheme size-11' />
                <span className='flex flex-col align-start'>
                  <p>Endereço</p>
                  <a className='text-lg font-bold text-greenTheme' href="https://maps.app.goo.gl/CfXJqtMpWJEh1umn8" target="_blank" rel="noopener noreferrer">
                    Av. Elias Agostinho, <br /> 340 - Imbetiba, Macaé - RJ, 27970-020
                  </a>
                </span>
              </div>
            </div>

            <div className=' w-full lg:w-3/4 mt-8 flex flex-col md:flex-row items-center gap-4'>
              <a href="mailto:mailto:emelyfontes@hotmail.com" className='w-full flex items-center justify-center gap-2 p-2 md:p-4 bg-greenTheme text-white font-semibold rounded-md hover:opacity-90 transition-colors'>
                <MailPlus className='text-white size-8' />
                Entrar em Contato
              </a>

              <a href="https://wa.me/5522999599450" target='_blank' rel="noopener noreferrer" className='w-full flex items-center justify-center gap-2 p-2 md:p-4 bg-greenTheme text-white font-semibold rounded-md hover:opacity-90 transition-colors'>
                <WhatsappLogoIcon className='text-white size-8' />
                Entrar em Contato
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

