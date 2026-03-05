import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { value: "5x", label: "crescimento em 4 anos", desc: "multiplicamos por 5 vezes nosso faturamento." },
    { value: "6", label: "dígitos de faturamento anual", desc: "consistência em resultados expressivos." },
    { icon: "►", label: "Instagram como canal principal", desc: "O pilar da nossa estratégia de marketing com baixo investimento em mídia paga." },
  ];

  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <motion.p
        className="text-center text-muted-foreground mb-10 font-body text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Aqui construímos uma jornada de ascensão:
        <br />► Bebemos da nossa fonte;
      </motion.p>
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {stat.value && (
              <p className="text-3xl font-display text-gold mb-2">
                {stat.value}
              </p>
            )}
            <p className="font-semibold text-foreground text-sm mb-1">{stat.label}</p>
            <p className="text-muted-foreground text-xs">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
