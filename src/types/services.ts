export interface Technician {
  id: string;
  name: string;
  city: string;
}

export interface City {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface MaintenanceType {
  id: string;
  name: string;
}

export interface ServiceLocation {
  id: string;
  name: string;
  type: 'store' | 'technical_center';
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  technician?: string;
  maintenanceType?: string;
  date?: string;
  time?: string;
  address?: string;
  neighborhood?: string;
}