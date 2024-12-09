import React from 'react';
import ProductSlider from '../components/ProductSlider';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Featured Products Slider */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Productos Destacados</h2>
        <ProductSlider />
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Categorías Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-primary rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <button className="text-accent hover:text-accent-light font-semibold">
                  Ver más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    title: "Bicicletas de Montaña",
    description: "Perfectas para aventuras off-road y senderos desafiantes",
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bicicletas de Ruta",
    description: "Diseñadas para velocidad y rendimiento en carretera",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bicicletas Urbanas",
    description: "Ideales para el transporte diario en la ciudad",
    image: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default Home;