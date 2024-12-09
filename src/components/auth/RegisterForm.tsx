import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from './InputField';
import PhoneInput from './PhoneInput';
import { register } from '../../services/api';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    username: '',
    email: '',
    confirmEmail: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emailConsent: false,
    smsConsent: false,
    dataConsent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.email !== formData.confirmEmail) {
      setError('Los correos no coinciden');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    if (!formData.dataConsent) {
      setError('Debes aceptar el tratamiento de datos');
      return;
    }

    try {
      const { confirmEmail, confirmPassword, ...registrationData } = formData;
      await register(registrationData);
      navigate('/login', { 
        state: { message: '¡Registro exitoso! Por favor, inicia sesión.' }
      });
    } catch (err: any) {
      setError(err.message || 'Error durante el registro. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-8 bg-primary p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Registro de Usuario</h2>
          <p className="mt-2 text-gray-300">Crea tu cuenta en VirtualBike Store</p>
          {error && (
            <div className="mt-4 p-3 bg-red-500 text-white rounded-md">
              {error}
            </div>
          )}
        </div>

        {/* Rest of the form JSX remains exactly the same */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Primer Nombre *"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Segundo Nombre"
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
            <InputField
              label="Primer Apellido *"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Segundo Apellido"
              type="text"
              name="secondLastName"
              value={formData.secondLastName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-6">
            <InputField
              label="Nombre de Usuario *"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <InputField
              label="Correo Electrónico *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Confirmar Correo Electrónico *"
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              required
            />
            <PhoneInput
              value={formData.phone}
              onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
            />
          </div>

          <div className="space-y-6">
            <div className="relative">
              <InputField
                label="Contraseña *"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative">
              <InputField
                label="Confirmar Contraseña *"
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[38px] text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="emailConsent"
                name="emailConsent"
                type="checkbox"
                checked={formData.emailConsent}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent-light"
              />
              <label htmlFor="emailConsent" className="ml-2 block text-sm text-gray-300">
                Acepto recibir correos electrónicos promocionales
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="smsConsent"
                name="smsConsent"
                type="checkbox"
                checked={formData.smsConsent}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent-light"
              />
              <label htmlFor="smsConsent" className="ml-2 block text-sm text-gray-300">
                Acepto recibir mensajes SMS promocionales
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="dataConsent"
                name="dataConsent"
                type="checkbox"
                checked={formData.dataConsent}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent-light"
              />
              <label htmlFor="dataConsent" className="ml-2 block text-sm text-gray-300">
                Acepto el tratamiento de datos personales *
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!formData.dataConsent}
            className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white transition-colors ${
              formData.dataConsent 
                ? 'bg-accent hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-light cursor-pointer' 
                : 'bg-gray-500 cursor-not-allowed'
            }`}
          >
            Registrarse
          </button>

          <div className="text-center">
            <p className="text-gray-300">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="text-accent hover:text-accent-light font-medium">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;