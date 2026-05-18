import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total, itemCount, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark-900/70 backdrop-blur-sm z-[60]"
              onClick={onClose}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md z-[70] bg-dark-200 border-l border-gold-400/10 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gold-400/10">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-gold-400" size={20} />
                  <h2 className="heading-serif text-xl text-white">Your Order</h2>
                  {itemCount > 0 && (
                    <span className="px-2 py-0.5 bg-gold-400 text-dark-900 text-xs font-semibold rounded-full">
                      {itemCount}
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Close cart"
                >
                  <X size={20} />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center px-6">
                  <ShoppingBag className="text-gray-700 mb-4" size={48} />
                  <p className="text-gray-500 text-center">Your cart is empty</p>
                  <p className="text-gray-600 text-sm text-center mt-1">
                    Add items from the menu to get started
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 border border-gold-400/30 text-gold-400 text-sm rounded hover:bg-gold-400/10 transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="flex items-center gap-4 p-4 glass gold-border rounded-lg"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`w-3 h-3 rounded-sm border ${
                                item.isVeg
                                  ? 'border-green-500 bg-green-500/20'
                                  : 'border-red-500 bg-red-500/20'
                              }`}
                            >
                              <span
                                className={`block w-1.5 h-1.5 rounded-full m-[2px] ${
                                  item.isVeg ? 'bg-green-500' : 'bg-red-500'
                                }`}
                              />
                            </span>
                            <h3 className="text-sm text-white truncate">{item.name}</h3>
                          </div>
                          <p className="text-gold-400 text-sm font-medium">₹{item.price}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded border border-gold-400/20 flex items-center justify-center text-gold-400 hover:bg-gold-400/10 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded border border-gold-400/20 flex items-center justify-center text-gold-400 hover:bg-gold-400/10 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <div className="text-right shrink-0">
                          <p className="text-white text-sm font-medium">₹{item.price * item.quantity}</p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-600 hover:text-red-400 transition-colors mt-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-6 border-t border-gold-400/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-white font-medium">₹{total}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">GST (5%)</span>
                      <span className="text-white font-medium">₹{Math.round(total * 0.05)}</span>
                    </div>
                    <div className="h-[1px] bg-gold-400/10" />
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-gold-400 text-xl font-semibold">
                        ₹{total + Math.round(total * 0.05)}
                      </span>
                    </div>

                    <button
                      onClick={() => setShowCheckout(true)}
                      className="w-full py-3.5 bg-gradient-gold text-dark-900 font-semibold rounded text-sm tracking-wide hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-300"
                    >
                      Proceed to Payment
                    </button>

                    <button
                      onClick={clearCart}
                      className="w-full py-2.5 border border-gold-400/20 text-gray-400 text-sm rounded hover:text-red-400 hover:border-red-400/30 transition-all duration-300"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onSuccess={() => {
          setShowCheckout(false);
          onClose();
          clearCart();
        }}
      />
    </>
  );
}
