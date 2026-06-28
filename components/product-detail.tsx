"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
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

    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `${product.id}-${selectedSize}`,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        category: product.category,
      })
    }

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) x${quantity} has been added to your cart.`,
    })
  }

  const backPath = product.category === "women" ? "/women" : "/men"

  // Check if all sizes are unavailable
  const allSizesUnavailable = product.sizes.every((size) => product.unavailableSizes?.includes(size))

  // Get available sizes count
  const availableSizes = product.sizes.filter((size) => !product.unavailableSizes?.includes(size))

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link href={backPath}>
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to {product.category === "women" ? "Women's" : "Men's"} Collection
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-[3/4] relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image || "/images/fashion-placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {/* Out of Stock Overlay */}
              {allSizesUnavailable && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>

            {/* Additional product images could go here */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden opacity-50">
                  <Image
                    src={product.image || "/images/fashion-placeholder.svg"}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category === "women" ? "Women's" : "Men's"} Collection
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-black mb-4">${product.price}</p>
              {product.description && <p className="text-gray-600 leading-relaxed">{product.description}</p>}

              {/* Stock Status */}
              <div className="mt-4">
                {allSizesUnavailable ? (
                  <Badge variant="destructive">Out of Stock</Badge>
                ) : availableSizes.length <= 2 ? (
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    Limited Stock - Only {availableSizes.length} size{availableSizes.length > 1 ? "s" : ""} left
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    In Stock
                  </Badge>
                )}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Size</label>
                <Select onValueChange={setSelectedSize} disabled={allSizesUnavailable}>
                  <SelectTrigger className="w-full">
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
                {product.unavailableSizes && product.unavailableSizes.length > 0 && !allSizesUnavailable && (
                  <p className="text-xs text-gray-500 mt-1">
                    Sizes {product.unavailableSizes.join(", ")} are currently out of stock
                  </p>
                )}
              </div>

              {/* Quantity Selection */}
              <div>
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <Select
                  onValueChange={(value) => setQuantity(Number(value))}
                  defaultValue="1"
                  disabled={allSizesUnavailable}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full flex items-center gap-2"
              disabled={allSizesUnavailable}
            >
              <ShoppingCart className="h-5 w-5" />
              {allSizesUnavailable ? "Out of Stock" : `Add to Cart - $${(product.price * quantity).toFixed(2)}`}
            </Button>

            {/* Notify when back in stock */}
            {allSizesUnavailable && (
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">This item is currently out of stock</p>
                <Button variant="outline" size="sm">
                  Notify me when available
                </Button>
              </div>
            )}

            {/* Product Details */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span>{product.category === "women" ? "Women's" : "Men's"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Sizes:</span>
                    <span>{availableSizes.length > 0 ? availableSizes.join(", ") : "None available"}</span>
                  </div>
                  {product.unavailableSizes && product.unavailableSizes.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Out of Stock:</span>
                      <span className="text-red-500">{product.unavailableSizes.join(", ")}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="text-center text-gray-600">
            <p>More products coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
