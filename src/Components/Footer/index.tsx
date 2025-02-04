
export const Footer = () => {
  return (
    <footer className="w-full min-h-72 h-auto p-4 bg-greenTheme flex items-center justify-center">
      <div className="container flex items-start md:items-center justify-center md:justify-around md:space-x-7 flex-wrap md:flex-nowrap space-y-7">
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <a href="#">Logo</a>
          <div className="flex flex-col items-start justify-start">
            <p className="text-white">Todos os direitos reservados</p>
            <p className="text-white">Site desenvolvido por Mais digital</p>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h1 className="text-white text-2xl font-semibold">Navegação</h1>
          <ul className="space-y-2">
            <li><a className="text-white text-lg" href="#">Home</a></li>
            <li><a className="text-white text-lg" href="#">Sobre Mim</a></li>
            <li><a className="text-white text-lg" href="#">Serviços</a></li>
            <li><a className="text-white text-lg" href="#">Contatos</a></li>
          </ul>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-2">
          <h1 className="text-white text-2xl font-semibold">Contatos</h1>
          <ul className="space-y-2">
            <li className="text-white text-lg font-semibold">Telefone:<a className="ml-2 font-normal" href="#">22 99959-9450</a></li>
            <li className="text-white text-lg font-semibold">Email:<a className="ml-2 font-normal" href="#">Example@gmail.com</a></li>
            <li className="text-white text-lg font-semibold">Endereço:<a className="ml-2 font-normal" href="#">
              Av. Elias Agostinho, <br />
              340 - Centro, Macaé - RJ, 27920-090
            </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}


