import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-12 w-12 relative mr-2">
                <Image src="/images/logo.png" alt="Modish Clothing" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">MODISH</span>
            </div>
            <p className="text-gray-400">
              Modern fashion for the contemporary individual. Quality clothing that expresses your unique style.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/women" className="text-gray-400 hover:text-white">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link href="/men" className="text-gray-400 hover:text-white">
                  Men's Collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: modish.eg1@gmail.com</li>
              <li>Follow us on social media</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Modish Clothing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
