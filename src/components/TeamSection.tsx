import { motion } from "framer-motion";
import teamIgor from "@/assets/team-igor.png";
import teamRayani from "@/assets/team-rayani.png";
import teamVitor from "@/assets/team-vitor.png";
import teamHiggor from "@/assets/team-higgor.png";
import teamChristopher from "@/assets/team-christopher.png";
import teamVictor from "@/assets/team-victor.png";

const team = [
  { name: "Igor Gagliardi", role: "Estrategista de Marca & Marketing", img: teamIgor },
  { name: "Rayani Alberganti", role: "Social Media", img: teamRayani },
  { name: "Vitor Casaletti", role: "Produtor de Conteúdo", img: teamVitor },
  { name: "Higgor Trida", role: "Gestor de Tráfego", img: teamHiggor },
  { name: "Christopher Cardonha", role: "Editor de Conteúdo", img: teamChristopher },
  { name: "Victor Hugo", role: "Editor de Conteúdo", img: teamVictor },
];

const TeamSection = () => {
  return (
    <section className="bg-secondary px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs tracking-widest uppercase mb-2 text-center font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Meet our team
        </motion.p>
        <motion.h2
          className="text-2xl md:text-3xl font-display text-center mb-12 text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          O time 131:
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full aspect-[4/5] object-cover rounded-lg mb-4"
              />
              <h3 className="font-display text-base md:text-lg text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-xs font-body">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
