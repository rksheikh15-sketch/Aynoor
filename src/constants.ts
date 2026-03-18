import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aurelius Gold',
    price: 320,
    category: 'Sunglasses',
    description: 'Handcrafted titanium frames with 24k gold plating by Aynoor.',
    image: 'https://images.unsplash.com/photo-1511499767390-a7335958beba?auto=format&fit=crop&q=80&w=800',
    details: ['Titanium Frame', 'Polarized Lenses', '100% UV Protection'],
    color: 'Gold / Tortoise',
    material: 'Titanium & 24k Gold',
    lensType: 'Polarized CR-39',
    reviews: [
      { id: 'r1', userName: 'Elena Rossi', rating: 5, comment: 'Absolutely stunning. The gold plating is exquisite.', date: '2026-02-15' },
      { id: 'r2', userName: 'Marcus V.', rating: 4, comment: 'Very lightweight and comfortable for all-day wear.', date: '2026-03-01' }
    ]
  },
  {
    id: '2',
    name: 'Noor Classic',
    price: 280,
    category: 'Optical',
    description: 'Timeless silhouette for the modern intellectual, a signature Aynoor piece.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
    details: ['Acetate Frame', 'Anti-reflective Coating', 'Lightweight Design'],
    color: 'Onyx Black',
    material: 'Premium Acetate',
    lensType: 'Clear Demo Lens',
    reviews: [
      { id: 'r3', userName: 'Sophia L.', rating: 5, comment: 'The clarity of the lenses is unmatched. Perfect for work.', date: '2026-01-20' }
    ]
  },
  {
    id: '3',
    name: 'Eclipse Matte',
    price: 350,
    category: 'Sunglasses',
    description: 'Bold, oversized frames for a dramatic presence, exclusively from Aynoor.',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800',
    details: ['Hand-polished Acetate', 'Gradient Lenses', 'Signature Hardware'],
    color: 'Matte Black',
    material: 'Hand-polished Acetate',
    lensType: 'Gradient Grey Tint',
    reviews: [
      { id: 'r4', userName: 'Julian K.', rating: 5, comment: 'A real statement piece. I get compliments everywhere I go.', date: '2026-03-10' },
      { id: 'r5', userName: 'Isabella M.', rating: 5, comment: 'The matte finish is so elegant. Worth every penny.', date: '2026-03-12' }
    ]
  },
  {
    id: '4',
    name: 'Lumina Silver',
    price: 310,
    category: 'Optical',
    description: 'Minimalist silver frames with a touch of elegance by Aynoor.',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800',
    details: ['Stainless Steel', 'Adjustable Nose Pads', 'Flexible Temples'],
    color: 'Brushed Silver',
    material: 'Stainless Steel',
    lensType: 'Blue Light Filter',
    reviews: [
      { id: 'r6', userName: 'David G.', rating: 4, comment: 'Sleek and professional. The silver finish is very high quality.', date: '2026-02-28' }
    ]
  },
  {
    id: '5',
    name: 'Solstice Rose',
    price: 340,
    category: 'Limited Edition',
    description: 'Warm rose gold tones inspired by the setting sun, an Aynoor limited release.',
    image: 'https://images.unsplash.com/photo-1508296670347-6a552ed2934a?auto=format&fit=crop&q=80&w=800',
    details: ['Rose Gold Plating', 'Custom Tinted Lenses', 'Numbered Edition'],
    color: 'Rose Gold',
    material: 'Rose Gold Plated Titanium',
    lensType: 'Sunset Tinted',
    reviews: [
      { id: 'r7', userName: 'Aria S.', rating: 5, comment: 'The rose gold is even more beautiful in person. Truly unique.', date: '2026-03-05' }
    ]
  },
  {
    id: '6',
    name: 'Vanguard Slate',
    price: 295,
    category: 'Sunglasses',
    description: 'Architectural lines meeting superior Aynoor craftsmanship.',
    image: 'https://images.unsplash.com/photo-1509100104048-73c9938636b2?auto=format&fit=crop&q=80&w=800',
    details: ['Hybrid Material', 'Scratch Resistant', 'Ergonomic Fit'],
    color: 'Slate Grey',
    material: 'Carbon Fiber Hybrid',
    lensType: 'Scratch-Resistant Slate',
    reviews: [
      { id: 'r8', userName: 'Leo T.', rating: 5, comment: 'The fit is perfect. They feel very secure and well-made.', date: '2026-03-15' }
    ]
  }
];
