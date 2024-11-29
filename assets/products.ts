import { Product } from "./types/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Macbook Pro (2024)",
    slug: "macbook-pro-2024",
    heroImage: require("../assets/images/mac-book-1.jpg"),
    imageUrl: [
      require("../assets/images/mac-book-3.jpg"),
      require("../assets/images/mac-book-2.jpg"),
      require("../assets/images/mac-book-1.jpg"),
    ],
    price: 899.99,
    category: {
      imageUrl: require("../assets/images/mac-book-1.jpg"),
      name: "Laptops",
      slug: "laptops",
    },
    maxQuantity: 5,
  },
  {
    id: 5,
    title: "Dell XPS 13",
    slug: "dell-xps-13",
