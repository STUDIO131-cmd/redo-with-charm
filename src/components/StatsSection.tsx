import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";

const images = [carousel1, carousel2, carousel3, carousel4];

const stats = [
  { value: "5x", label: "crescimento em 4 anos:", desc: "multiplicamos por 5 vezes nosso faturamento." },
  { value: "6", label: "dígitos de faturamento anual:", desc: "consistência em resultados expressivos." },
  { value: "►", label: "Instagram como canal principal:", desc: "O pilar da nossa estratégia de marketing com baixo investimento em mídia paga." },
];

const StatsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Photo slider with glass effect */}
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-primary min-h-[400px] md:min-h-[500px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`Projeto ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          {/* Glass bar overlay */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 h-full w-[35%]"
              style={{
                background: "linear-gradient(90deg, transparent 0%, hsla(0,0%,100%,0.12) 50%, transparent 100%)",
              }}
              animate={{ x: ["-100%", "400%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            />
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-6" : "bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Stats content */}
        <motion.div
          className="rounded-2xl bg-primary p-8 md:p-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-display text-primary-foreground mb-2">
            Aqui construímos uma jornada de ascensão:
          </h2>
          <p className="text-primary-foreground/60 font-body text-sm mb-8">
            ► Bebemos da nossa fonte;
          </p>

          <div className="space-y-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <p className="text-primary-foreground/70 text-sm font-body">
                  <span className="text-accent mr-1">❖</span>
                  <span className="text-accent font-semibold">
                    {stat.value} {stat.label}
                  </span>{" "}
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
