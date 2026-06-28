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
    name: "Elegant Midi Dress",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["XS", "XL"], // Example: XS and XL are out of stock
    description:
      "A sophisticated midi dress perfect for both casual and formal occasions. Made with premium fabric that drapes beautifully and offers all-day comfort.",
  },
  {
    id: "w2",
    name: "Classic Blazer",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["L"], // Example: L is out of stock
    description:
      "A timeless blazer that adds sophistication to any outfit. Features a tailored fit and premium construction for a professional look.",
  },
  {
    id: "w3",
    name: "Silk Blouse",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A luxurious silk blouse for an elegant and refined look. The smooth texture and elegant drape make it perfect for special occasions.",
  },
  {
    id: "w4",
    name: "High-Waist Trousers",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["S", "M"], // Example: S and M are out of stock
    description:
      "Stylish high-waist trousers that flatter your figure. Designed with a comfortable fit and modern silhouette for versatile styling.",
  },
  {
    id: "w5",
    name: "Cashmere Sweater",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A soft and warm cashmere sweater for ultimate comfort. Premium quality cashmere provides luxury and warmth for cooler days.",
  },
  {
    id: "w6",
    name: "Designer Handbag",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["One Size"],
    description:
      "A stylish designer handbag to complement any outfit. Features premium leather construction and thoughtful organization.",
  },
]

// Women's products - Page 2
export const womenProductsPage2: Product[] = [
  {
    id: "w7",
    name: "Summer Maxi Dress",
    price: 75.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A flowing maxi dress perfect for summer days and evenings. Lightweight fabric and elegant design make it ideal for warm weather.",
  },
  {
    id: "w8",
    name: "Leather Jacket",
    price: 249.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    unavailableSizes: ["XS", "S", "XL"], // Example: Multiple sizes out of stock
    description:
      "A premium leather jacket that adds edge to your style. Crafted from genuine leather with attention to detail and durability.",
  },
  {
    id: "w9",
    name: "Pleated Skirt",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "An elegant pleated skirt for a feminine and sophisticated look. The classic pleating adds movement and grace to your outfit.",
  },
  {
    id: "w10",
    name: "Knit Cardigan",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A cozy knit cardigan for layering in any season. Soft knit construction provides warmth and comfort with versatile styling options.",
  },
  {
    id: "w11",
    name: "Statement Earrings",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["One Size"],
    description:
      "Eye-catching statement earrings to elevate any outfit. Bold design and quality materials make these a standout accessory.",
  },
  {
    id: "w12",
    name: "Ankle Boots",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    sizes: ["36", "37", "38", "39", "40", "41"],
    unavailableSizes: ["36", "41"], // Example: Smallest and largest sizes out of stock
    description:
      "Stylish ankle boots that combine comfort and fashion. Premium materials and comfortable sole make them perfect for all-day wear.",
  },
]

// Men's products - Page 1
export const menProductsPage1: Product[] = [
  {
    id: "m1",
    name: "Classic Suit Jacket",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["S", "XXL"], // Example: S and XXL are out of stock
    description:
      "A timeless suit jacket for a sharp and professional look. Tailored fit with premium fabric construction for business and formal occasions.",
  },
  {
    id: "m2",
    name: "Cotton Dress Shirt",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A premium cotton dress shirt for formal and business occasions. Crisp cotton fabric with classic collar and professional styling.",
  },
  {
    id: "m3",
    name: "Leather Jacket",
    price: 299.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["M"], // Example: M is out of stock
    description:
      "A classic leather jacket that never goes out of style. Genuine leather construction with timeless design and superior craftsmanship.",
  },
  {
    id: "m4",
    name: "Chino Pants",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["30", "32", "34", "36", "38"],
    description:
      "Versatile chino pants for both casual and semi-formal occasions. Comfortable fit with durable construction and classic styling.",
  },
  {
    id: "m5",
    name: "Wool Sweater",
    price: 119.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["L", "XL"], // Example: L and XL are out of stock
    description:
      "A warm wool sweater for comfort during colder months. Premium wool blend provides warmth and style for casual and smart-casual looks.",
  },
  {
    id: "m6",
    name: "Oxford Shoes",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["8", "9", "10", "11", "12"],
    description:
      "Classic Oxford shoes for a sophisticated and polished look. Premium leather construction with comfortable sole and timeless design.",
  },
]

// Men's products - Page 2
export const menProductsPage2: Product[] = [
  {
    id: "m7",
    name: "Denim Jacket",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A versatile denim jacket that complements any casual outfit. Classic denim construction with modern fit and durable quality.",
  },
  {
    id: "m8",
    name: "Slim Fit Jeans",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["30", "32", "34", "36", "38"],
    unavailableSizes: ["30", "38"], // Example: Smallest and largest sizes out of stock
    description:
      "Modern slim fit jeans for a contemporary look. Premium denim with comfortable stretch and classic five-pocket styling.",
  },
  {
    id: "m9",
    name: "Polo Shirt",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A classic polo shirt for a smart casual style. Soft cotton pique fabric with traditional collar and comfortable fit.",
  },
  {
    id: "m10",
    name: "Bomber Jacket",
    price: 169.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    unavailableSizes: ["S", "M", "XXL"], // Example: Multiple sizes out of stock
    description:
      "A trendy bomber jacket for a modern urban look. Contemporary design with premium materials and comfortable fit.",
  },
  {
    id: "m11",
    name: "Leather Belt",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A premium leather belt that adds a finishing touch to any outfit. Genuine leather with classic buckle and durable construction.",
  },
  {
    id: "m12",
    name: "Casual Sneakers",
    price: 109.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    sizes: ["8", "9", "10", "11", "12"],
    unavailableSizes: ["8", "12"], // Example: Smallest and largest sizes out of stock
    description:
      "Comfortable and stylish sneakers for everyday wear. Modern design with cushioned sole and breathable materials.",
  },
]
