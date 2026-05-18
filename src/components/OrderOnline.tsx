import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag, Smartphone } from 'lucide-react';

export default function OrderOnline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-400 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,168,83,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,168,83,0.1) 0%, transparent 50%)',
        }} />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass gold-border rounded-lg p-8 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

          <div className="flex items-center justify-center gap-3 mb-6">
            <ShoppingBag className="text-gold-400" size={32} />
          </div>

          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Order <span className="text-gradient-gold">Online</span>
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Enjoy Kwality's signature dishes from the comfort of your home. Place your order via WhatsApp and we'll have it ready for pickup or delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hi%20Kwality%20Restaurant%2C%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-gold text-dark-900 font-medium rounded text-sm tracking-wide hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-300 hover:scale-105"
            >
              <Smartphone size={16} />
              Order via WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gold-400/40 text-gold-400 font-medium rounded text-sm tracking-wide hover:bg-gold-400/10 transition-all duration-300"
            >
              Call to Order
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
