import React, { useState, useEffect } from 'react';
import { cities, serviceLocations } from '../../data/services';

const ServiceMap = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [locationType, setLocationType] = useState<'store' | 'technical_center'>('store');

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const handleLocationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocationType(e.target.value as 'store' | 'technical_center');
  };

  const filteredLocations = serviceLocations.filter(
    location => location.city === selectedCity && location.type === locationType
  );

  return (
    <div className="bg-primary p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Ubicaciones</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
            Elige tu ciudad
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
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
          <label htmlFor="locationType" className="block text-sm font-medium text-gray-300 mb-1">
            Tipo de ubicación
          </label>
          <select
            id="locationType"
            value={locationType}
            onChange={handleLocationTypeChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="store">Tienda</option>
            <option value="technical_center">Centro Técnico</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-white font-semibold mb-4">Ubicaciones encontradas:</h3>
        {filteredLocations.length > 0 ? (
          <ul className="space-y-2">
            {filteredLocations.map(location => (
              <li key={location.id} className="text-gray-300">
                {location.name}
                <br />
                <span className="text-sm text-gray-400">
                  Lat: {location.coordinates.lat}, Lng: {location.coordinates.lng}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">
            {selectedCity ? 'No hay ubicaciones disponibles para los filtros seleccionados' : 'Selecciona una ciudad para ver las ubicaciones'}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceMap;