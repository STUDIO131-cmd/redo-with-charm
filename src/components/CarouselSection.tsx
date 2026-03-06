import { motion } from "framer-motion";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";
import carousel8 from "@/assets/carousel-8.jpg";

const row1 = [carousel1, carousel2, carousel3, carousel4];
const row2 = [carousel5, carousel6, carousel7, carousel8];

const sizes1 = ["w-72 h-56", "w-56 h-72", "w-80 h-60", "w-64 h-80"];
const sizes2 = ["w-64 h-72", "w-80 h-56", "w-56 h-64", "w-72 h-80"];

const CarouselSection = () => {
  return (
    <section className="py-10 overflow-hidden">
      <motion.h2
        className="text-2xl font-display text-center mb-4 px-6 text-foreground md:text-5xl leading-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        Aqui construímos uma<br />Jornada de Ascensão.
      </motion.h2>
      <motion.p
        className="text-center text-muted-foreground mb-12 font-display text-lg px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}>
        Esse é o nosso lema!
      </motion.p>

      <div className="space-y-4">
        {/* Row 1 - scrolls left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-left gap-4" style={{ width: "fit-content" }}>
            {[...row1, ...row1, ...row1].map((img, i) => (
              <div key={`r1-${i}`} className={`flex-shrink-0 ${sizes1[i % row1.length]}`}>
                <img
                  src={img}
                  alt={`Projeto ${(i % row1.length) + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-right gap-4" style={{ width: "fit-content" }}>
            {[...row2, ...row2, ...row2].map((img, i) => (
              <div key={`r2-${i}`} className={`flex-shrink-0 ${sizes2[i % row2.length]}`}>
                <img
                  src={img}
                  alt={`Projeto ${(i % row2.length) + 5}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;