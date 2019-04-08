export interface IProduct {
  _id: string;
  name: string;
  description: string;
  isAvailable: boolean;
  price: number;
  discount: number;
  imageUrl: string;
  rating: number;
  category: string;
}
