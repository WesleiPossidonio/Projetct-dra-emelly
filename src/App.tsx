import { CallAction, Coments, Contact, Differential, Faq, Hero, MyServices } from "./Components"
import AboutMe from "./Components/AboutMe"

function App() {

  return (
    <main className="bg-white w-full h-auto">
      <Hero />
      <AboutMe />
      <MyServices />
      <Differential />
      <Coments />
      <CallAction />
      <Faq />
      <Contact />
    </main>
  )
}

export default App

// pesquisar fontes https://institutomcd.com.br/