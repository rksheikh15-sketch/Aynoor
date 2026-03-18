export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Sunglasses' | 'Optical' | 'Limited Edition';
  description: string;
  image: string;
  details: string[];
  color: string;
  material: string;
  lensType: string;
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}
