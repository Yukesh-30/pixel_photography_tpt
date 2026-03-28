import { motion } from "framer-motion";
import { Camera, Film, Users } from "lucide-react";

const services = [
  {
    id: "candid",
    title: "Candid Expressions",
    description: "Capturing authentic, unposed moments that tell the true story of your special day. We focus on genuine emotion and pure joy.",
    icon: Camera,
  },
  {
    id: "cinematic",
    title: "Cinematic Films",
    description: "High-end videography showcasing your wedding like a motion picture. Using grand sweeps, emotional framing, and compelling storytelling.",
    icon: Film,
  },
  {
    id: "traditional",
    title: "Traditional Rituals",
    description: "Honoring cultural heritage and rituals with precision. Ensuring every age-old custom, from Kanyadaan to Muhurtham, is perfectly documented.",
    icon: Users,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-brand-black text-brand-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="uppercase tracking-[0.2em] text-brand-gold text-sm">
              Our Expertise
            </span>
            <div className="h-[1px] w-12 bg-brand-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif">Signature Services</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group bg-neutral-900/50 p-8 rounded-lg overflow-hidden border border-white/5 backdrop-blur-sm transition-colors duration-500 hover:border-brand-gold/50"
            >
              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/5 transition-colors duration-500 rounded-lg pointer-events-none blur-xl"></div>
              
              <div className="relative z-10">
                <div className="bg-brand-black border border-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-500">
                  <service.icon strokeWidth={1.5} size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-beige/70 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
