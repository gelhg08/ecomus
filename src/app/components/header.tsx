// components/Header.jsx
// components/Header.js
// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md relative z-20">
      <div className="container mx-auto px-4 py-2">
        {/* Primer Div */}
        <div className="flex justify-between items-center border-gray-100">
          <div className="flex items-center space-x-4">
            <img src="/icons/estados-unidos.png" alt="USA Flag" className="w-5 h-5" />
            <span className="text-gray-600">USD</span>
            <select className="border border-gray-300 rounded-md p-1 text-gray-600">
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>

          <div className="text-2xl font-bold text-gray-800 border-gray-50">
            <Link href="/">ECOMUS</Link>
          </div>

          <div className="flex items-center space-x-4 border-gray-50">
            <img src="/icons/lupa.png" alt="Search" className="w-5 h-5 cursor-pointer" />
            <img src="/icons/perfil-del-usuario.png" alt="User" className="w-5 h-5 cursor-pointer" />
            <img src="/icons/me-gusta.png" alt="Heart" className="w-5 h-5 cursor-pointer" />
            <img src="/icons/bolso.png" alt="Shopping Bag" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>

        {/* Segundo Div */}
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/product" className="text-gray-600 hover:text-gray-900">Product</Link>
          <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shops</Link>
          <Link href="/page" className="text-gray-600 hover:text-gray-900">Pages</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          <Link href="/buynow" className="text-gray-600 hover:text-gray-900">Buy Now</Link>
        </div>
      </div>
    </header>
  );
}





