import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Bike } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Bike className="h-8 w-8 text-accent" />
            <span className="text-white text-xl font-bold">VirtualBike Store</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-accent-light">Inicio</Link>
            <Link to="/nosotros" className="text-white hover:text-accent-light">Nosotros</Link>
            <Link to="/productos" className="text-white hover:text-accent-light">Productos</Link>
            <Link to="/servicios" className="text-white hover:text-accent-light">Servicios</Link>
            <Link to="/contacto" className="text-white hover:text-accent-light">Contacto</Link>
            <Link to="/login" className="text-white hover:text-accent-light">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/carrito" className="text-white hover:text-accent-light">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-white hover:text-accent-light">Inicio</Link>
            <Link to="/nosotros" className="block text-white hover:text-accent-light">Nosotros</Link>
            <Link to="/productos" className="block text-white hover:text-accent-light">Productos</Link>
            <Link to="/servicios" className="block text-white hover:text-accent-light">Servicios</Link>
            <Link to="/contacto" className="block text-white hover:text-accent-light">Contacto</Link>
            <Link to="/login" className="block text-white hover:text-accent-light">Login</Link>
            <Link to="/carrito" className="block text-white hover:text-accent-light">Carrito</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;