import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { featuredDishes } from '../data/menu';

export default function FeaturedDishes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-400">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400/70 mb-3 block">
            Chef's Selection
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Featured <span className="text-gradient-gold">Dishes</span>
          </h2>
          <div className="divider-gold mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-lg overflow-hidden gold-border card-lift"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-gold-400/90 text-dark-900 text-xs font-semibold tracking-wider uppercase rounded">
                    {dish.tag}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="heading-serif text-2xl text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
