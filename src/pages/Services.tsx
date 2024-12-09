import React from 'react';
import TechnicalAppointmentForm from '../components/services/TechnicalAppointmentForm';
import DeliveryAppointmentForm from '../components/services/DeliveryAppointmentForm';
import ServiceMap from '../components/services/ServiceMap';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Servicios</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechnicalAppointmentForm />
          <DeliveryAppointmentForm />
          <ServiceMap />
        </div>
      </div>
    </div>
  );
};

export default Services;