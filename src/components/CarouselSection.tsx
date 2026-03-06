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

const CarouselSection = () => {
  return (
    <section className="py-10 px-4 md:px-8">
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

      <div className="max-w-7xl mx-auto space-y-3">
        {[row1, row2].map((row, rowIdx) =>
        <div key={rowIdx} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {row.map((img, i) =>
          <motion.div
            key={i}
            className="overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (rowIdx * 4 + i) * 0.05 }}>
            
                <img
              src={img}
              alt={`Projeto ${rowIdx * 4 + i + 1}`}
              className="w-full h-auto object-cover" />
            
              </motion.div>
          )}
          </div>
        )}
      </div>
    </section>);

};

export default CarouselSection;