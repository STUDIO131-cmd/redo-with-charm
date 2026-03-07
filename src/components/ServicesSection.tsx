import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import servicePlano from "@/assets/service-plano.png";
import serviceCampanhas from "@/assets/service-campanhas.png";
import clientDani from "@/assets/client-dani.png";
import clientCimples from "@/assets/client-cimples.png";
import clientThais from "@/assets/client-thais.png";
import clientHenry from "@/assets/client-henry.png";
import clientBallet from "@/assets/client-ballet.png";
import clientAdriano from "@/assets/client-adriano.png";
import clientAnaFlavia from "@/assets/client-anaflavia.png";
import clientCarol from "@/assets/client-carol.png";
import clientCristiano from "@/assets/client-cristiano.png";
import clientOuromil from "@/assets/client-ouromil.png";
import clientJoiasTereza from "@/assets/client-joias-tereza.png";
import clientBrenda from "@/assets/client-brenda.png";
import clientAngelo from "@/assets/client-angelo.png";
import clientLavie from "@/assets/client-lavie.png";
import clientFernanda from "@/assets/client-fernanda.png";
import clientGiovana from "@/assets/client-giovana.png";
import clientAuramia from "@/assets/client-auramia.png";
import clientAclari from "@/assets/client-aclari.png";

const clients = [
{ name: "Dani Fernandes Aromas", img: clientDani },
{ name: "CIMPLES by Carolina Ferraz", img: clientCimples },
{ name: "Thais Fernandes", img: clientThais },
{ name: "Henry Luchetti", img: clientHenry },
{ name: "Corpo de Ballet", img: clientBallet },
{ name: "Adriano Martin", img: clientAdriano },
{ name: "Ana Flávia Roland", img: clientAnaFlavia },
{ name: "Carol Segura", img: clientCarol },
{ name: "Cristiano Herrera", img: clientCristiano },
{ name: "Ouromil Joias", img: clientOuromil },
{ name: "Joias de Tereza", img: clientJoiasTereza },
{ name: "Brenda Braga", img: clientBrenda },
{ name: "Angelo Favero", img: clientAngelo },
{ name: "La Vie", img: clientLavie },
{ name: "Fernanda Giacomini", img: clientFernanda },
{ name: "Giovana Assad", img: clientGiovana },
{ name: "Auramia", img: clientAuramia },
{ name: "Aclari", img: clientAclari }];


const ServicesSection = () => {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto my-0">
      {/* Glass Bar Full-Width */}
      <div
        className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mb-20 py-10"
        style={{
          background: "linear-gradient(135deg, hsla(0,0%,0%,0.10) 0%, hsla(0,0%,0%,0.06) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid hsla(0,0%,0%,0.14)",
          borderBottom: "1px solid hsla(0,0%,0%,0.14)",
          boxShadow: "0 8px 32px hsla(0,0%,0%,0.12), inset 0 1px 0 hsla(0,0%,100%,0.2)"
        }}>
        
        <motion.div
          className="absolute top-0 h-full w-[35%] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsla(36,95%,80%,0.15) 50%, transparent 100%)"
          }}
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }} />
        

        <h2
          className="text-2xl md:text-3xl text-center text-foreground relative z-10 font-sans mb-6 px-6"
          style={{ fontFamily: "'TikTok Sans', sans-serif", fontWeight: 300, fontStretch: "expanded" }}>
          
          Marcas que atendemos no decorrer dos anos:
        </h2>

        <div className="flex animate-scroll-right" style={{ width: "fit-content" }}>
          {[...clients, ...clients].map((client, i) =>
          <div key={i} className="flex-shrink-0 w-64 h-64 mx-4">
              <img src={client.img} alt={client.name} className="w-full h-full object-cover rounded-full" />
            </div>
          )}
        </div>
      </div>

      {/* Título principal */}
      <motion.p
        className="text-center text-foreground mb-16 text-xl md:text-3xl font-light my-[44px]"
        style={{ fontFamily: "'TikTok Sans', sans-serif", fontWeight: 300, fontStretch: "expanded" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}>
        Como agência atuamos<br />
        em duas principais frentes:
      </motion.p>

      {/* Cards de serviços */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <motion.div
          className="rounded-2xl overflow-hidden bg-dark-section flex flex-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <div className="px-6 pt-6">
            <img alt="O Plano Profissional" className="w-full object-cover rounded-xl" src="/lovable-uploads/c18b8aa1-0fc6-4c13-8626-86f91cd6b135.png" />
          </div>
           <div className="p-6 space-y-4 flex flex-col flex-1">
             <h3 className="text-dark-section-foreground font-sans">
                <span className="text-2xl md:text-3xl font-bold block text-accent">O Plano Profissional</span>
                <span className="text-sm md:text-base font-extralight block uppercase tracking-wide">Operação + Consultoria</span>
              </h3>
             <p className="text-base leading-relaxed font-body" style={{ color: "hsl(0,0%,60%)" }}>
               Estruturamos a estratégia de conteúdo, geração de demanda e acompanhamos o processo comercial para que o crescimento aconteça sem depender exclusivamente do tempo do empresário.
             </p>
              <p className="text-sm font-body tracking-wide" style={{ color: "hsl(0,0%,50%)" }}>
                Eixos do acompanhamento:
              </p>
              <ul className="text-sm font-body space-y-1" style={{ color: "hsl(0,0%,50%)" }}>
                <li>— Estratégia de conteúdo</li>
                <li>— Tráfego Pago</li>
                <li>— Acompanhamento Comercial</li>
              </ul>
             <button className="mt-auto w-full flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground py-3 px-4 font-body text-sm font-medium hover:opacity-90 transition-opacity">
              <LayoutGrid className="w-4 h-4" />
              Clique: MAIS INFORMAÇÕES
            </button>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div className="rounded-2xl overflow-hidden bg-dark-section flex flex-col"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
          
          <div className="px-6 pt-6">
            <img alt="Campanhas" className="w-full object-cover rounded-xl" src="/lovable-uploads/6a3a07e3-beec-4916-86c0-01504c6b501c.png" />
          </div>
           <div className="p-6 space-y-4 flex flex-col flex-1">
             <h3 className="text-dark-section-foreground font-sans">
                <span className="text-2xl md:text-3xl font-bold block text-accent">Campanhas</span>
                <span className="text-sm md:text-base font-extralight block uppercase tracking-wide">Personalização + Pontualidade</span>
              </h3>
             <p className="text-base leading-relaxed font-body" style={{ color: "hsl(0,0%,60%)" }}>
               Criamos campanhas sob medida para ativar picos de faturamento em curto prazo, organizando comunicação, conteúdo e estratégia comercial em momentos decisivos do negócio.
             </p>
              <ul className="text-sm font-body space-y-1 mb-4" style={{ color: "hsl(0,0%,50%)" }}>
                <li className="my-[3px]">— Lançamentos de marca ou produto</li>
               <li className="my-[3px]">— Rebranding e reposicionamento</li>
               <li className="my-[3px]">— Datas comerciais estratégicas</li>
               <li className="my-[4px]">— Campanhas institucionais ou promocionais</li>
             </ul>
             <button className="mt-auto w-full flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground px-4 font-body text-sm font-medium hover:opacity-90 transition-opacity py-[12px] my-[22px]">
              <LayoutGrid className="w-4 h-4" />
              Clique: MAIS INFORMAÇÕES
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default ServicesSection;