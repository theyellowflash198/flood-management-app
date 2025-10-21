"use client"

import { Heart, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">FM</span>
              </div>
              <h3 className="text-xl font-bold">Flood Manager</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Real-time flood monitoring and management system powered by advanced weather data and AI predictions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Storm Map
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Simulation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About NDRF
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@floodmanager.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>1-800-FLOOD-911</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> for disaster management
          </p>
          <p className="mt-2">© 2025 Flood Manager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
