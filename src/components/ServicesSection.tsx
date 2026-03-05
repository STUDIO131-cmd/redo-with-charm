import { motion } from "framer-motion";
import servicePlano from "@/assets/service-plano.png";
import serviceCampanhas from "@/assets/service-campanhas.png";

const ServicesSection = () => {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
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
