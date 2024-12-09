import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { featuredProducts } from '../data/products';

const ProductSlider = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % featuredProducts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((current) => 
      current === 0 ? featuredProducts.length - 1 : current - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((current) => (current + 1) % featuredProducts.length);
  };

  const handleLearnMore = (productId: string) => {
    navigate(`/productos?product=${productId}`);
  };

  return (
    <div className="relative overflow-hidden bg-primary-dark p-8 rounded-lg">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-full flex-shrink-0 px-4"
            style={{ flex: '0 0 100%' }}
          >
            <div className="bg-primary rounded-lg p-6 text-white">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <button 
                onClick={() => handleLearnMore(product.id)}
                className="bg-accent hover:bg-accent-light text-white px-6 py-2 rounded-full transition-colors"
              >
                Saber más
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredProducts.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-accent w-4' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;