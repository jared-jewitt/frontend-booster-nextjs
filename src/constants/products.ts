export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Product #1",
    description: "Lorem ipsum 1",
    price: 19.99,
  },
  {
    id: 2,
    title: "Product #2",
    description: "Lorem ipsum 2",
    price: 34.45,
  },
  {
    id: 3,
    title: "Product #3",
    description: "Lorem ipsum 3",
    price: 15.0,
  },
];
