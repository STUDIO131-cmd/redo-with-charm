import logo from "@/assets/logo-studio131.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-20">
      <motion.img
        src={logo}
        alt="Studio 131"
        className="w-40 md:w-56 mb-10 opacity-70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-3xl md:text-4xl font-display text-muted-foreground mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        .We are the team/
      </motion.h1>
      <motion.p
        className="text-muted-foreground text-sm tracking-widest uppercase mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Conteúdo, mídia & performance
      </motion.p>
      <motion.p
        className="max-w-xl text-center text-muted-foreground leading-relaxed text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        O Studio 131 é uma agência criativa que apoia, constrói e acompanha decisões de marca e marketing de empresários que já operam mas não querem mais sustentar tudo sozinhos.
      </motion.p>
    </section>
  );
};

export default HeroSection;
