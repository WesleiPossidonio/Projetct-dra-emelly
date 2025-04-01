import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  AboutMe,
  Coments,
  Contact,
  Differential,
  Faq,
  Footer,
  Header,
  Hero,
  MyServices
} from "./Components"
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <main className="bg-white w-full h-auto">
      <Header />
      <Hero />
      <AboutMe />
      <MyServices />
      <Differential />
      <Coments />
      {/* <CallAction /> */}
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

// pesquisar fontes https://institutomcd.com.br/