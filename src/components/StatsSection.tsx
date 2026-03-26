import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "5x", label: "crescimento em 4 anos:", desc: "multiplicamos por 5 vezes nosso faturamento." },
  { value: "", label: "Instagram como canal principal:", desc: "O pilar da nossa estratégia de marketing com baixo investimento em mídia paga. Forte movimento orgânico e estratégia comercial interna." },
];

const YOUTUBE_URL = "https://www.youtube.com/embed/neFhIUipjLU?autoplay=1&mute=1&loop=1&playlist=neFhIUipjLU&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3";

const YouTubeEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const iframe = document.createElement("iframe");
    iframe.src = YOUTUBE_URL;
    iframe.title = "Studio 131 video";
    iframe.allow = "autoplay; encrypted-media";
    iframe.frameBorder = "0";
    iframe.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;transform:scale(1.35);border:0;";
    container.appendChild(iframe);
    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return <div ref={containerRef} className="relative w-full h-full rounded-xl overflow-hidden" />;
};

const StatsSection = () => {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[3fr_2fr] gap-6 items-stretch">
        {/* Left: YouTube video */}
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-primary aspect-[4/3] flex items-center justify-center p-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <YouTubeEmbed />
        </motion.div>

        {/* Right: Stats content */}
        <motion.div
          className="rounded-2xl bg-primary p-6 md:p-8 flex flex-col justify-center overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-3xl text-primary-foreground mb-2 font-light" style={{ fontStretch: "expanded" }}>
            Aqui construímos<br />uma Jornada de<br />Ascensão:
          </h2>
          <p className="text-primary-foreground/60 text-sm mb-5">
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
