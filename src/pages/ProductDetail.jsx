import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiShoppingCart } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'
import productsData from '../data/products.json'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  
  const product = productsData.find(p => p.id === parseInt(id))
  const relatedProducts = productsData
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link
            to="/products"
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <FiArrowLeft className="h-5 w-5" />
          <span>Back to Products</span>
        </Link>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square lg:aspect-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary-700 mb-6">
                  ${product.price.toLocaleString()}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium materials and craftsmanship</li>
                  <li>• Lifetime warranty included</li>
                  <li>• Free shipping and returns</li>
                  <li>• Certificate of authenticity provided</li>
                </ul>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <FiShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail