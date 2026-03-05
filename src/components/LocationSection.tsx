import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto text-center">
      <motion.p
        className="text-muted-foreground text-sm md:text-base leading-relaxed font-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Nossa base fica em <strong className="text-foreground">Catanduva (SP)</strong>, onde operamos com estúdio e escritório próprios — ambientes pensados para planejar, gravar, ajustar e acompanhar decisões de marca e marketing.
      </motion.p>
      <motion.p
        className="text-muted-foreground text-sm md:text-base leading-relaxed font-body mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        É daqui que estruturamos projetos para clientes em qualquer lugar do mundo, seja presencialmente ou à distância, conforme o contexto de cada negócio.
      </motion.p>
    </section>
  );
};

export default LocationSection;
