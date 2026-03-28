import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "About Artist", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-black/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-wider text-brand-beige">
            PIXEL
          </span>
          <span className="text-xs tracking-[0.3em] font-light text-brand-gold uppercase mt-[-2px]">
            Photography
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-brand-beige hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-brand-gold text-brand-black font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-brand-beige transition-colors"
          >
            Book Now
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-beige"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-md py-6 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest text-brand-beige hover:text-brand-gold transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-6 py-3 bg-brand-gold text-brand-black font-semibold text-center text-sm uppercase tracking-widest rounded-sm"
          >
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
}
