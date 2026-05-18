import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { galleryImages } from '../data/menu';
import { Eye } from 'lucide-react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="section-padding bg-dark-600 noise-overlay">
      <div className="container-luxury relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400/70 mb-3 block">
            Visual Feast
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-gradient-gold">Gallery</span>
          </h2>
          <div className="divider-gold mt-4" />
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-lg overflow-hidden break-inside-avoid gold-border cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/60 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-2">
                  <Eye className="text-gold-400" size={28} />
                  <span className="text-sm text-white heading-serif">{img.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
