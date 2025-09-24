import React from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2, FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FiShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-8" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Discover our beautiful jewelry collection</p>
          <Link
            to="/products"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div key={item.id} className="p-6 flex items-center space-x-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-lg font-medium text-gray-900 hover:text-primary-700"
                  >
                    {item.name}
                  </Link>
                  <p className="text-2xl font-bold text-primary-700 mt-2">
                    ${item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <FiMinus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FiPlus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="text-right min-w-[100px]">
                    <p className="text-lg font-bold text-gray-900">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-gray-50 px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-gray-900">Total:</span>
              <span className="text-3xl font-bold text-primary-700">
                ${getCartTotal().toLocaleString()}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => alert('Thank you for your order! This is a demo checkout.')}
                className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart