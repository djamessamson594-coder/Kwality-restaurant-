import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureExperience from './components/SignatureExperience';
import About from './components/About';
import MenuSection from './components/MenuSection';
import FeaturedDishes from './components/FeaturedDishes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import OrderOnline from './components/OrderOnline';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';

function CartButton({ onClick }: { onClick: () => void }) {
  const { itemCount } = useCart();

  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg shadow-gold-400/30 transition-colors duration-300"
          aria-label="Open cart"
        >
          <ShoppingBag className="text-dark-900" size={22} />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center">
            {itemCount}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <Navbar />
      <main>
        <Hero />
        <SignatureExperience />
        <About />
        <MenuSection />
        <FeaturedDishes />
        <Gallery />
        <Testimonials />
        <OrderOnline />
        <Reservation />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartButton onClick={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
