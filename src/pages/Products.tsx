import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { featuredProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Category } from '../types/product';

const categoryLabels: Record<Category, string> = {
  mountain: 'Bicis de Montaña',
  road: 'Bicis de Ruta',
  urban: 'Bicis Urbanas',
  ebike: 'E-Bike',
  accessories: 'Accesorios',
  'clothing-men': 'Ropa Deportiva Hombre',
  'clothing-women': 'Ropa Deportiva Mujer',
  'shoes-men': 'Calzado Hombre',
  'shoes-women': 'Calzado Mujer',
  parts: 'Repuestos'
};

const Products = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get('product');
    if (productId) {
      setExpandedProduct(productId);
      const product = featuredProducts.find(p => p.id === productId);
      if (product) {
        setSelectedCategory(product.category);
      }
    }
  }, [location]);

  const filteredProducts = selectedCategory === 'all'
    ? featuredProducts
    : featuredProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Nuestros Productos</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'all'
                ? 'bg-accent text-white'
                : 'bg-primary text-gray-300 hover:bg-primary-light'
            }`}
            onClick={() => setSelectedCategory('all')}
          >
            Todos
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === key
                  ? 'bg-accent text-white'
                  : 'bg-primary text-gray-300 hover:bg-primary-light'
              }`}
              onClick={() => setSelectedCategory(key as Category)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isExpanded={expandedProduct === product.id}
              onToggleExpand={(id) => setExpandedProduct(expandedProduct === id ? null : id)}
              isLoggedIn={false} // TODO: Connect with auth state
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;