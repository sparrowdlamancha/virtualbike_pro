import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="h-[600px] relative">
      <img
        src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        alt="Bike Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">VirtualBike Store</h1>
          <p className="text-xl mb-8">Tu tienda de bicicletas de confianza</p>
          <Link 
            to="/productos" 
            className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full inline-block transition-colors"
          >
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;