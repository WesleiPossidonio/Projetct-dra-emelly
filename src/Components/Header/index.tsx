
export const Header = () => {
  return (
    <header className="container mx-auto px-4 h-24 flex items-center">
      <div className="font-black">
        LOGO
      </div>


      <ul className="flex items-center justify-center ml-auto space-x-4">
        <li>
          <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Home</a>
        </li>

        <li>
          <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Sobre Mim</a>
        </li>

        <li>
          <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Nossos Trabalhos</a>
        </li>

        <li>
          <a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contatos</a>
        </li>
      </ul>
    </header>
  )
}


