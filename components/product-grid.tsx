"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/products"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({})

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking add to cart
    e.stopPropagation()

    const selectedSize = selectedSizes[product.id]
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart.",
        variant: "destructive",
      })
      return
    }

    // Check if selected size is available
    if (product.unavailableSizes?.includes(selectedSize)) {
      toast({
        title: "Size not available",
        description: "This size is currently out of stock. Please select a different size.",
        variant: "destructive",
      })
      return
    }

    addItem({
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      category: product.category,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    })
  }

  const handleSizeChange = (productId: string, size: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => {
        const allSizesUnavailable = product.sizes.every((size) => product.unavailableSizes?.includes(size))
        const availableSizes = product.sizes.filter((size) => !product.unavailableSizes?.includes(size))

        return (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-[3/4] relative">
                <Image
                  src={product.image || "/images/fashion-placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Stock Status Badge */}
                <div className="absolute top-2 left-2">
                  {allSizesUnavailable ? (
                    <Badge variant="destructive">Out of Stock</Badge>
                  ) : availableSizes.length <= 2 ? (
                    <Badge variant="outline" className="bg-white text-orange-600 border-orange-600">
                      Limited
                    </Badge>
                  ) : null}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold mb-4">${product.price}</p>
                {product.description && (
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
                )}

                <div className="space-y-4" onClick={(e) => e.preventDefault()}>
                  <Select
                    onValueChange={(value) => handleSizeChange(product.id, value)}
                    disabled={allSizesUnavailable}
                  >
                    <SelectTrigger onClick={(e) => e.stopPropagation()}>
                      <SelectValue placeholder={allSizesUnavailable ? "Out of stock" : "Select size"} />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => {
                        const isUnavailable = product.unavailableSizes?.includes(size)
                        return (
                          <SelectItem key={size} value={size} disabled={isUnavailable}>
                            <div className="flex items-center justify-between w-full">
                              <span className={isUnavailable ? "text-gray-400" : ""}>{size}</span>
                              {isUnavailable && <span className="text-xs text-red-500 ml-2">(Out of stock)</span>}
                            </div>
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>

                  <Button
                    className="w-full"
                    onClick={(e) => handleAddToCart(product, e)}
                    disabled={allSizesUnavailable}
                  >
                    {allSizesUnavailable ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
