import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, ArrowRight, Instagram, Twitter, Facebook, ChevronRight, Search, User, Star, StarHalf, Plus, Eye, ScanFace, CheckCircle2, CreditCard, Truck, ShieldCheck, Camera, RefreshCw, Move, ArrowLeftRight } from 'lucide-react';
import { PRODUCTS } from './constants';
import { Product, CartItem, Review } from './types';

// --- Components ---

const StarRating: React.FC<{ rating: number; size?: number }> = ({ rating, size = 16 }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`${
            star <= rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-ink/10'
          }`}
        />
      ))}
    </div>
  );
};

const Navbar: React.FC<{ cartCount: number; onOpenCart: () => void }> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-paper/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-brand-gold transition-colors">Shop</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Collections</a>
          <a href="#" className="hover:text-brand-gold transition-colors">About</a>
        </div>

        <div className="flex-1 flex justify-start md:justify-center">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-brand-gold rounded-full flex items-center justify-center group-hover:bg-brand-gold transition-all duration-500">
              <span className="text-brand-gold group-hover:text-brand-paper font-serif text-xl md:text-2xl font-bold">A</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-serif tracking-[0.15em] font-light">AYNOOR</h1>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden md:block hover:text-brand-gold transition-colors"><Search size={18} /></button>
          <button className="hidden md:block hover:text-brand-gold transition-colors"><User size={18} /></button>
          <button onClick={onOpenCart} className="relative hover:text-brand-gold transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-brand-ink">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-paper border-t border-brand-ink/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-xs uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-brand-gold">Shop All</a>
              <a href="#" className="hover:text-brand-gold">Sunglasses</a>
              <a href="#" className="hover:text-brand-gold">Optical</a>
              <a href="#" className="hover:text-brand-gold">Limited Edition</a>
              <a href="#" className="hover:text-brand-gold">Our Story</a>
              <div className="pt-6 border-t border-brand-ink/5 flex gap-6">
                <Search size={20} />
                <User size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-ink">
    <div className="absolute inset-0 opacity-40">
      <img 
        src="https://images.unsplash.com/photo-1511499767390-a7335958beba?auto=format&fit=crop&q=80&w=2000" 
        alt="Hero Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 text-center text-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="mb-8 flex justify-center"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-brand-gold rounded-full flex items-center justify-center">
          <span className="text-brand-gold font-serif text-4xl md:text-5xl font-bold">A</span>
        </div>
      </motion.div>
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="block text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 font-bold text-brand-gold"
      >
        Exquisite Italian Eyewear
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-8xl lg:text-9xl font-serif mb-10 leading-none tracking-tight"
      >
        AYNOOR <br /> <span className="italic font-light opacity-80">Lumina</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <button className="group flex items-center gap-3 mx-auto bg-brand-gold text-brand-ink px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-white transition-all duration-500 uppercase text-[10px] md:text-xs tracking-[0.2em] font-black">
          Shop The Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
      <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-brand-gold/50"></div>
      <span className="text-[9px] uppercase tracking-[0.3em] text-brand-gold/50 vertical-rl">Discover</span>
    </div>
  </section>
);

