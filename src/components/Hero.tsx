import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-slow-zoom">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Kwality Restaurant ambiance"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-gold-400 border border-gold-400/30 rounded-full">
            Est. Since Generations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="heading-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-semibold mb-4 leading-tight"
        >
          Kwality
          <span className="block text-gradient-gold">Restaurant</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-24 h-[1px] bg-gradient-gold mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg sm:text-xl text-gray-300 font-light max-w-xl mb-10 tracking-wide"
        >
          A Legacy of Taste & Royal Hospitality
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#menu"
            className="px-8 py-3.5 bg-gradient-gold text-dark-900 font-medium rounded text-sm tracking-wide hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-300 hover:scale-105"
          >
            Explore Menu
          </a>
          <a
            href="#reservation"
            className="px-8 py-3.5 border border-gold-400/40 text-gold-400 font-medium rounded text-sm tracking-wide hover:bg-gold-400/10 transition-all duration-300 hover:scale-105"
          >
            Book a Table
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#experience" className="flex flex-col items-center gap-2 text-gold-400/60 hover:text-gold-400 transition-colors">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
