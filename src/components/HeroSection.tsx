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
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 py-20 overflow-hidden bg-background">

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glass banner */}
          <div className="absolute inset-0 -m-[2px] rounded-xl overflow-hidden" style={{ border: "1px solid hsla(0,0%,100%,0.08)" }}>
            {/* Grey noise background */}
            <div className="absolute inset-0 rounded-xl" style={{ background: "#1a1a1a" }} />
            <svg className="absolute inset-0 w-full h-full rounded-xl" style={{ opacity: 0.15 }}>
              <filter id="hero-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#hero-noise)" />
            </svg>

            {/* Radial light leaks */}
            <motion.div
              className="absolute w-[70%] h-[120%] pointer-events-none"
              style={{
                background: "radial-gradient(circle, hsla(220,80%,55%,0.4) 0%, transparent 70%)",
                filter: "blur(25px)",
                top: "-10%", left: "-15%",
              }}
              animate={{ x: ["0%", "30%", "5%", "25%", "0%"], y: ["0%", "15%", "-10%", "5%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[60%] h-[100%] pointer-events-none"
              style={{
                background: "radial-gradient(circle, hsla(320,70%,50%,0.35) 0%, transparent 70%)",
                filter: "blur(25px)",
                top: "0%", right: "-10%",
              }}
              animate={{ x: ["0%", "-25%", "10%", "-15%", "0%"], y: ["0%", "-12%", "8%", "-5%", "0%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[65%] h-[110%] pointer-events-none"
              style={{
                background: "radial-gradient(circle, hsla(30,90%,55%,0.3) 0%, transparent 70%)",
                filter: "blur(25px)",
                bottom: "-15%", left: "20%",
              }}
              animate={{ x: ["0%", "20%", "-10%", "15%", "0%"], y: ["0%", "-20%", "5%", "-10%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[50%] h-[90%] pointer-events-none"
              style={{
                background: "radial-gradient(circle, hsla(180,60%,50%,0.25) 0%, transparent 70%)",
                filter: "blur(25px)",
                top: "5%", right: "5%",
              }}
              animate={{ x: ["0%", "-15%", "20%", "-5%", "0%"], y: ["0%", "10%", "-15%", "8%", "0%"] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.img
            src={logo}
            alt="Studio 131"
            className="relative w-40 md:w-56"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
          className="text-sm tracking-widest uppercase mb-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Conteúdo, mídia & performance
        </motion.p>
        <motion.p
          className="max-w-xl text-center leading-relaxed text-sm md:text-base text-muted-foreground"
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
