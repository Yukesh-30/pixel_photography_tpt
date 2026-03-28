import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 300px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:08667698606"
          className="md:hidden fixed bottom-6 right-6 z-50 bg-brand-gold text-brand-black w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          aria-label="Call Now"
        >
          <Phone size={24} fill="currentColor" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
