export interface Product {
  id: string;
  title: string;
  description: string;
  provider: string;
  price: number;
  category: Category;
  image: string;
  isPromotion?: boolean;
  promotionPrice?: number;
  likes: number;
}

export type Category = 
  | 'mountain'
  | 'road'
  | 'urban'
  | 'ebike'
  | 'accessories'
  | 'clothing-men'
  | 'clothing-women'
  | 'shoes-men'
  | 'shoes-women'
  | 'parts';