import React from 'react';
const ProductShowcase = () => {
  const categories = [{
    id: 1,
    name: 'Fresh Bouquets',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Hand-tied bouquets of seasonal blooms'
  }, {
    id: 2,
    name: 'Wedding Flowers',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant arrangements for your special day'
  }, {
    id: 3,
    name: 'Potted Plants',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Long-lasting greenery for home or office'
  }, {
    id: 4,
    name: 'Luxury Arrangements',
    image: 'https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Premium blooms for extraordinary moments'
  }];
  return <section id="products" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Our Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of floral arrangements for
            every occasion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-rose-600 font-medium hover:text-rose-700 transition-colors duration-300">
                  View Collection →
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProductShowcase;