import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  isExpanded?: boolean;
  onToggleExpand: (id: string) => void;
  isLoggedIn?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isExpanded = false,
  onToggleExpand,
  isLoggedIn = false,
}) => {
  return (
    <div
      className={`bg-primary rounded-lg overflow-hidden transition-all duration-300 cursor-pointer
        ${isExpanded ? 'fixed inset-4 z-50 overflow-y-auto' : 'relative'}`}
      onClick={() => onToggleExpand(product.id)}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className={`w-full object-cover ${isExpanded ? 'h-96' : 'h-48'}`}
        />
        {product.isPromotion && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full">
            Promoción
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
            <p className="text-gray-300 text-sm mb-2">{product.description}</p>
            <p className="text-accent">Proveedor: {product.provider}</p>
          </div>
          <div className="text-right">
            {product.isPromotion ? (
              <>
                <p className="text-gray-400 line-through">${product.price}</p>
                <p className="text-accent font-bold text-xl">${product.promotionPrice}</p>
              </>
            ) : (
              <p className="text-white font-bold text-xl">${product.price}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-1 text-gray-300 hover:text-accent transition-colors">
            <Heart className="h-5 w-5" />
            <span>{product.likes}</span>
          </button>
          
          <div className="flex space-x-2">
            {isLoggedIn && (
              <button className="bg-primary-light hover:bg-primary text-white px-4 py-2 rounded-full transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            )}
            <button className="bg-accent hover:bg-accent-light text-white px-6 py-2 rounded-full transition-colors">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;