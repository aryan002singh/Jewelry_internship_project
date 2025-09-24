import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gold-400 mb-4">CyberForenX</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Crafting exceptional jewelry pieces with passion and precision. 
              Each piece tells a story of elegance, beauty, and timeless craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <FiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <FiTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-gold-400 transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FiMapPin className="h-4 w-4 text-gold-400" />
                <span className="text-gray-300 text-sm">123 Jewelry St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="h-4 w-4 text-gold-400" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="h-4 w-4 text-gold-400" />
                <span className="text-gray-300 text-sm">info@cyberforenx.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 CyberForenX Jewellery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer