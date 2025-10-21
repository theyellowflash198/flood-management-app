"use client"

import { useState } from "react"
import { Menu, X, LogOut } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
  isLoggedIn: boolean
  user: any
  onLogout: () => void
}

export default function Navbar({ isLoggedIn, user, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">FM</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Flood Manager</h1>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
              Dashboard
            </Link>
            <Link href="/storm-map" className="text-gray-600 hover:text-blue-600 transition">
              Storm Map
            </Link>
            <Link href="/simulation" className="text-gray-600 hover:text-blue-600 transition">
              Simulation
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
              About
            </Link>
            {isLoggedIn && (
              <button
                onClick={onLogout}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            )}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-600 hover:text-blue-600 py-2">
              Dashboard
            </Link>
            <Link href="/storm-map" className="block text-gray-600 hover:text-blue-600 py-2">
              Storm Map
            </Link>
            <Link href="/simulation" className="block text-gray-600 hover:text-blue-600 py-2">
              Simulation
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-blue-600 py-2">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
