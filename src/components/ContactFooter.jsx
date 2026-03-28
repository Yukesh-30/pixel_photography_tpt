import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Camera, MessageCircle, PlayCircle } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#050505] text-brand-beige pt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        
        {/* Left Column - Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="uppercase tracking-[0.2em] text-brand-gold text-sm">
              Get In Touch
            </span>
            <div className="h-[1px] w-12 bg-brand-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Let's Create Magic</h2>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-gold mt-1" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Studio Location</h4>
                <p className="text-brand-beige/60 font-light text-sm">
                  Pixel Photography, GNT Road<br />
                  Karanodai, Chennai, Tamil Nadu 600067
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-brand-gold" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Call Us</h4>
                <a href="tel:08667698606" className="text-brand-beige/60 font-light hover:text-brand-gold transition-colors text-sm">
                  +91 086 676 98606
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-brand-gold" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href="mailto:hello@pixelphotography.in" className="text-brand-beige/60 font-light hover:text-brand-gold transition-colors text-sm">
                  hello@pixelphotography.in
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <a 
            href="https://www.google.com/maps/dir/13.248696,80.1544897/Pixel+Photography,+GNT+Rd,+Karanodai,+Tamil+Nadu+600067/@13.2471763,80.1551273,18z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a527d2c9091860d:0x22e9c997b3381f9!2m2!1d80.1579383!2d13.2459968?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-48 bg-neutral-900 border border-white/10 rounded-sm flex items-center justify-center relative overflow-hidden group mb-12"
          >
            <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors z-10"></div>
            {/* Mapbg simulation */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
              alt="Chennai Map"
            />
            <div className="relative z-20 flex flex-col items-center">
              <MapPin className="text-brand-gold mb-2" size={24} />
              <span className="text-xs tracking-widest uppercase bg-brand-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                Karanodai, Chennai
              </span>
            </div>
          </a>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0a0a0a] p-8 md:p-12 rounded-sm border border-white/5"
        >
          <h3 className="text-2xl font-serif mb-6">Inquire Now</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-beige/60">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors rounded-none placeholder:text-white/20 font-light text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-beige/60">Phone</label>
                <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors rounded-none placeholder:text-white/20 font-light text-sm" placeholder="+91 99999 99999" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-beige/60">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors rounded-none placeholder:text-white/20 font-light text-sm" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-brand-beige/60">Event Details</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-brand-gold transition-colors rounded-none placeholder:text-white/20 font-light text-sm resize-none" placeholder="Tell us about your event..."></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-brand-gold text-brand-black uppercase tracking-widest font-semibold text-sm rounded-sm hover:bg-brand-beige transition-colors"
            >
              Send Request
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-xl font-bold tracking-wider text-brand-beige mb-1">
              PIXEL
            </span>
            <p className="text-brand-beige/40 text-xs font-light">
              &copy; {new Date().getFullYear()} Pixel Photography. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-beige/40 hover:text-brand-gold transition-colors">
              <Camera size={20} />
            </a>
            <a href="#" className="text-brand-beige/40 hover:text-brand-gold transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-brand-beige/40 hover:text-brand-gold transition-colors">
              <PlayCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