const ProductCard: React.FC<{ 
  product: Product; 
  onAddToCart: (p: Product) => void; 
  onClick: (p: Product) => void;
  onTryOn: (p: Product) => void;
  isComparing: boolean;
  onToggleCompare: (id: string) => void;
}> = ({ product, onAddToCart, onClick, onTryOn, isComparing, onToggleCompare }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onClick={() => onClick(product)}
    className="group cursor-pointer"
  >
    <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6 border border-brand-ink/5">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-ink/5 group-hover:bg-transparent transition-colors duration-500"></div>
      <div className="absolute bottom-6 left-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-center gap-4">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-12 h-12 bg-brand-ink text-white rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors shadow-lg"
          title="Add to Bag"
        >
          <Plus size={20} />
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onTryOn(product);
          }}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm text-brand-ink rounded-full flex items-center justify-center hover:bg-brand-ink hover:text-white transition-colors border border-brand-ink/10 shadow-lg"
          title="Virtual Try-on"
        >
          <ScanFace size={20} />
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(product.id);
          }}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg border ${
            isComparing 
              ? 'bg-brand-gold text-brand-ink border-brand-gold' 
              : 'bg-white/90 backdrop-blur-sm text-brand-ink border-brand-ink/10 hover:bg-brand-ink hover:text-white'
          }`}
          title={isComparing ? "Remove from Compare" : "Add to Compare"}
        >
          <ArrowLeftRight size={20} />
        </button>
      </div>
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <span className="bg-brand-ink text-brand-gold px-3 py-1 text-[9px] uppercase tracking-widest font-black">
          {product.category}
        </span>
        {isComparing && (
          <span className="bg-brand-gold text-brand-ink px-3 py-1 text-[9px] uppercase tracking-widest font-black flex items-center gap-1">
            <CheckCircle2 size={10} /> Comparing
          </span>
        )}
      </div>
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-serif mb-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
        <p className="text-[10px] text-brand-ink/40 uppercase tracking-[0.15em] font-bold">{product.color}</p>
      </div>
      <p className="font-serif text-lg text-brand-gold">${product.price}</p>
    </div>
  </motion.div>
);

const CartDrawer: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, q: number) => void;
}> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-ink/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-paper z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 md:p-8 flex items-center justify-between border-b border-brand-ink/5">
              <h2 className="text-2xl font-serif">Your Selection ({items.length})</h2>
              <button onClick={onClose} className="p-2 hover:bg-brand-ink/5 rounded-full transition-colors text-brand-ink">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 border border-brand-ink/10 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={32} className="text-brand-ink/20" />
                  </div>
                  <p className="text-brand-ink/40 uppercase tracking-[0.2em] text-[10px] font-bold">Your bag is empty</p>
                  <button onClick={onClose} className="mt-6 text-brand-gold uppercase text-[10px] font-black tracking-[0.2em] hover:underline">Start Shopping</button>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-6">
                      <div className="w-20 h-24 bg-white overflow-hidden flex-shrink-0 border border-brand-ink/5">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-serif text-lg">{item.name}</h3>
                            <button onClick={() => onRemove(item.id)} className="text-brand-ink/20 hover:text-brand-ink transition-colors">
                              <X size={14} />
                            </button>
                          </div>
                          <p className="text-[9px] uppercase tracking-widest text-brand-ink/40 mb-4 font-bold">{item.color}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border border-brand-ink/10 rounded-full px-3 py-1">
                              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="text-sm font-bold px-2">-</button>
                              <span className="mx-3 text-[10px] font-black">{item.quantity}</span>
                              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="text-sm font-bold px-2">+</button>
                            </div>
                          </div>
                        </div>
                        <p className="font-serif text-brand-gold">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 md:p-8 bg-white border-t border-brand-ink/5">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-ink/30">Subtotal</span>
                  <span className="text-2xl font-serif text-brand-gold">${total}</span>
                </div>
                <button 
                  onClick={() => {
                    onClose();
                    (window as any).startCheckout();
                  }}
                  className="w-full bg-brand-ink text-white py-5 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-brand-gold transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Complete Purchase <ArrowRight size={16} />
                </button>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                  <p className="text-[8px] text-center text-brand-ink/40 uppercase tracking-[0.2em] font-bold">Complimentary Express Shipping Included</p>
                  <div className="w-1 h-1 bg-brand-gold rounded-full"></div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProductDetail: React.FC<{ 
  product: Product; 
  onClose: () => void; 
  onAddToCart: (p: Product) => void;
  onAddReview: (productId: string, review: Omit<Review, 'id' | 'date'>) => void;
  onTryOn: (p: Product) => void;
}> = ({ product, onClose, onAddToCart, onAddReview, onTryOn }) => {
  const [newReview, setNewReview] = useState({ userName: '', rating: 5, comment: '' });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.userName || !newReview.comment) return;
    onAddReview(product.id, newReview);
    setNewReview({ userName: '', rating: 5, comment: '' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-ink/80 backdrop-blur-md"
      />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-brand-paper rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-brand-paper/50 backdrop-blur-md rounded-full hover:bg-brand-paper transition-colors"
        >
          <X size={24} />
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-white relative group">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={() => onTryOn(product)}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-brand-ink/80 backdrop-blur-md text-white px-8 py-4 rounded-full flex items-center gap-3 text-[10px] uppercase tracking-widest font-black hover:bg-brand-gold transition-all duration-500 opacity-0 group-hover:opacity-100"
          >
            <ScanFace size={18} /> Virtual Try-on
          </button>
        </div>

        {/* Product Info & Reviews */}
        <div className="w-full md:w-1/2 flex flex-col overflow-y-auto no-scrollbar">
          <div className="p-8 md:p-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black mb-4 block">
              {product.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h2>
            <p className="text-2xl font-serif text-brand-gold mb-8">${product.price}</p>
            
            <p className="text-brand-ink/70 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-brand-ink/60">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  {detail}
                </div>
              ))}
            </div>

            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-brand-ink text-white py-5 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-brand-gold transition-all duration-500 mb-12"
            >
              Add to Bag
            </button>

            {/* Reviews Section */}
            <div className="border-t border-brand-ink/5 pt-12">
              <h3 className="text-2xl font-serif mb-8">Customer Reviews</h3>
              
              <div className="space-y-8 mb-12">
                {product.reviews.length === 0 ? (
                  <p className="text-brand-ink/40 italic text-sm">No reviews yet. Be the first to share your thoughts.</p>
                ) : (
                  product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-brand-ink/5 pb-6 last:border-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-xs uppercase tracking-widest">{review.userName}</span>
                        <span className="text-[10px] text-brand-ink/30 font-bold">{review.date}</span>
                      </div>
                      <div className="mb-3">
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="text-sm text-brand-ink/70 leading-relaxed">{review.comment}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Review Form */}
              <div className="bg-brand-ink/5 p-6 rounded-xl">
                <h4 className="text-sm uppercase tracking-[0.2em] font-black mb-6">Write a Review</h4>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      value={newReview.userName}
                      onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                      className="bg-white border border-brand-ink/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-brand-gold transition-colors"
                      required
                    />
                    <div className="flex items-center gap-3 bg-white border border-brand-ink/10 rounded-lg px-4 py-3">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Rating</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button 
                            key={num}
                            type="button"
                            onClick={() => setNewReview({ ...newReview, rating: num })}
                            className="focus:outline-none"
                          >
                            <Star 
                              size={14} 
                              className={`${num <= newReview.rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-ink/10'}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <textarea 
                    placeholder="Share your experience..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full bg-white border border-brand-ink/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-brand-gold transition-colors h-24 resize-none"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full bg-brand-gold text-brand-ink py-4 text-[10px] uppercase tracking-[0.2em] font-black hover:bg-brand-ink hover:text-white transition-all duration-500"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Checkout: React.FC<{ 
  items: CartItem[]; 
  onClose: () => void; 
  onComplete: () => void;
}> = ({ items, onClose, onComplete }) => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'shipping') setStep('payment');
    else if (step === 'payment') {
      // Simulate processing
      setTimeout(() => setStep('success'), 1500);
    }
  };

  if (step === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[120] bg-brand-paper flex items-center justify-center p-6"
      >
        <div className="max-w-md w-full text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200 }}
            className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 size={48} className="text-brand-gold" />
          </motion.div>
          <h2 className="text-4xl font-serif mb-4 text-brand-ink">Order Confirmed</h2>
          <p className="text-brand-ink/60 mb-10 leading-relaxed font-light">
            Thank you for choosing Aynoor. Your handcrafted selection is being prepared for shipment. You will receive a confirmation email shortly.
          </p>
          <div className="bg-brand-ink/5 p-6 rounded-2xl mb-10 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Order Number</span>
              <span className="text-[10px] uppercase tracking-widest font-black text-brand-ink">#AYN-2026-8842</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">Estimated Delivery</span>
              <span className="text-[10px] uppercase tracking-widest font-black text-brand-ink">3-5 Business Days</span>
            </div>
          </div>
          <button 
            onClick={onComplete}
            className="w-full bg-brand-ink text-white py-5 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-brand-gold transition-all duration-500"
          >
            Return to Maison
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[110] bg-brand-paper flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Side: Form */}
      <div className="flex-1 overflow-y-auto p-6 md:p-16 lg:p-24 no-scrollbar">
        <div className="max-w-xl mx-auto">
          <button onClick={onClose} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-brand-ink/40 hover:text-brand-ink transition-colors mb-12">
            <ChevronRight size={14} className="rotate-180" /> Back to Selection
          </button>

          <div className="flex items-center gap-4 mb-12">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${step === 'shipping' ? 'bg-brand-gold text-brand-ink' : 'bg-brand-ink text-white'}`}>
              {step === 'shipping' ? '1' : <CheckCircle2 size={14} />}
            </div>
            <div className="h-[1px] w-12 bg-brand-ink/10"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${step === 'payment' ? 'bg-brand-gold text-brand-ink' : 'bg-brand-ink/5 text-brand-ink/20'}`}>
              2
            </div>
            <h2 className="text-2xl font-serif ml-4">{step === 'shipping' ? 'Shipping Details' : 'Payment Method'}</h2>
          </div>

          <form onSubmit={handleNext} className="space-y-8">
            {step === 'shipping' ? (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-ink/40">Contact Information</h3>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    required
                    className="w-full bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-ink/40">Shipping Address</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" required className="bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                    <input type="text" placeholder="Last Name" required className="bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                  <input type="text" placeholder="Address" required className="w-full bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="City" required className="bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                    <input type="text" placeholder="ZIP / Postal Code" required className="bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-brand-ink text-white p-8 rounded-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <CreditCard size={32} className="text-brand-gold" />
                      <div className="text-[10px] uppercase tracking-widest font-black opacity-40 italic">Aynoor Privilege</div>
                    </div>
                    <div className="text-xl tracking-[0.2em] font-mono mb-8">•••• •••• •••• 4242</div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Card Holder</div>
                        <div className="text-xs uppercase tracking-widest font-bold">Aynoor Client</div>
                      </div>
                      <div>
                        <div className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Expires</div>
                        <div className="text-xs font-bold">12/28</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div className="space-y-6">
                  <input type="text" placeholder="Card Number" required className="w-full bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                  <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="MM/YY" required className="bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                    <input type="text" placeholder="CVV" required className="bg-transparent border-b border-brand-ink/10 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors" />
                  </div>
                </div>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-brand-ink text-white py-5 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-brand-gold transition-all duration-500 flex items-center justify-center gap-3"
            >
              {step === 'shipping' ? 'Continue to Payment' : `Pay $${total}`} <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-brand-ink/5">
            <div className="text-center">
              <Truck size={20} className="mx-auto mb-3 text-brand-gold/60" />
              <p className="text-[8px] uppercase tracking-widest font-bold text-brand-ink/40">Express Shipping</p>
            </div>
            <div className="text-center">
              <ShieldCheck size={20} className="mx-auto mb-3 text-brand-gold/60" />
              <p className="text-[8px] uppercase tracking-widest font-bold text-brand-ink/40">Secure Payment</p>
            </div>
            <div className="text-center">
              <CheckCircle2 size={20} className="mx-auto mb-3 text-brand-gold/60" />
              <p className="text-[8px] uppercase tracking-widest font-bold text-brand-ink/40">2 Year Warranty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Summary */}
      <div className="hidden lg:block w-[450px] bg-brand-ink/5 p-16 border-l border-brand-ink/5">
        <h3 className="text-xl font-serif mb-12">Order Summary</h3>
        <div className="space-y-8 mb-12">
          {items.map(item => (
            <div key={item.id} className="flex gap-6">
              <div className="w-20 h-24 bg-white border border-brand-ink/5 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="font-serif text-lg">{item.name}</h4>
                <p className="text-[9px] uppercase tracking-widest text-brand-ink/40 font-bold mb-2">{item.color} × {item.quantity}</p>
                <p className="font-serif text-brand-gold">${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-8 border-t border-brand-ink/10">
          <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-brand-ink/40">
            <span>Shipping</span>
            <span className="text-brand-gold">Complimentary</span>
          </div>
          <div className="flex justify-between text-xl font-serif pt-4 border-t border-brand-ink/10">
            <span>Total</span>
            <span className="text-brand-gold">${total}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VirtualTryOn: React.FC<{ 
  product: Product; 
  onClose: () => void; 
}> = ({ product, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    async function setupCamera() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError('Your browser does not support camera access.');
        return;
      }

      try {
        // Try with preferred 'user' facing mode first
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'user' } 
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err: any) {
        console.error('Camera error (user mode):', err);
        
        // If 'user' mode fails (e.g. on desktop without specified facing mode), try generic video
        try {
          const fallbackStream = await navigator.mediaDevices.getUserMedia({ video: true });
          setStream(fallbackStream);
          if (videoRef.current) {
            videoRef.current.srcObject = fallbackStream;
          }
        } catch (fallbackErr: any) {
          console.error('Camera error (fallback):', fallbackErr);
          if (fallbackErr.name === 'NotFoundError' || fallbackErr.name === 'DevicesNotFoundError') {
            setError('No camera device was found on your system.');
          } else if (fallbackErr.name === 'NotAllowedError' || fallbackErr.name === 'PermissionDeniedError') {
            setError('Camera access was denied. Please enable permissions in your browser settings.');
          } else {
            setError('An error occurred while accessing the camera. Please ensure it is connected and not in use by another app.');
          }
        }
      }
    }
    setupCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-brand-ink flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full max-w-4xl max-h-[80vh] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold/20">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="w-full h-full object-cover scale-x-[-1]"
        />

        {/* Overlay Glasses */}
        {!error && stream && (
          <motion.div 
            drag
            dragMomentum={false}
            onDrag={(e, info) => setPosition({ x: info.point.x, y: info.point.y })}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-move z-10"
            style={{ scale }}
          >
            <img 
              src={product.image} 
              alt="Try-on" 
              className="w-64 md:w-80 h-auto object-contain drop-shadow-2xl mix-blend-multiply opacity-90"
              style={{ filter: 'contrast(1.1) brightness(1.1)' }}
            />
          </motion.div>
        )}

        {/* Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-brand-paper/10 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10">
          <div className="flex items-center gap-4">
            <span className="text-[8px] uppercase tracking-widest font-black text-white/40">Scale</span>
            <input 
              type="range" 
              min="0.5" 
              max="2" 
              step="0.01" 
              value={scale} 
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-32 accent-brand-gold"
            />
          </div>
          <div className="w-[1px] h-4 bg-white/10"></div>
          <button 
            onClick={() => { setScale(1); setPosition({ x: 0, y: 0 }); }}
            className="text-white/60 hover:text-white transition-colors"
            title="Reset"
          >
            <RefreshCw size={18} />
          </button>
        </div>

        {/* Header */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
              <ScanFace size={20} className="text-brand-ink" />
            </div>
            <div>
              <h3 className="text-white font-serif text-lg leading-none mb-1">{product.name}</h3>
              <p className="text-white/40 text-[8px] uppercase tracking-widest font-black">Virtual Try-on Active</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {error && (
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center bg-brand-ink/90 backdrop-blur-sm">
            <div className="max-w-sm">
              <Camera size={48} className="text-brand-gold mx-auto mb-6 opacity-20" />
              <p className="text-white/60 text-sm leading-relaxed mb-8">{error}</p>
              <button 
                onClick={onClose}
                className="bg-brand-gold text-brand-ink px-8 py-4 rounded-full text-[10px] uppercase tracking-widest font-black hover:bg-white transition-colors"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ComparisonDrawer: React.FC<{ 
  selectedIds: string[]; 
  products: Product[]; 
  onRemove: (id: string) => void;
  onClear: () => void;
  onCompare: () => void;
}> = ({ selectedIds, products, onRemove, onClear, onCompare }) => {
  const selectedProducts = products.filter(p => selectedIds.includes(p.id));

  return (
    <AnimatePresence>
      {selectedIds.length > 0 && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] w-full max-w-2xl px-4"
        >
          <div className="bg-brand-ink text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-6 border border-brand-gold/20 backdrop-blur-xl">
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1">
              {selectedProducts.map(product => (
                <div key={product.id} className="relative group flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden border border-white/10">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <button 
                    onClick={() => onRemove(product.id)}
                    className="absolute -top-1 -right-1 bg-brand-gold text-brand-ink rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
              {selectedIds.length < 3 && (
                <div className="w-12 h-12 border border-white/10 border-dashed rounded-lg flex items-center justify-center text-white/20">
                  <Plus size={16} />
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-[10px] uppercase tracking-widest font-black text-brand-gold">{selectedIds.length} Selected</p>
                <button onClick={onClear} className="text-[8px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">Clear All</button>
              </div>
              <button 
                onClick={onCompare}
                disabled={selectedIds.length < 2}
                className={`px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-black transition-all ${
                  selectedIds.length >= 2 
                    ? 'bg-brand-gold text-brand-ink hover:bg-white' 
                    : 'bg-white/5 text-white/20 cursor-not-allowed'
                }`}
              >
                Compare Now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ComparisonModal: React.FC<{ 
  selectedIds: string[]; 
  products: Product[]; 
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}> = ({ selectedIds, products, onClose, onAddToCart }) => {
  const selectedProducts = products.filter(p => selectedIds.includes(p.id));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[160] flex items-center justify-center p-4 md:p-8"
    >
      <div onClick={onClose} className="absolute inset-0 bg-brand-ink/90 backdrop-blur-xl" />
      
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-6xl bg-brand-paper rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <div className="p-6 md:p-8 border-b border-brand-ink/5 flex justify-between items-center bg-white">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black mb-2 block">Maison Aynoor</span>
            <h2 className="text-2xl md:text-3xl font-serif">Product Comparison</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-brand-ink/5 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-x-auto p-6 md:p-12 no-scrollbar">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 min-w-[800px]">
            {/* Labels Column */}
            <div className="flex flex-col gap-12 pt-[240px]">
              <div className="h-20 flex items-center border-b border-brand-ink/5">
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-ink/40">Price</span>
              </div>
              <div className="h-20 flex items-center border-b border-brand-ink/5">
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-ink/40">Category</span>
              </div>
              <div className="h-20 flex items-center border-b border-brand-ink/5">
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-ink/40">Material</span>
              </div>
              <div className="h-20 flex items-center border-b border-brand-ink/5">
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-ink/40">Lens Type</span>
              </div>
              <div className="h-20 flex items-center border-b border-brand-ink/5">
                <span className="text-[10px] uppercase tracking-widest font-black text-brand-ink/40">Color</span>
              </div>
            </div>

            {/* Products Columns */}
            {selectedProducts.map(product => (
              <div key={product.id} className="flex flex-col gap-12">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden mb-6 border border-brand-ink/5 p-4">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="text-[9px] uppercase tracking-widest font-black text-brand-gold hover:text-brand-ink transition-colors"
                  >
                    Add to Bag
                  </button>
                </div>

                <div className="h-20 flex items-center justify-center border-b border-brand-ink/5">
                  <span className="text-xl font-serif text-brand-gold">${product.price}</span>
                </div>
                <div className="h-20 flex items-center justify-center border-b border-brand-ink/5">
                  <span className="text-[10px] uppercase tracking-widest font-bold">{product.category}</span>
                </div>
                <div className="h-20 flex items-center justify-center border-b border-brand-ink/5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-center">{product.material}</span>
                </div>
                <div className="h-20 flex items-center justify-center border-b border-brand-ink/5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-center">{product.lensType}</span>
                </div>
                <div className="h-20 flex items-center justify-center border-b border-brand-ink/5">
                  <span className="text-[10px] uppercase tracking-widest font-bold">{product.color}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Footer = () => (
  <footer className="bg-brand-ink text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 border border-brand-gold rounded-full flex items-center justify-center">
              <span className="text-brand-gold font-serif text-xl font-bold">A</span>
            </div>
            <h2 className="text-3xl font-serif tracking-[0.1em]">AYNOOR</h2>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
            Redefining luxury eyewear through the lens of Italian heritage and contemporary vision.
          </p>
          <div className="flex gap-6">
            <Instagram size={18} className="text-brand-gold/60 hover:text-brand-gold cursor-pointer transition-colors" />
            <Twitter size={18} className="text-brand-gold/60 hover:text-brand-gold cursor-pointer transition-colors" />
            <Facebook size={18} className="text-brand-gold/60 hover:text-brand-gold cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-brand-gold">Collections</h4>
          <ul className="space-y-4 text-xs text-white/40 font-bold tracking-widest">
            <li className="hover:text-brand-gold cursor-pointer transition-colors">Sunglasses</li>
            <li className="hover:text-brand-gold cursor-pointer transition-colors">Optical</li>
            <li className="hover:text-brand-gold cursor-pointer transition-colors">Limited Edition</li>
            <li className="hover:text-brand-gold cursor-pointer transition-colors">Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-brand-gold">Maison</h4>
          <ul className="space-y-4 text-xs text-white/40 font-bold tracking-widest">
            <li className="hover:text-brand-gold cursor-pointer transition-colors">Our Story</li>
            <li className="hover:text-brand-gold cursor-pointer transition-colors">Craftsmanship</li>
            <li className="hover:text-brand-gold cursor-pointer transition-colors">Sustainability</li>
            <li className="hover:text-brand-gold cursor-pointer transition-colors">Boutiques</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-brand-gold">Newsletter</h4>
          <p className="text-xs text-white/40 mb-6 font-bold tracking-widest">Subscribe to receive private invitations and previews.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-white/10 py-3 text-xs focus:outline-none focus:border-brand-gold transition-colors placeholder:text-white/20"
            />
            <button className="absolute right-0 bottom-3 text-brand-gold">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.2em] text-white/20 font-bold">
        <p>&copy; 2026 Aynoor. All Rights Reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-brand-gold cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-brand-gold cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-brand-gold cursor-pointer transition-colors">Shipping</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [tryOnProduct, setTryOnProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  useEffect(() => {
    (window as any).startCheckout = () => setIsCheckoutOpen(true);
  }, []);

  const categories = ['All', 'Sunglasses', 'Optical', 'Limited Edition'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const toggleCompare = (id: string) => {
    setCompareIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length >= 3) return prev; // Limit to 3 for better UI
      return [...prev, id];
    });
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleAddReview = (productId: string, review: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...review,
      id: `r-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };

    setProducts(prev => prev.map(p => 
      p.id === productId ? { ...p, reviews: [newReview, ...p.reviews] } : p
    ));

    // Also update selected product if it's open
    if (selectedProduct && selectedProduct.id === productId) {
      setSelectedProduct(prev => prev ? { ...prev, reviews: [newReview, ...prev.reviews] } : null);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-ink">
      <Navbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      
      <Hero />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black mb-4 block">Maison Selection</span>
            <h2 className="text-4xl md:text-6xl font-serif">The Collection</h2>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-8 border-b border-brand-ink/5 md:border-none pb-4 md:pb-0">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all relative pb-2 ${
                  activeCategory === cat ? 'text-brand-ink' : 'text-brand-ink/30 hover:text-brand-ink'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-20">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
              onClick={setSelectedProduct}
              onTryOn={setTryOnProduct}
              isComparing={compareIds.includes(product.id)}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>

        <ComparisonDrawer 
          selectedIds={compareIds}
          products={products}
          onRemove={toggleCompare}
          onClear={() => setCompareIds([])}
          onCompare={() => setIsComparisonOpen(true)}
        />

        <div className="mt-24 md:mt-32 relative h-[400px] md:h-[600px] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=2000" 
            alt="Craftsmanship" 
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-ink/60 flex items-center justify-center text-center p-6">
            <div className="max-w-2xl">
              <h3 className="text-white text-3xl md:text-6xl font-serif mb-6 md:mb-8">The Essence of <br /> Italian Mastery</h3>
              <p className="text-white/70 text-sm md:text-lg mb-8 md:mb-10 font-light leading-relaxed">
                Every Aynoor frame is a testament to heritage, meticulously sculpted from premium acetate and precious metals by master artisans in our historic Milanese atelier.
              </p>
              <button className="text-brand-gold uppercase text-[10px] tracking-[0.4em] font-black border-b border-brand-gold/30 pb-2 hover:border-brand-gold transition-all">
                The Aynoor Story
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)}
            onAddToCart={addToCart}
            onAddReview={handleAddReview}
            onTryOn={setTryOnProduct}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {tryOnProduct && (
          <VirtualTryOn 
            product={tryOnProduct} 
            onClose={() => setTryOnProduct(null)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isComparisonOpen && (
          <ComparisonModal 
            selectedIds={compareIds}
            products={products}
            onClose={() => setIsComparisonOpen(false)}
            onAddToCart={addToCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCheckoutOpen && (
          <Checkout 
            items={cart} 
            onClose={() => setIsCheckoutOpen(false)} 
            onComplete={() => {
              setCart([]);
              setIsCheckoutOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
