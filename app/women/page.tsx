import { Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { Pagination } from "@/components/pagination"
import { womenProductsPage1, womenProductsPage2 } from "@/lib/products"

export default function WomenPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page) || 1
  const products = page === 2 ? womenProductsPage2 : womenProductsPage1
  const totalPages = 2

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Women's Collection</h1>
          <p className="text-lg text-gray-600">Elegant and contemporary fashion for the modern woman</p>
        </div>

        <Suspense fallback={<div>Loading products...</div>}>
          <ProductGrid products={products} />
          <Pagination currentPage={page} totalPages={totalPages} basePath="/women" />
        </Suspense>
      </div>
    </div>
  )
}
