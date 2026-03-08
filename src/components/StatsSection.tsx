import { motion } from "framer-motion";

const stats = [
  { value: "5x", label: "crescimento em 4 anos:", desc: "multiplicamos por 5 vezes nosso faturamento." },
  { value: "6", label: "dígitos de faturamento anual:", desc: "consistência em resultados expressivos." },
];

const StatsSection = () => {
  return (
    <section className="px-6 py-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[3fr_2fr] gap-6 items-stretch">
        {/* Left: YouTube video */}
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-primary aspect-[4/3] flex items-center justify-center p-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full pointer-events-none scale-[1.35]"
              src="https://www.youtube.com/embed/neFhIUipjLU?autoplay=1&mute=1&loop=1&playlist=neFhIUipjLU&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
              title="Studio 131 video"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
        </motion.div>

        {/* Right: Stats content */}
        <motion.div
          className="rounded-2xl bg-primary p-6 md:p-8 flex flex-col justify-center overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-3xl font-display text-primary-foreground mb-2">
            Aqui construímos<br />uma Jornada de<br />Ascensão:
          </h2>
          <p className="text-primary-foreground/60 font-body text-sm mb-5">
            ► Bebemos da nossa fonte;
          </p>

          <div className="space-y-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed font-body">
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
