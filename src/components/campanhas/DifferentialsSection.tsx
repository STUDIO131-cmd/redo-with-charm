import { motion } from "framer-motion";
import diffTeam from "@/assets/campanhas/diff-team.png";
import diffOrganic from "@/assets/campanhas/diff-organic.png";
import diffStudio from "@/assets/campanhas/diff-studio.png";

const differentials = [
  { image: diffTeam, title: "Trabalho em equipe", description: "Nossa atuação conta com um time completo: estrategista de marca, gestor de tráfego, produtor de conteúdo, social media e editores dedicados." },
  { image: diffOrganic, title: "Resultados sólidos em tráfego orgânico", description: "Incentivamos e estudamos a fundo a geração de demanda através de conteúdos orgânicos, reduzindo o investimento em mídia paga." },
  { image: diffStudio, title: "Atendemos em estúdio ou no local indicado", description: "Nossa base fica em Catanduva (SP) com escritório e estúdio próprio. Realizamos campanhas em estúdio ou indicamos locais conforme escopo do projeto." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20" id="conteudo">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl text-center text-white/80 mb-8 md:mb-12" style={{ fontFamily: "var(--font-heading)" }}>
          Como funciona na prática:
        </h2>
        <div className="flex flex-col gap-6 md:gap-8 max-w-3xl mx-auto">
          {differentials.map((diff, i) => (
            <motion.div key={i} className="rounded-xl overflow-hidden bg-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <div className="w-full bg-black/50">
                <img src={diff.image} alt={diff.title} className="w-full object-contain" loading="lazy" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{diff.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
