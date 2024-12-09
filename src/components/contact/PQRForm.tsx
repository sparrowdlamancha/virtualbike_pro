import React, { useState } from 'react';
import { PQRFormData } from '../../types/contact';

const PQRForm = () => {
  const [formData, setFormData] = useState<PQRFormData>({
    fullName: '',
    email: '',
    phone: '',
    requestType: 'petition',
    area: 'sales',
    message: '',
    sendCopy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    if (name === 'message') {
      const words = value.trim().split(/\s+/).length;
      if (words <= 200 || value === '') {
        setWordCount(words);
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: newValue }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement API call to save PQR
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('PQR enviada exitosamente');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        requestType: 'petition',
        area: 'sales',
        message: '',
        sendCopy: false,
      });
      setWordCount(0);
    } catch (error) {
      alert('Error al enviar la PQR');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-primary p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Formulario de PQR</h2>
      
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Correo Electrónico
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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Teléfono
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-300 sm:text-sm">
              +57
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-r-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="requestType" className="block text-sm font-medium text-gray-300 mb-1">
            Tipo de Solicitud
          </label>
          <select
            id="requestType"
            name="requestType"
            required
            value={formData.requestType}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="petition">Petición</option>
            <option value="complaint">Queja</option>
            <option value="claim">Reclamo</option>
            <option value="congratulation">Felicitación</option>
          </select>
        </div>

        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-300 mb-1">
            Área
          </label>
          <select
            id="area"
            name="area"
            required
            value={formData.area}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="sales">Ventas</option>
            <option value="store">Tienda Física</option>
            <option value="technical">Servicio Técnico</option>
            <option value="whatsapp">Asesor Comercial WhatsApp</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            placeholder="Máximo 200 palabras"
          />
          <p className="text-sm text-gray-400 mt-1">
            {wordCount}/200 palabras
          </p>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="sendCopy"
            name="sendCopy"
            checked={formData.sendCopy}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent-light"
          />
          <label htmlFor="sendCopy" className="ml-2 block text-sm text-gray-300">
            Enviar copia al correo electrónico
          </label>
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
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default PQRForm;