import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/menu';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-dark-400">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400/70 mb-3 block">
            What Our Guests Say
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Guest <span className="text-gradient-gold">Reviews</span>
          </h2>
          <div className="divider-gold mt-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass gold-border rounded-lg p-8 md:p-12 text-center"
            >
              <Quote className="text-gold-400/30 mx-auto mb-6" size={48} />

              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonials[current].rating ? 'text-gold-400 fill-gold-400' : 'text-gray-600'}
                  />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-dark-900 font-semibold text-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">{testimonials[current].name}</p>
                  <p className="text-xs text-gray-500">{testimonials[current].date}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-1">
                <svg className="w-4 h-4 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.71c.39-.39.39-1.02 0-1.41l-4.95-4.95c-.39-.39-1.02-.39-1.41 0l-9.8 9.8c-.39.39-.39 1.02 0 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l9.8-9.8z" />
                </svg>
                <span className="text-xs text-gray-500">Verified via Google Reviews</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-400/10 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold-400 w-6' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 hover:bg-gold-400/10 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
