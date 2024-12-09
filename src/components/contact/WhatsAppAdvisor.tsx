import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WhatsAppFormData } from '../../types/contact';

const WHATSAPP_NUMBER = '573203086071';

const WhatsAppAdvisor = () => {
  const [formData, setFormData] = useState<WhatsAppFormData>({
    message: '',
  });

  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    const words = value.trim().split(/\s+/).length;
    
    if (words <= 100 || value === '') {
      setWordCount(words);
      setFormData({ message: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(formData.message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    setFormData({ message: '' });
    setWordCount(0);
  };

  return (
    <div className="bg-primary p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Asesor de Ventas Personalizado</h2>
        <MessageCircle className="h-8 w-8 text-accent" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            placeholder="Escribe tu mensaje (máximo 100 palabras)"
          />
          <p className="text-sm text-gray-400 mt-1">
            {wordCount}/100 palabras
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-md bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold transition-colors flex items-center justify-center space-x-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Enviar por WhatsApp</span>
        </button>
      </form>
    </div>
  );
};

export default WhatsAppAdvisor;