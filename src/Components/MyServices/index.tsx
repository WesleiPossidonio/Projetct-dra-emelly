import ImageDivorceTwo from '../../assets/dirvocioOne.svg'
import ImageDivorceOne from '../../assets/divorcioTwo.svg'

import ImageContractOne from '../../assets/contractOne.svg'
import ImageContractTwo from '../../assets/contractTwo.svg'

import CasamentoOne from '../../assets/casamentoOne.svg'
import CasamentoTwo from '../../assets/casamentoTwo.svg'

import SucessaoOne from '../../assets/sucessaoOne.svg'
import SucessaoTwo from '../../assets/sucessaoTwo.svg'

import InventarioOne from '../../assets/inventarioOne.svg'
import InventarioTwo from '../../assets/inventarioTwo.svg'

import PatrimonialOne from '../../assets/patrimonialOne.svg'
import PatrimonialTwo from '../../assets/patrimonialTwo.svg'


export const MyServices = () => {
  return (
    <section className="w-full h-auto bg-primary overflow-hidden" id='services'>
      <div className="container max-w-6xl mx-auto px-4 md:px-10 py-16">

        <h1 className="text-center text-white text-2xl md:text-3xl font-bold mt-6">Área de Atuação</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">

          <div className="md:py-5 space-y-2 md:col-span-2 mb-3 md:mb-0 lg:pr-4">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">
              Excelência e Compromisso com a sua Questão Jurídica.
            </h2>
            <p className="text-white text-sm md:text-lg">
              Com atuação em demandas extrajudiciais e judiciais, Dra. Emelly
              defende a importância de buscar sempre soluções adequadas para
              seus clientes, priorizando, sempre que possível, a resolução
              por vias extrajudiciais.
            </p>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 
            transition ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-20 group-hover:hidden' src={ImageDivorceOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={ImageDivorceTwo} alt="" />
            <h2 className="text-white text-center group-hover:text-greenTheme text-lg md:text-xl font-bold">
              Divórcio Extrajudicial (Cartório)
            </h2>
          </div>


          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 
            transition ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-20 group-hover:hidden' src={ImageDivorceOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={ImageDivorceTwo} alt="" />
            <h2 className="text-white text-center group-hover:text-greenTheme text-lg md:text-xl font-bold">
              Direito da Família Consensual
            </h2>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 transition 
            ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className=' w-20 group-hover:hidden' src={InventarioOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={InventarioTwo} alt="" />
            <h2 className="text-white text-center group-hover:text-greenTheme text-lg md:text-xl font-bold">
              Inventário Extrajudicial
            </h2>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 transition 
            ase-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-20 group-hover:hidden' src={ImageContractOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={ImageContractTwo} alt="" />
            <h2 className="text-white text-center group-hover:text-greenTheme text-lg md:text-xl font-bold">
              Adjudicação extrajudicial e Usucapião Extrajudicial.
            </h2>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
             justify-center gap-3 hover:bg-white cursor-pointer 
             hover:-translate-y-2 transition ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className=' w-20 group-hover:hidden' src={InventarioOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={InventarioTwo} alt="" />
            <h2 className="text-white text-center group-hover:text-greenTheme text-lg md:text-xl font-bold">
              Regularização de imóveis administrativa e cartorária, incluindo “habite-se”
            </h2>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col 
            items-center justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 
            transition ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-20 group-hover:hidden' src={SucessaoOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={SucessaoTwo} alt="" />
            <h2 className="text-white text-center group-hover:text-greenTheme text-lg md:text-xl font-bold">
              Doação de imóvel e Planejamento Patrimonial e Sucessório.
            </h2>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 transition 
            ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className=' w-20 group-hover:hidden' src={CasamentoOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={CasamentoTwo} alt="" />
            <h2 className="text-white group-hover:text-greenTheme text-lg md:text-xl font-bold text-center">
              Planejamento matrimonial - Regime de bens no Casamento.
            </h2>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 transition 
            ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className=' w-20 group-hover:hidden' src={ImageContractOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={ImageContractTwo} alt="" />
            <h2 className="text-white group-hover:text-greenTheme text-center text-lg md:text-xl font-bold">
              Consultoria imobiliária na compra e venda e locações de imóveis.
            </h2>
          </div>


          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 
            transition ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className=' w-20 group-hover:hidden' src={PatrimonialOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={PatrimonialTwo} alt="" />
            <h2 className="text-white group-hover:text-greenTheme text-center text-lg md:text-xl font-bold">
              Trabalhista Empresarial.
            </h2>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center justify-center 
            gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 transition 
            ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className=' w-20 group-hover:hidden' src={ImageContractOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={ImageContractTwo} alt="" />
            <h2 className="text-white text-center group-hover:text-greenTheme text-lg md:text-xl font-bold">
              Elaboração e análise de contratos.
            </h2>
          </div>


          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 
            transition ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className=' w-20 group-hover:hidden' src={PatrimonialOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={PatrimonialTwo} alt="" />
            <h2 className="text-white group-hover:text-greenTheme text-center text-lg md:text-xl font-bold">
              Contrato de trabalho e regimento interno empresarial.
            </h2>
          </div>

          <div className="group border border-white rounded-md px-4 py-5 flex flex-col items-center 
            justify-center gap-3 hover:bg-white cursor-pointer hover:-translate-y-2 
            transition ease-in-out duration-200" data-aos="zoom-in" data-aos-duration="1000">
            <img className='w-20 group-hover:hidden' src={SucessaoOne} alt="" />
            <img className='hidden  w-20 group-hover:block' src={SucessaoTwo} alt="" />
            <h2 className="text-white group-hover:text-greenTheme text-center text-lg md:text-xl font-bold">
              Elaboração e análise de contratos.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
