import { notFound } from "next/navigation"
import { ProductDetail } from "@/components/product-detail"
import { womenProductsPage1, womenProductsPage2, menProductsPage1, menProductsPage2 } from "@/lib/products"

// Combine all products
const allProducts = [...womenProductsPage1, ...womenProductsPage2, ...menProductsPage1, ...menProductsPage2]

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = allProducts.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}
