import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-8 flex justify-center">
            <Image src="/images/logo.png" alt="Modish Clothing" width={200} height={200} className="object-contain" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">MODISH</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the latest fashion trends for the modern you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/women">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-black hover:bg-gray-200">
                Shop Women
              </Button>
            </Link>
            <Link href="/men">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-black hover:bg-gray-200">
                Shop Men
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Women's Collection */}
            <Link href="/women" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-100">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Women's Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Women's Collection</h3>
                  <p className="text-lg">Elegant & Contemporary</p>
                </div>
              </div>
            </Link>

            {/* Men's Collection */}
            <Link href="/men" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-100">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Men's Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Men's Collection</h3>
                  <p className="text-lg">Bold & Sophisticated</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Modish</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Modish, we believe fashion is a form of self-expression. Our carefully curated collections blend
            contemporary style with timeless elegance, offering premium quality clothing for the modern individual who
            values both comfort and sophistication.
          </p>
        </div>
      </section>
    </div>
  )
}
