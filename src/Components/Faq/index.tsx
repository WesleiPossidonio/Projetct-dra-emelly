import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"


export const Faq = () => {
  return (
    <section className="w-full h-auto bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-7 md:px-10 py-10 lg:py-24">
        <h1 className="text-xl text-primary font-bold+">FAQ</h1>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1" className="bg-white px-2 rounded border border-primary">
            <AccordionTrigger className="text-black no-underline md:text-lg">Quais são as áreas de atuação da Dra. Emely?</AccordionTrigger>
            <AccordionContent>
              A Dra. Emely atua em Direito Civil, Trabalhista, Família e Previdenciário, oferecendo soluções personalizadas para cada necessidade jurídica.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white px-2 rounded border border-primary">
            <AccordionTrigger className="text-black no-underline md:text-lg">Como agendar uma consulta com a Dra. Emely?</AccordionTrigger>
            <AccordionContent>
              Você pode agendar sua consulta facilmente através do formulário de contato no site ou entrando em contato pelo WhatsApp ou telefone disponível
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white px-2 rounded border border-primary">
            <AccordionTrigger className="text-black no-underline md:text-lg">A Dra. Emely atende de forma online ou apenas presencial?</AccordionTrigger>
            <AccordionContent>
              Sim! Atendemos tanto de forma online quanto presencial, garantindo comodidade e acessibilidade para todos os clientes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white px-2 rounded border border-primary">
            <AccordionTrigger className="text-black no-underline md:text-lg">Como funciona o atendimento inicial?</AccordionTrigger>
            <AccordionContent>
              No atendimento inicial, a Dra. Emely ouvirá todos os detalhes do seu caso, analisará as possibilidades legais e explicará os próximos passos de forma clara e objetiva.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white px-2 rounded border border-primary">
            <AccordionTrigger className="text-black no-underline md:text-lg">Quais são as formas de pagamento aceitas?</AccordionTrigger>
            <AccordionContent>
              Oferecemos diversas opções de pagamento, incluindo transferência bancária, Pix e cartões de crédito, para facilitar o acesso aos nossos serviços.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}


