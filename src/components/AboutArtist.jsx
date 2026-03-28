import { motion } from "framer-motion";

export default function AboutArtist() {
  return (
    <section id="about" className="py-24 bg-brand-black text-brand-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[3/4] md:aspect-square relative overflow-hidden rounded-sm group">
            <img
              src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Hemanth with Camera"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant overlay frame */}
            <div className="absolute inset-4 border border-brand-gold/30 z-10 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="uppercase tracking-[0.2em] text-brand-gold text-sm">
              The Artist
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Meet Hemanth
          </h2>
          <p className="text-brand-beige/70 font-light leading-relaxed mb-6">
            In the heart of Chennai, Pixel Photography was born out of a simple philosophy: every fleeting moment deserves to be timeless. For me, photography isn't just about clicking a button; it's about connecting with people, understanding their beautifully chaotic stories, and framing them into honest, heartfelt art.
          </p>
          <p className="text-brand-beige/70 font-light leading-relaxed mb-10">
            Whether it's the nervous joy before walking down the aisle, the quiet tenderness of a mother-to-be, or the grand celebration of a traditional Indian wedding, I pour my soul into making you feel seen, celebrated, and deeply understood.
          </p>
          
          <div className="flex flex-col mt-2">
            <span className="font-serif text-xl mb-1">Hemanth</span>
            <span className="text-xs text-brand-gold uppercase tracking-widest">Lead Photographer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
