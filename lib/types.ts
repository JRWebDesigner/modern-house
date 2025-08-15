export interface Category {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description: string;
  image: any;
  order: number;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
  };
  isTrend?: boolean;
  description: string;
  features: string[];
  slug?: {
    current: string;
  };
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
