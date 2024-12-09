import React, { useState } from 'react';
import { cities } from '../../data/services';
import { AppointmentFormData } from '../../types/services';

const DeliveryAppointmentForm = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    neighborhood: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement API call to save delivery appointment
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Domicilio agendado exitosamente');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        neighborhood: '',
      });
    } catch (error) {
      alert('Error al agendar el domicilio');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Agenda tu Domicilio</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
            Ciudad
          </label>
          <select
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Selecciona una ciudad</option>
            {cities.map(city => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-300 mb-1">
            Barrio
          </label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            required
            value={formData.neighborhood}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md text-white font-semibold transition-colors ${
            isSubmitting
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-accent hover:bg-accent-light'
          }`}
        >
          {isSubmitting ? 'Agendando...' : 'Agendar'}
        </button>
      </form>
    </div>
  );
};

export default DeliveryAppointmentForm;