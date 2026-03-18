import { useState, useEffect } from "react";
import logo from "@/assets/logo-studio131.png";
import { motion } from "framer-motion";

const FULL_TEXT = ".We are the team/";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < FULL_TEXT.length) {
        timeout = setTimeout(() => setDisplayText(FULL_TEXT.slice(0, displayText.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 60);
      } else {
        timeout = setTimeout(() => setIsTyping(true), 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 py-16 overflow-hidden bg-background">
      {/* Top grey gradient */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-muted/80 to-transparent z-0 pointer-events-none" />
      {/* Mid-grey fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-transparent z-0 pointer-events-none" />
      

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glass banner */}
          <div
            className="absolute inset-0 -m-[2px] rounded-xl overflow-hidden"
            style={{
              border: "1px solid hsla(0,0%,100%,0.15)",
              background: "linear-gradient(135deg, hsla(0,0%,100%,0.14) 0%, hsla(0,0%,100%,0.06) 50%, hsla(0,0%,100%,0.1) 100%)",
              boxShadow: "inset 0 1px 0 0 hsla(0,0%,100%,0.18), inset 0 -1px 0 0 hsla(0,0%,0%,0.15), 0 4px 20px -4px hsla(0,0%,0%,0.2)",
              backdropFilter: "blur(12px)",
            }}
          />
          <img
            src={logo}
            alt="Studio 131"
            className="relative w-40 md:w-56 brightness-0 opacity-90"
            fetchPriority="high"
          />
        </motion.div>
        <motion.h1
          className="text-3xl md:text-4xl font-display mb-4 text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {displayText}
          <span className="animate-blink">_</span>
        </motion.h1>
        <motion.p
          className="text-sm tracking-widest uppercase mb-8 text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Conteúdo, mídia & performance
        </motion.p>
        <motion.p
          className="max-w-xl text-center leading-relaxed text-base md:text-lg text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          O Studio 131 é uma agência criativa que assume, com o empresário,
          <br className="hidden md:block" />a construção e a condução da marca e do marketing.
        </motion.p>
      </div>
      {/* Smooth bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
