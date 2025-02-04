import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Altera o estado se rolar mais de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full flex justify-between items-center text-black py-6 px-8 md:px-28 drop-shadow-md ${scrolled ? "bg-greenTheme shadow-lg z-10" : "bg-transparent"
      }`}>

      <a href="#">
        Logo
      </a>

      <ul className="hidden lg:flex items-center gap-8 font-semibold text-base">
        <li><a className=" text-xl font-semibold text-white transition-all cursor-pointer" href="#">Home</a></li>
        <li><a className=" text-xl font-semibold text-white transition-all cursor-pointer" href="#">Sobre Nós</a></li>
        <li><a className=" text-xl font-semibold text-white transition-all cursor-pointer" href="#">Nossos Serviços</a></li>
        <li><a className=" text-xl font-semibold text-white transition-all cursor-pointer" href="#">Contatos</a></li>
      </ul>

      {
        isMenuOpen ? <X className="lg:hidden block text-6xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} /> : <Menu className="lg:hidden block text-6xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      }

      <div className={`absolute xl:hidden top-16 left-0 w-full bg-greenTheme flex flex-col items center gap-4 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
        <li className="list-none w-full text-center p-2 transition-all cursor-pointer">Home</li>
        <li className="list-none w-full text-center p-2 transition-all cursor-pointer">Sobre Nós</li>
        <li className="list-none w-full text-center p-2 transition-all cursor-pointer">Nossos Serviços</li>
        <li className="list-none w-full text-center p-2 transition-all cursor-pointer">Contatos</li>
      </div>
    </header>
  )
}


