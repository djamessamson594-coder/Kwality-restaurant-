import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Check, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CheckoutModal({ isOpen, onClose, onSuccess }: CheckoutModalProps) {
  const { total, itemCount } = useCart();
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const gst = Math.round(total * 0.05);
  const grandTotal = total + gst;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      setTimeout(() => {
        onSuccess();
        setStep('details');
        setFormData({ name: '', phone: '', email: '', address: '' });
      }, 3000);
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('details');
      setFormData({ name: '', phone: '', email: '', address: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-[80]"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg z-[90] bg-dark-200 border border-gold-400/10 rounded-lg overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between p-5 border-b border-gold-400/10">
              <div className="flex items-center gap-3">
                <CreditCard className="text-gold-400" size={20} />
                <h2 className="heading-serif text-lg text-white">Checkout</h2>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close checkout"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 border-b border-gold-400/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{itemCount} items</span>
                <span className="text-gold-400 font-semibold">₹{grandTotal}</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <AnimatePresence mode="wait">
                {step === 'details' && (
                  <motion.form
                    key="details"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleDetailsSubmit}
                    className="space-y-4"
                  >
                    <h3 className="heading-serif text-gold-400 mb-4">Delivery Details</h3>

                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-dark-400 border border-gold-400/10 rounded text-white text-sm focus:outline-none focus:border-gold-400/40 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                        className="w-full px-4 py-3 bg-dark-400 border border-gold-400/10 rounded text-white text-sm focus:outline-none focus:border-gold-400/40 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-3 bg-dark-400 border border-gold-400/10 rounded text-white text-sm focus:outline-none focus:border-gold-400/40 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 block">Delivery Address</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.address}
                        onChange={(e) => setFormData((p) => ({ ...p, address: e.target.value }))}
                        className="w-full px-4 py-3 bg-dark-400 border border-gold-400/10 rounded text-white text-sm focus:outline-none focus:border-gold-400/40 transition-all resize-none"
                        placeholder="Full delivery address"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-gold text-dark-900 font-semibold rounded text-sm tracking-wide hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-300 mt-2"
                    >
                      Continue to Payment
                    </button>
                  </motion.form>
                )}

                {step === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <h3 className="heading-serif text-gold-400 mb-4">Payment Method</h3>

                    <div className="space-y-3">
                      <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="w-full p-4 glass gold-border rounded-lg flex items-center gap-4 hover:border-gold-400/40 transition-all group"
                      >
                        <div className="w-10 h-10 rounded bg-gradient-gold flex items-center justify-center shrink-0">
                          <CreditCard className="text-dark-900" size={18} />
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-white text-sm font-medium">Pay Online</p>
                          <p className="text-gray-500 text-xs">Credit / Debit Card, UPI, Wallets</p>
                        </div>
                        {loading && <Loader2 className="text-gold-400 animate-spin" size={18} />}
                      </button>

                      <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="w-full p-4 glass gold-border rounded-lg flex items-center gap-4 hover:border-gold-400/40 transition-all group"
                      >
                        <div className="w-10 h-10 rounded bg-green-600 flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">UPI</span>
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-white text-sm font-medium">UPI Payment</p>
                          <p className="text-gray-500 text-xs">Google Pay, PhonePe, Paytm</p>
                        </div>
                        {loading && <Loader2 className="text-gold-400 animate-spin" size={18} />}
                      </button>

                      <button
                        onClick={handlePayment}
                        disabled={loading}
                        className="w-full p-4 glass gold-border rounded-lg flex items-center gap-4 hover:border-gold-400/40 transition-all group"
                      >
                        <div className="w-10 h-10 rounded bg-dark-50 flex items-center justify-center shrink-0 border border-gold-400/20">
                          <span className="text-gold-400 text-xs font-bold">COD</span>
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-white text-sm font-medium">Cash on Delivery</p>
                          <p className="text-gray-500 text-xs">Pay when your order arrives</p>
                        </div>
                        {loading && <Loader2 className="text-gold-400 animate-spin" size={18} />}
                      </button>
                    </div>

                    <button
                      onClick={() => setStep('details')}
                      className="w-full py-2.5 border border-gold-400/20 text-gray-400 text-sm rounded hover:text-gold-400 hover:border-gold-400/40 transition-all"
                    >
                      Back to Details
                    </button>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mb-6"
                    >
                      <Check className="text-dark-900" size={36} />
                    </motion.div>
                    <h3 className="heading-serif text-2xl text-white mb-2">Order Placed!</h3>
                    <p className="text-gray-400 text-sm text-center mb-2">
                      Your order of ₹{grandTotal} has been confirmed.
                    </p>
                    <p className="text-gray-500 text-xs text-center">
                      You will receive a confirmation on your phone shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
