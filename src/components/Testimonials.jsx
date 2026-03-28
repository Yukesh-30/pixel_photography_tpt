import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Good services by owner Hemanth. The way he captured our wedding was beyond words. Every emotion, every tiny detail was framed beautifully. Highly recommend Pixel Photography for any event in Chennai!",
    author: "Karthik & Priya",
    event: "Wedding",
  },
  {
    id: 2,
    text: "Hemanth made my maternity shoot so comfortable. The studio setup was absolutely stunning, and the final pictures look like they are straight out of a magazine.",
    author: "Ananya S.",
    event: "Maternity",
  },
  {
    id: 3,
    text: "Professional, punctual, and incredibly talented. Pixel Photography captured the essence of our traditional Brahmin wedding perfectly.",
    author: "Ramesh Iyer",
    event: "Traditional Wedding",
  },
  {
    id: 4,
    text: "The cinematic video they delivered for our reception was blockbuster quality. Hemanth and his team are simply the best in Tamil Nadu.",
    author: "Vikram & Divya",
    event: "Reception",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-black text-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="uppercase tracking-[0.2em] text-brand-gold text-sm">
              Client Stories
            </span>
            <div className="h-[1px] w-12 bg-brand-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif">Words of Love</h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap group">
        {/* We use two identical blocks that animate continuously to create an infinite scroll effect */}
        <div
          className="flex gap-8 animate-marquee hover:pause touch-pan-x"
          style={{ width: "max-content" }}
        >
          {/* Double map to ensure seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="w-[350px] md:w-[450px] p-8 bg-[#0a0a0a] border border-white/5 rounded-sm whitespace-normal shrink-0"
            >
              <Quote className="text-brand-gold/40 mb-4" size={32} />
              <p className="text-brand-beige/80 font-light leading-relaxed italic mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-serif text-lg">{testimonial.author}</h4>
                <span className="text-xs uppercase tracking-widest text-brand-gold">
                  {testimonial.event}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
