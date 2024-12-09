import React, { useState, useEffect } from 'react';
import { cities, technicians, maintenanceTypes } from '../../data/services';
import { AppointmentFormData } from '../../types/services';

const TechnicalAppointmentForm = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    technician: '',
    maintenanceType: '',
    date: '',
    time: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const availableTechnicians = technicians.filter(tech => tech.city === formData.city);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement API call to save appointment
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Cita agendada exitosamente');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        technician: '',
        maintenanceType: '',
        date: '',
        time: '',
      });
    } catch (error) {
      alert('Error al agendar la cita');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Agenda tu Cita Técnica</h2>
      
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
          <label htmlFor="technician" className="block text-sm font-medium text-gray-300 mb-1">
            Técnico
          </label>
          <select
            id="technician"
            name="technician"
            required
            value={formData.technician}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
            disabled={!formData.city}
          >
            <option value="">Selecciona un técnico</option>
            {availableTechnicians.map(tech => (
              <option key={tech.id} value={tech.id}>
                {tech.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="maintenanceType" className="block text-sm font-medium text-gray-300 mb-1">
            Tipo de Mantenimiento
          </label>
          <select
            id="maintenanceType"
            name="maintenanceType"
            required
            value={formData.maintenanceType}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Selecciona el tipo de mantenimiento</option>
            {maintenanceTypes.map(type => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
            Fecha
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
            Hora
          </label>
          <input
            type="time"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            min="08:00"
            max="18:00"
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

export default TechnicalAppointmentForm;