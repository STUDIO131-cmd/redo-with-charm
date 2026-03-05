import logo from "@/assets/logo-studio131.png";
import { motion } from "framer-motion";

const VIDEO_URL = "https://drive.google.com/uc?export=download&id=1jEB0KGbMppQeKKlHUFecgpK2iywPixoA";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 py-20 overflow-hidden" style={{ backgroundColor: "hsl(0 0% 0%)" }}>
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src={VIDEO_URL}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glass banner */}
          <motion.div
            className="absolute inset-0 -m-6 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, hsla(0,0%,100%,0.08) 0%, hsla(0,0%,100%,0.03) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid hsla(0,0%,100%,0.12)",
              boxShadow: "0 8px 32px hsla(0,0%,0%,0.2), inset 0 1px 0 hsla(0,0%,100%,0.15)",
            }}
            animate={{
              boxShadow: [
                "0 8px 32px hsla(0,0%,0%,0.2), inset 0 1px 0 hsla(0,0%,100%,0.15)",
                "0 12px 40px hsla(0,0%,0%,0.3), inset 0 1px 0 hsla(0,0%,100%,0.25)",
                "0 8px 32px hsla(0,0%,0%,0.2), inset 0 1px 0 hsla(0,0%,100%,0.15)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={logo}
            alt="Studio 131"
            className="relative w-40 md:w-56 brightness-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl font-display mb-4"
          style={{ color: "hsla(0,0%,100%,0.85)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          .We are the team/
        </motion.h1>
        <motion.p
          className="text-sm tracking-widest uppercase mb-8"
          style={{ color: "hsla(0,0%,100%,0.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Conteúdo, mídia & performance
        </motion.p>
        <motion.p
          className="max-w-xl text-center leading-relaxed text-sm md:text-base"
          style={{ color: "hsla(0,0%,100%,0.55)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          O Studio 131 é uma agência criativa que apoia, constrói e acompanha decisões de marca e marketing de empresários que já operam mas não querem mais sustentar tudo sozinhos.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
