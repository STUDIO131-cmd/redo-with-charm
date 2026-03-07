import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto text-center">
      <motion.p
        className="text-muted-foreground text-base md:text-lg leading-relaxed font-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Nossa base fica em <strong className="text-foreground">Catanduva (SP)</strong>,
        <br />onde operamos com estúdio e escritório próprios —
        <br />ambientes pensados para planejar, gravar, ajustar e acompanhar decisões de marca e marketing.
      </motion.p>
      <div className="w-16 h-px bg-muted-foreground/30 mx-auto my-6" />
      <motion.p
        className="text-muted-foreground text-base md:text-lg leading-relaxed font-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        É daqui que estruturamos projetos para clientes
        <br />em qualquer lugar do mundo, seja presencialmente
        <br />ou à distância, conforme o contexto de cada negócio.
      </motion.p>
    </section>
  );
};

export default LocationSection;
