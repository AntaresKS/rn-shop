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
    heroImage: require("../assets/images/dell-1.jpg"),
    imageUrl: [
      require("../assets/images/dell-1.jpg"),
      require("../assets/images/dell-2.jpg"),
    ],
    price: 1099.99,
    category: {
      imageUrl: require("../assets/images/dell-1.jpg"),
      name: "Laptops",
      slug: "laptops",
    },
    maxQuantity: 7,
  },
  {
    id: 2,
    title: "iPhone 16 Pro Max",
    slug: "iphone-16-pro-max",
    heroImage: require("../assets/images/i-phone-1.jpg"),
    imageUrl: [
      require("../assets/images/i-phone-1.jpg"),
      require("../assets/images/i-phone-2.jpg"),
      require("../assets/images/i-phone-3.jpg"),
    ],
    price: 999.99,
    category: {
      imageUrl: require("../assets/images/i-phone-1.jpg"),
      name: "Phones",
      slug: "phones",
    },
    maxQuantity: 5,
  },
];
