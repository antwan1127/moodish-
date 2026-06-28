export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: "men" | "women"
  sizes: string[]
  description?: string
  unavailableSizes?: string[] // New field for unavailable sizes
}

// Women's products - Page 1
export const womenProductsPage1: Product[] = [
  {
    id: "w1",
    name: "Classic White Tee",
    price: 29.99,
    image: "/images/women-1.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["XS"],
    description:
      "A clean white tee with a flattering fit and soft cotton feel. The perfect everyday top for effortless style.",
  },
  {
    id: "w2",
    name: "Ribbed Black Tee",
    price: 34.99,
    image: "/images/women-2.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["XL"],
    description:
      "A slim ribbed black tee crafted for comfort and shape retention. Ideal for layering or wearing on its own.",
  },
  {
    id: "w3",
    name: "Cream Fitted Top",
    price: 39.99,
    image: "/images/women-3.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["S"],
    description:
      "A soft cream-colored fitted top with a subtle neckline. Comfortable, polished, and easy to style for any outfit.",
  },
  {
    id: "w4",
    name: "Black Slim Tee",
    price: 32.99,
    image: "/images/women-4.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["L"],
    description:
      "A sleek black tee with a slim-fitting silhouette. Ideal for a minimalist wardrobe and versatile styling.",
  },
  {
    id: "w5",
    name: "Ivory Crew Neck",
    price: 44.99,
    image: "/images/women-5.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["M"],
    description:
      "A soft ivory crew neck tee that pairs perfectly with jeans or tailored trousers. A wardrobe staple.",
  },
  {
    id: "w6",
    name: "Soft Knit Tee",
    price: 49.99,
    image: "/images/women-6.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A luxe knit tee with a smooth finish and comfortable stretch. Perfect for both casual and polished looks.",
  },
]

// Women's products - Page 2
export const womenProductsPage2: Product[] = [
  {
    id: "w7",
    name: "White Everyday Tee",
    price: 27.99,
    image: "/images/women-1.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["L"],
    description:
      "A lightweight everyday tee designed for comfort and easy wear. A versatile essential for any wardrobe.",
  },
  {
    id: "w8",
    name: "Black Crew Neck",
    price: 33.99,
    image: "/images/women-2.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["XS", "XL"],
    description:
      "A classic black crew neck tee with a flattering drape. Soft fabric and clean styling make it a closet favorite.",
  },
  {
    id: "w9",
    name: "Structured White Top",
    price: 41.99,
    image: "/images/women-3.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A refined white top with a structured fit. Perfect for pairing with denim or tailoring for a polished look.",
  },
  {
    id: "w10",
    name: "Fitted Black Tee",
    price: 35.99,
    image: "/images/women-4.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["M"],
    description:
      "A fitted black tee with subtle stretch. A sleek choice for both casual and dressed-up looks.",
  },
  {
    id: "w11",
    name: "Cream Ribbed Tee",
    price: 39.99,
    image: "/images/women-5.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A soft cream ribbed tee with a flattering silhouette. Comfortable and chic for everyday style.",
  },
  {
    id: "w12",
    name: "Black Essential Tee",
    price: 31.99,
    image: "/images/women-6.svg",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["S"],
    description:
      "A wardrobe-essential black tee with a comfortable, classic cut. Easy to pair with any outfit.",
  },
]

// Men's products - Page 1
export const menProductsPage1: Product[] = [
  {
    id: "m1",
    name: "White Crew Neck Tee",
    price: 27.99,
    image: "/images/men-1.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["S"],
    description:
      "A crisp white crew neck tee with soft cotton fabric. A timeless essential for a modern wardrobe.",
  },
  {
    id: "m2",
    name: "Grey Heather Tee",
    price: 31.99,
    image: "/images/men-2.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["XXL"],
    description:
      "A heather grey tee with a relaxed fit. Ideal for everyday wear with easy styling options.",
  },
  {
    id: "m3",
    name: "Black Oversized Tee",
    price: 34.99,
    image: "/images/men-3.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["M"],
    description:
      "An oversized black tee designed for comfort and a streetwear-inspired silhouette.",
  },
  {
    id: "m4",
    name: "Graphite Basic Tee",
    price: 29.99,
    image: "/images/men-4.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["L"],
    description:
      "A graphite tee with a clean finish and soft feel. A versatile staple for layered looks.",
  },
  {
    id: "m5",
    name: "Classic Cotton Tee",
    price: 32.99,
    image: "/images/men-5.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["XL"],
    description:
      "A classic cotton tee with a durable knit and comfortable fit. Great for casual styling.",
  },
  {
    id: "m6",
    name: "Everyday Mens Tee",
    price: 28.99,
    image: "/images/men-6.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["XXL"],
    description:
      "A lightweight tee made for everyday wear with a soft, breathable fabric.",
  },
]

// Men's products - Page 2
export const menProductsPage2: Product[] = [
  {
    id: "m7",
    name: "White Essential Tee",
    price: 26.99,
    image: "/images/men-1.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["XL"],
    description:
      "A lightweight essential white tee made for everyday comfort and layering.",
  },
  {
    id: "m8",
    name: "Grey Basic Tee",
    price: 30.99,
    image: "/images/men-2.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["S"],
    description:
      "A soft grey basic tee with a modern fit. A comfortable staple for casual outfits.",
  },
  {
    id: "m9",
    name: "Black Premium Tee",
    price: 35.99,
    image: "/images/men-3.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["M"],
    description:
      "A premium black tee with a clean cut and smooth finish. Designed for effortless styling.",
  },
  {
    id: "m10",
    name: "Relaxed Fit Tee",
    price: 33.99,
    image: "/images/men-4.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["XXL"],
    description:
      "A relaxed fit tee with soft fabric and a comfortable silhouette. Ideal for everyday wear.",
  },
  {
    id: "m11",
    name: "Modern Crew Tee",
    price: 36.99,
    image: "/images/men-5.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["L"],
    description:
      "A modern crew neck tee with a refined look and comfortable feel. Easy to dress up or down.",
  },
  {
    id: "m12",
    name: "Soft Cotton Tee",
    price: 29.99,
    image: "/images/men-6.svg",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["M"],
    description:
      "A soft cotton tee designed for breathability and everyday comfort.",
  },
]
