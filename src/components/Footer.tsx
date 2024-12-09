import React from 'react';
import { Code, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="flex items-center justify-center md:justify-start">
            <Code className="h-12 w-12 text-accent" />
          </div>

          {/* Developer Team Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Developer Team 8</h3>
            <p className="text-gray-300">Especialistas en desarrollo web</p>
          </div>

          {/* Social Media Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-accent-light">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent-light">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent-light">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent-light">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-4 border-t border-gray-700">
          <p>© 2024 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;