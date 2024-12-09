import React from 'react';
import PQRForm from '../components/contact/PQRForm';
import WhatsAppAdvisor from '../components/contact/WhatsAppAdvisor';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Contacto</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PQRForm />
          <WhatsAppAdvisor />
        </div>
      </div>
    </div>
  );
};

export default Contact;