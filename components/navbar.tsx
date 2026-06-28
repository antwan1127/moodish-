"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"

export function Navbar() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="border-b bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 relative mr-2">
              <Image src="/images/logo.png" alt="Modish Clothing" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold">MODISH</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 font-medium">
              Home
            </Link>
            <Link href="/women" className="text-white hover:text-gray-300 font-medium">
              Women
            </Link>
            <Link href="/men" className="text-white hover:text-gray-300 font-medium">
              Men
            </Link>
          </div>

          {/* Cart and User Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-white text-black">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex space-x-4">
            <Link href="/women" className="text-white hover:text-gray-300 font-medium">
              Women
            </Link>
            <Link href="/men" className="text-white hover:text-gray-300 font-medium">
              Men
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
