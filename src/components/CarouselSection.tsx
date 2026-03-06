import { motion } from "framer-motion";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";
import carousel8 from "@/assets/carousel-8.jpg";

const images = [
  { src: carousel1, alt: "Projeto 1", className: "md:row-span-2" },
  { src: carousel2, alt: "Projeto 2", className: "" },
  { src: carousel3, alt: "Projeto 3", className: "" },
  { src: carousel4, alt: "Projeto 4", className: "md:row-span-2" },
  { src: carousel5, alt: "Projeto 5", className: "" },
  { src: carousel6, alt: "Projeto 6", className: "" },
  { src: carousel7, alt: "Projeto 7", className: "" },
  { src: carousel8, alt: "Projeto 8", className: "" },
];

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

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`overflow-hidden rounded-2xl ${img.className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
