
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import * as zod from "zod"

import ImageContact from '../../assets/contactImage.svg'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { MailPlus, Map, Smartphone } from 'lucide-react'
import { useState } from 'react'
import api from '../../services/api'

const sendEmailFormSchema = zod.object({
  name: zod.string().min(3, 'Por gentileza, digite o seu nome'),
  email: zod.string().email('Por gentileza, digite o seu email corretamente'),
  phone: zod
    .string()
    .min(11, 'Por gentileza, digite o numero de telefone corretamente')
    .max(11, 'Por gentileza, digite o numero sem caractere'),
  subject_text: zod.string().min(3, 'Digite sua dúvida'),
  subject_title: zod.string().min(3, 'Digite sua dúvida'),
})

type createSendEmailFormInputs = zod.infer<typeof sendEmailFormSchema>

export const Contact = () => {
  const [captcha, setCaptcha] = useState<string | null>('')

  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm<createSendEmailFormInputs>({
    resolver: zodResolver(sendEmailFormSchema),
  })


  const handlesendMail = async (data: createSendEmailFormInputs) => {
    const { email, name, phone, subject_text, subject_title } = data

    const dataSendEmail = {
      email,
      name,
      phone,
      subject_text,
      subject_title,
      captcha, // Incluindo o token reCAPTCHA
    }

    try {
      await toast.promise(api.post('sendMail', dataSendEmail), {
        pending: 'Verificando seus dados',
        success: 'Dúvida enviada com sucesso!',
        error: 'Verifique seus dado e faça novamente! 🤯',
      })
      reset()
      setCaptcha(null) // Resetando o captcha após o envio
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className='w-full h-auto bg-white py-16 px-4 flex justify-center items-center overflow-hidden' id='contacts' style={{ minHeight: '35rem' }}>
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

            <div className='w-full flex flex-col items-start justify-center gap-4 mt-4'>
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

          </div>
          <form onSubmit={handleSubmit(handlesendMail)} className="space-y-4 ">
            <Input
              className='border-gray-400 focus:border-greenTheme'
              type="text" placeholder="Digite o seu nome"
              {...register('name')}
            />

            <Input
              className='border-gray-400 focus:border-greenTheme'
              type="email" placeholder="Email"
              {...register('email')}
            />
            <Input
              className='border-gray-400 focus:border-greenTheme'
              type="tel" placeholder="Digite o número do Telefone"
              {...register('phone')}
            />
            <Input
              className='border-gray-400 focus:border-greenTheme'
              type="text" placeholder="Digite o Assunto"
              {...register('subject_title')}
            />
            <Textarea
              className='border-gray-400 h-36 focus:border-greenTheme'
              placeholder='Digite sua Dúvida' {...register('subject_text')}
            />

            <button className="w-36 self-start text-base bg-greenTheme px-4 
              py-2 mt-2 rounded text-white font-bold" type='submit'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

