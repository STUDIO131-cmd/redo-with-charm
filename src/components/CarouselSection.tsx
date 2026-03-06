import { motion } from "framer-motion";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";
import carousel8 from "@/assets/carousel-8.jpg";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8];

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

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {[...images, ...images].map((img, i) =>
          <div
            key={i}
            className="flex-shrink-0 w-64 md:w-80 mx-3">
            
              <img
              src={img}
              alt={`Projeto ${i % images.length + 1}`}
              className="w-full h-64 md:h-80 object-cover rounded-lg" />
            
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default CarouselSection;