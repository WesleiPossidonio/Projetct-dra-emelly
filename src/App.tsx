import AOS from 'aos';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
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
  MyServices,
  WhatsappButton
} from "./Components"

function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <main className="bg-white w-full h-auto">
      <ToastContainer />
      <WhatsappButton />
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