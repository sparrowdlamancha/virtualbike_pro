import React from 'react';
import { Users, Calendar, Truck, MessageCircle, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-gray-300">Impulsando el futuro del ciclismo en Colombia</p>
        </div>

        {/* Vision, Mission, Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-accent mr-3" />
              <h2 className="text-2xl font-bold text-white">Visión</h2>
            </div>
            <p className="text-gray-300">
              Ser la plataforma líder en Colombia que conecta apasionados del ciclismo con productos 
              y servicios de calidad, impulsando el crecimiento de pequeños y medianos emprendedores 
              del sector.
            </p>
          </div>

          <div className="bg-primary p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-accent mr-3" />
              <h2 className="text-2xl font-bold text-white">Misión</h2>
            </div>
            <p className="text-gray-300">
              Facilitar el acceso al mercado ciclista mediante una plataforma digital innovadora 
              que conecta vendedores, técnicos y usuarios, promoviendo el desarrollo económico 
              y la movilidad sostenible.
            </p>
          </div>

          <div className="bg-primary p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-accent mr-3" />
              <h2 className="text-2xl font-bold text-white">Objetivos</h2>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Impulsar el crecimiento de emprendedores del sector</li>
              <li>• Aumentar la visibilidad de productos y servicios</li>
              <li>• Generar empleos en el sector de servicios</li>
              <li>• Mejorar la experiencia del cliente</li>
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-primary-dark p-6 rounded-lg text-center">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Apoyo a Emprendedores</h3>
            <p className="text-gray-300">
              Plataforma digital para aumentar la visibilidad de productos y servicios
            </p>
          </div>

          <div className="bg-primary-dark p-6 rounded-lg text-center">
            <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Agendamiento de Servicios</h3>
            <p className="text-gray-300">
              Sistema de citas para mantenimiento con técnicos autorizados
            </p>
          </div>

          <div className="bg-primary-dark p-6 rounded-lg text-center">
            <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Servicio de Acarreos</h3>
            <p className="text-gray-300">
              Red de motocarros para entregas y transportes especializados
            </p>
          </div>

          <div className="bg-primary-dark p-6 rounded-lg text-center">
            <MessageCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Asesoría Especializada</h3>
            <p className="text-gray-300">
              Atención personalizada vía WhatsApp con expertos en ciclismo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;