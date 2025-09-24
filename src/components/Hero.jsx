import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1657869208369-6d6e7f5b7013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGpld2VscnklMj hob3Jpem9hbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Luxury Jewelry"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Exquisite <span className="text-gold-400">Jewelry</span>
            <br />
            for Every Occasion
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted jewelry pieces, each designed to capture 
            the essence of timeless elegance and modern sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors font-medium"
            >
              Shop Collection
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-primary-700 text-primary-700 rounded-lg hover:bg-primary-700 hover:text-white transition-colors font-medium"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero