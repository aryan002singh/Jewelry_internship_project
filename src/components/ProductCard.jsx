import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-2xl font-bold text-primary-700">${product.price.toLocaleString()}</p>
        </div>
      </Link>
      
      <button
        onClick={handleAddToCart}
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary-50"
      >
        <FiShoppingCart className="h-5 w-5 text-primary-700" />
      </button>
    </div>
  )
}

export default ProductCard