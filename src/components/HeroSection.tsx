import logo from "@/assets/logo-studio131.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-20">
      <motion.div
        className="relative mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Glass banner */}
        <motion.div
          className="absolute inset-0 -m-6 rounded-2xl border border-border/40"
          style={{
            background: "linear-gradient(135deg, hsla(0,0%,60%,0.12) 0%, hsla(0,0%,80%,0.06) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px hsla(0,0%,0%,0.06), inset 0 1px 0 hsla(0,0%,100%,0.3)",
          }}
          animate={{
            boxShadow: [
              "0 8px 32px hsla(0,0%,0%,0.06), inset 0 1px 0 hsla(0,0%,100%,0.3)",
              "0 12px 40px hsla(0,0%,0%,0.1), inset 0 1px 0 hsla(0,0%,100%,0.4)",
              "0 8px 32px hsla(0,0%,0%,0.06), inset 0 1px 0 hsla(0,0%,100%,0.3)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={logo}
          alt="Studio 131"
          className="relative w-40 md:w-56 opacity-70"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
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
