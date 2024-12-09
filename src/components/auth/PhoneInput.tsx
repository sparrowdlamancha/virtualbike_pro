import React from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;
    // Only allow numbers and plus sign
    if (/^[0-9+]*$/.test(phoneNumber)) {
      onChange(phoneNumber);
    }
  };

  return (
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
        Número de Teléfono
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-300 sm:text-sm">
          +57
        </span>
        <input
          type="tel"
          id="phone"
          value={value}
          onChange={handleChange}
          className="appearance-none relative block w-full px-3 py-2 border border-gray-700 rounded-r-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
          placeholder="300 123 4567"
        />
      </div>
    </div>
  );
};

export default PhoneInput;