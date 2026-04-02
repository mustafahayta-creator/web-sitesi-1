'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <Link href="#" className="flex items-center space-x-3">
          <Image 
            src="/logo.png" 
            alt="Çukurova Gayrimenkul Logo" 
            width={50} 
            height={50}
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-gray-900 hidden sm:inline">Çukurova Gayrimenkul</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="#" className="text-gray-700 hover:text-blue-600">Anasayfa</Link>
          <Link href="#hakkimizda" className="text-gray-700 hover:text-blue-600">Hakkımızda</Link>
          <Link href="#hizmetler" className="text-gray-700 hover:text-blue-600">Hizmetler</Link>
          <Link href="#portfolio" className="text-gray-700 hover:text-blue-600">Portföy</Link>
          <Link href="#fiyatlandirma" className="text-gray-700 hover:text-blue-600">Fiyatlandırma</Link>
        </div>

        <Link href="#iletisim" className="hidden md:block button-primary">
          İletişim
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="#" className="text-gray-700">Anasayfa</Link>
              <Link href="#hakkimizda" className="text-gray-700">Hakkımızda</Link>
              <Link href="#hizmetler" className="text-gray-700">Hizmetler</Link>
              <Link href="#portfolio" className="text-gray-700">Portföy</Link>
              <Link href="#fiyatlandirma" className="text-gray-700">Fiyatlandırma</Link>
              <Link href="#iletisim" className="button-primary text-center">İletişim</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
