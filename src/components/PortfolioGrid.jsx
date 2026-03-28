import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Weddings", "Maternity", "Newborn", "Portraits"];

  const projects = [
    {
      id: 1,
      title: "The Grand Mandapam",
      category: "Weddings",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      aspectRatio: "aspect-[4/5]",
    },
    {
      id: 2,
      title: "A Quiet Expectancy",
      category: "Maternity",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      aspectRatio: "aspect-square",
    },
    {
      id: 3,
      title: "First Breath",
      category: "Newborn",
      image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      aspectRatio: "aspect-[3/4]",
    },
    {
      id: 4,
      title: "Studio Elegance",
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      aspectRatio: "aspect-[4/3]",
    },
    {
      id: 5,
      title: "Muhurtham Colors",
      category: "Weddings",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      aspectRatio: "aspect-square",
    },
    {
      id: 6,
      title: "Generations Together",
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      aspectRatio: "aspect-[4/5]",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#050505] text-brand-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-0"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="uppercase tracking-[0.2em] text-brand-gold text-sm">
                Our Work
              </span>
              <div className="h-[1px] w-12 bg-brand-gold"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif">Selected Chapters</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-gold text-brand-black font-semibold"
                    : "bg-transparent text-brand-beige/60 hover:text-brand-beige border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry-style Bento Grid using CSS columns/flex */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${project.aspectRatio}`}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent md:bg-brand-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-8 md:justify-center md:pb-0 pointer-events-none">
                  <span className="text-xs tracking-widest uppercase text-brand-gold mb-2 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <h3 className="text-xl md:text-2xl font-serif">{project.title}</h3>
                  </div>
                  <div className="mt-4 md:mt-6 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-gold/50 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    <ArrowUpRight className="text-brand-gold" size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
