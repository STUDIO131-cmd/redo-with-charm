import { motion } from "framer-motion";
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
    <section className="px-6 py-20 max-w-5xl mx-auto">
      {/* Glass Button */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        
        className="flex justify-center mb-3"
          style={{
            background: "linear-gradient(135deg, hsla(0,0%,0%,0.10) 0%, hsla(0,0%,0%,0.06) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid hsla(0,0%,0%,0.14)",
            boxShadow: "0 8px 32px hsla(0,0%,0%,0.12), inset 0 1px 0 hsla(0,0%,100%,0.2)"
          }}>
          
          {/* Light sweep */}
          <motion.div
            className="absolute top-0 h-full w-[35%] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, hsla(36,95%,80%,0.15) 50%, transparent 100%)"
            }}
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }} />
          
          <h2
            className="text-5xl text-center text-foreground relative z-10 leading-[0.9] font-sans md:text-4xl"
            style={{ fontFamily: "'TikTok Sans', sans-serif", fontWeight: 700 }}>
            
            Marcas que atendemos<br />no decorrer dos anos:
          </h2>
        </div>
      </motion.div>

      {/* Client Logo Slider */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mb-20">
        <div className="flex animate-scroll-right" style={{ width: "fit-content" }}>
          {[...clients, ...clients].map((client, i) =>
          <div
            key={i}
            className="flex-shrink-0 w-64 h-64 mx-4">
            
              <img
              src={client.img}
              alt={client.name}
              className="w-full h-full object-cover rounded-full" />
            
            </div>
          )}
        </div>
      </div>

      <motion.h2
        className="text-2xl md:text-3xl font-display text-center mb-4 text-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        
        Sustentar decisões estratégicas ao longo do tempo é o que separa marcas comuns de marcas fortes.
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground mb-16 text-lg font-display"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}>
        
        Como agência atuamos em duas principais frentes:
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Service 1 */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <h3 className="text-xl font-display text-foreground">
            O Plano Profissional: Operação + Consultoria
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            Estruturamos a estratégia de conteúdo, geração de demanda e acompanhamos o processo comercial para que o crescimento aconteça sem depender exclusivamente do tempo do empresário.
          </p>
          <p className="text-muted-foreground text-xs font-body tracking-wide">
            Eixos do acompanhamento: Conteúdo · Tráfego · Comercial
          </p>
          <img
            src={servicePlano}
            alt="O Plano Profissional"
            className="w-full rounded-lg mt-4" />
          
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <h3 className="text-xl font-display text-foreground">
            Campanhas: Personalização + Pontualidade
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            Criamos campanhas sob medida para ativar picos de faturamento em curto prazo, organizando comunicação, conteúdo e estratégia comercial em momentos decisivos do negócio.
          </p>
          <ul className="text-muted-foreground text-xs font-body space-y-1">
            <li>— Lançamentos de marca ou produto</li>
            <li>— Rebranding e reposicionamento</li>
            <li>— Datas comerciais estratégicas</li>
            <li>— Campanhas institucionais ou promocionais</li>
          </ul>
          <img
            src={serviceCampanhas}
            alt="Campanhas"
            className="w-full rounded-lg mt-4" />
          
        </motion.div>
      </div>
    </section>);

};

export default ServicesSection;