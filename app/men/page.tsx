import { Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { Pagination } from "@/components/pagination"
import { menProductsPage1, menProductsPage2 } from "@/lib/products"

export default async function MenPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const products = currentPage === 2 ? menProductsPage2 : menProductsPage1
  const totalPages = 2

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Men's Collection</h1>
          <p className="text-lg text-gray-600">Bold and sophisticated fashion for the modern man</p>
        </div>

        <Suspense fallback={<div>Loading products...</div>}>
          <ProductGrid products={products} />
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/men" />
        </Suspense>
      </div>
    </div>
  )
}
