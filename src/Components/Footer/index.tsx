import Logo from '../../../public/EMELYlogo.png'

export const Footer = () => {
  return (
    <footer className="w-full min-h-72 h-auto p-4 bg-greenTheme flex items-center justify-center">
      <div className="container flex items-start md:items-center justify-center md:justify-around md:space-x-7 flex-wrap md:flex-nowrap space-y-7">
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <a href="/">
            <img className="w-24 lg:w-28" src={Logo} alt="" />
          </a>
          <div className="flex flex-col items-start justify-start">
            <p className="text-white">© 2025 Dra Emely Fontes - Todos os direitos reservados</p>
            <p className="text-white">Site desenvolvido por <a className='text-white font-semibold' href="Mais Digital" target='_blank'>Mais Digital</a></p>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h1 className="text-white text-2xl font-semibold">Navegação</h1>
          <ul className="space-y-2">
            <li><a className="text-white text-lg" href="#">Home</a></li>
            <li><a className="text-white text-lg" href="#about">Sobre Mim</a></li>
            <li><a className="text-white text-lg" href="#services">Serviços</a></li>
            <li><a className="text-white text-lg" href="#contacts">Contatos</a></li>
          </ul>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h1 className="text-white text-2xl font-semibold">Contatos</h1>
          <ul className="space-y-2">
            <li className="text-white md:text-lg font-semibold">Telefone:<a className="ml-2 md:text-md font-normal" href="ttps://api.whatsapp.com/send?phone=5522999599450">22 99959-9450</a></li>
            <li className="text-white md:text-lg font-semibold">Email:<a className="ml-2 md:text-md font-normal" href="mailto:Example@gmail.com">Example@gmail.com</a></li>
            <li className="text-white md:text-lg font-semibold">Endereço:<a className="ml-2 md:text-md  font-normal" href="https://maps.app.goo.gl/CfXJqtMpWJEh1umn8" target='_blank'>
              Av. Elias Agostinho, <br /> 340 - Imbetiba, Macaé - RJ, 27970-020
            </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}



