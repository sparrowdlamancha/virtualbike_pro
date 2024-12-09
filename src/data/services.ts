import { City, Technician, MaintenanceType, ServiceLocation } from '../types/services';

export const cities: City[] = [
  { id: 'neiva', name: 'Neiva', coordinates: { lat: 2.9273, lng: -75.2819 } },
  { id: 'ibague', name: 'Ibague', coordinates: { lat: 4.4389, lng: -75.2322 } },
  { id: 'cali', name: 'Cali', coordinates: { lat: 3.4516, lng: -76.5320 } },
  { id: 'bogota', name: 'Bogotá', coordinates: { lat: 4.7110, lng: -74.0721 } },
];

export const technicians: Technician[] = [
  { id: 'juan', name: 'Juan Coronado', city: 'neiva' },
  { id: 'sofia', name: 'Sofia Salcedo', city: 'ibague' },
  { id: 'santiago', name: 'Santiago González', city: 'cali' },
  { id: 'julian', name: 'Julian Ramírez', city: 'bogota' },
];

export const maintenanceTypes: MaintenanceType[] = [
  { id: 'general', name: 'Mantenimiento General' },
  { id: 'suspension', name: 'Mantenimiento de Suspensión' },
  { id: 'wheels', name: 'Mantenimiento de Rines' },
  { id: 'parts', name: 'Cambio de Partes' },
];

export const serviceLocations: ServiceLocation[] = [
  {
    id: 'neiva-store',
    name: 'VirtualBike Neiva',
    type: 'store',
    city: 'neiva',
    coordinates: { lat: 2.9273, lng: -75.2819 }
  },
  {
    id: 'neiva-tech',
    name: 'Centro Técnico Neiva',
    type: 'technical_center',
    city: 'neiva',
    coordinates: { lat: 2.9300, lng: -75.2800 }
  },
  {
    id: 'ibague-store',
    name: 'VirtualBike Ibagué',
    type: 'store',
    city: 'ibague',
    coordinates: { lat: 4.4389, lng: -75.2322 }
  },
  {
    id: 'ibague-tech',
    name: 'Centro Técnico Ibagué',
    type: 'technical_center',
    city: 'ibague',
    coordinates: { lat: 4.4400, lng: -75.2300 }
  },
  {
    id: 'cali-store',
    name: 'VirtualBike Cali',
    type: 'store',
    city: 'cali',
    coordinates: { lat: 3.4516, lng: -76.5320 }
  },
  {
    id: 'cali-tech',
    name: 'Centro Técnico Cali',
    type: 'technical_center',
    city: 'cali',
    coordinates: { lat: 3.4530, lng: -76.5300 }
  },
  {
    id: 'bogota-store',
    name: 'VirtualBike Bogotá',
    type: 'store',
    city: 'bogota',
    coordinates: { lat: 4.7110, lng: -74.0721 }
  },
  {
    id: 'bogota-tech',
    name: 'Centro Técnico Bogotá',
    type: 'technical_center',
    city: 'bogota',
    coordinates: { lat: 4.7130, lng: -74.0700 }
  },
];