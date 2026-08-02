export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: "Hanes Hooded Sweatshirt", price: 1856, image: "/assets/img/products/1_small.jpg", rating: 4, badge: "New arrival" },
  { id: 2, name: "The Flash Logo T-Shirt", price: 1664, image: "/assets/img/products/2_small.jpg", rating: 5 },
  { id: 3, name: "Open Front Cropped Cardigans", price: 1520, originalPrice: 1900, image: "/assets/img/products/3_small.jpg", rating: 3, badge: "20% OFF" },
  { id: 4, name: "Fashionable Summer Dress", price: 1499, image: "/assets/img/products/4_small.jpg", rating: 4 },
];
