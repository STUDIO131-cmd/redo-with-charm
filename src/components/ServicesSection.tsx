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
];

const ServicesSection = () => {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      {/* Glass Button */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="relative rounded-xl overflow-hidden px-8 py-5"
          style={{
            background: "linear-gradient(135deg, hsla(0,0%,100%,0.08) 0%, hsla(0,0%,100%,0.03) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid hsla(0,0%,0%,0.08)",
            boxShadow: "0 8px 32px hsla(0,0%,0%,0.06), inset 0 1px 0 hsla(0,0%,100%,0.6)",
          }}
        >
          {/* Light sweep */}
          <motion.div
            className="absolute top-0 h-full w-[35%] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, hsla(36,95%,80%,0.15) 50%, transparent 100%)",
            }}
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />
          <h2 className="text-xl md:text-2xl font-display text-center text-foreground relative z-10">
            Marcas que atendemos<br />no decorrer dos anos:
          </h2>
        </div>
      </motion.div>

      {/* Client Logo Slider */}
      <div className="relative w-full overflow-hidden mb-20">
        <div className="flex animate-scroll-right" style={{ width: "fit-content" }}>
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-40 mx-4"
            >
              <img
                src={client.img}
                alt={client.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>

      <motion.h2
        className="text-2xl md:text-3xl font-display text-center mb-4 text-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Sustentar decisões estratégicas ao longo do tempo é o que separa marcas comuns de marcas fortes.
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground mb-16 text-lg font-display"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Como agência atuamos em duas principais frentes:
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Service 1 */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
            className="w-full rounded-lg mt-4"
          />
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
            className="w-full rounded-lg mt-4"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
