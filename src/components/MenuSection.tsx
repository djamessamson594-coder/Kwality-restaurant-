import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Leaf, Drumstick, Award, Plus, Check } from 'lucide-react';
import { menuData } from '../data/menu';
import { useCart } from '../context/CartContext';

type Category = 'starters' | 'mainCourse' | 'desserts' | 'beverages';

const categories: { key: Category; label: string }[] = [
  { key: 'starters', label: 'Starters' },
  { key: 'mainCourse', label: 'Main Course' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'beverages', label: 'Beverages' },
];

function MenuItemCard({ item, index }: { item: typeof menuData.starters[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const inCart = items.find((i) => i.id === item.id);

  const handleAdd = () => {
    addItem({ id: item.id, name: item.name, price: item.price, isVeg: item.isVeg });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group glass gold-border rounded-lg overflow-hidden card-lift"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium tracking-wide uppercase ${
              item.isVeg
                ? 'bg-green-600/90 text-white'
                : 'bg-red-600/90 text-white'
            }`}
          >
            {item.isVeg ? <Leaf size={10} /> : <Drumstick size={10} />}
            {item.isVeg ? 'Veg' : 'Non-Veg'}
          </span>
          {item.isChefRecommended && (
            <span className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium tracking-wide uppercase bg-gold-400/90 text-dark-900">
              <Award size={10} />
              Chef's Pick
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="heading-serif text-lg text-white group-hover:text-gold-400 transition-colors duration-300">
            {item.name}
          </h3>
          <span className="text-gold-400 font-semibold text-lg shrink-0">
            ₹{item.price}
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {item.description}
        </p>

        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
            justAdded || inCart
              ? 'bg-green-600/20 border border-green-500/30 text-green-400'
              : 'bg-gradient-gold text-dark-900 hover:shadow-lg hover:shadow-gold-400/20'
          }`}
        >
          {justAdded ? (
            <>
              <Check size={14} />
              Added!
            </>
          ) : inCart ? (
            <>
              <Check size={14} />
              In Cart ({inCart.quantity})
            </>
          ) : (
            <>
              <Plus size={14} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('starters');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const items = menuData[activeCategory];

  return (
    <section id="menu" className="section-padding bg-dark-600 noise-overlay">
      <div className="container-luxury relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400/70 mb-3 block">
            Culinary Excellence
          </span>
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-gradient-gold">Menu</span>
          </h2>
          <div className="divider-gold mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded text-sm tracking-wide transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-gradient-gold text-dark-900 font-medium shadow-lg shadow-gold-400/20'
                  : 'glass gold-border text-gray-400 hover:text-gold-400 hover:border-gold-400/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((item, i) => (
              <MenuItemCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
