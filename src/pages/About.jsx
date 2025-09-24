import React from 'react'

const About = () => {
  const features = [
    {
      title: 'Premium Materials',
      description: 'We use only the finest gold, silver, and precious stones in our creations.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&q=80'
    },
    {
      title: 'Expert Craftsmanship',
      description: 'Our master jewelers bring decades of experience to every piece.',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop&q=80'
    },
    {
      title: 'Timeless Design',
      description: 'Each piece is designed to be cherished for generations.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About CyberForenX</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over three decades, we've been crafting exceptional jewelry that tells your story. 
              Each piece represents our commitment to excellence, artistry, and the timeless beauty of fine jewelry.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1990, CyberForenX began as a small family business with a simple vision: 
                  to create jewelry that captures life's most precious moments. What started in a modest 
                  workshop has grown into a renowned name in fine jewelry.
                </p>
                <p>
                  Our founder, Master Jeweler Maria Rodriguez, brought together traditional craftsmanship 
                  techniques with innovative design concepts. This unique approach has made CyberForenX 
                  a trusted name among jewelry enthusiasts worldwide.
                </p>
                <p>
                  Today, we continue to honor that legacy while embracing new technologies and design 
                  philosophies. Every piece that leaves our workshop represents our commitment to 
                  excellence and our passion for creating jewelry that lasts a lifetime.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&q=80"
                alt="Jewelry craftsmanship"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600">
              Our commitment to quality and craftsmanship is evident in every detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">Q</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">Uncompromising quality in every piece we create</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">A</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Artistry</h3>
              <p className="text-gray-600 text-sm">Masterful craftsmanship in traditional and modern styles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">I</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Embracing new techniques while honoring tradition</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">S</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Service</h3>
              <p className="text-gray-600 text-sm">Exceptional customer service and lifetime support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About