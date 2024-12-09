import { Product } from '../types/product';

export const featuredProducts: Product[] = [
  {
    id: '1',
    title: 'Mountain Explorer X1',
    description: 'Bicicleta todo terreno con suspensión de alta gama',
    provider: 'Trek',
    price: 2499.99,
    category: 'mountain',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPromotion: true,
    promotionPrice: 2199.99,
    likes: 45
  },
  {
    id: '2',
    title: 'Road Master Pro',
    description: 'Bicicleta de ruta profesional, perfecta para competición',
    provider: 'Specialized',
    price: 3299.99,
    category: 'road',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    likes: 32
  },
  {
    id: '3',
    title: 'Urban Commuter E1',
    description: 'Bicicleta eléctrica para ciudad con autonomía de 80km',
    provider: 'Cannondale',
    price: 1899.99,
    category: 'ebike',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    likes: 28
  },
  {
    id: '4',
    title: 'Casco Aero Pro',
    description: 'Casco aerodinámico con certificación de seguridad',
    provider: 'Giro',
    price: 199.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1557803175-2d5c5cca5904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPromotion: true,
    promotionPrice: 159.99,
    likes: 56
  },
  {
    id: '5',
    title: 'Jersey Elite',
    description: 'Jersey profesional con tejido transpirable',
    provider: 'Rapha',
    price: 129.99,
    category: 'clothing-men',
    image: 'https://images.unsplash.com/photo-1565677913671-ce6140b7e318?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    likes: 41
  }
];