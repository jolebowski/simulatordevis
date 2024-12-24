import { useState } from 'react';
import { Service, ServiceOption, QuoteFormData } from '../types';

interface QuoteFormProps {
  selectedServices: Service[];
  selectedOptions: ServiceOption[];
  totalPrice: number;
  onSubmit: (data: QuoteFormData) => void;
}

export default function QuoteForm({
  selectedServices,
  selectedOptions,
  totalPrice,
  onSubmit,
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      selectedServices: selectedServices.map(s => s.id),
      selectedOptions: selectedOptions.map(o => o.id),
      totalPrice,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Récapitulatif de votre devis</h2>
        <div className="space-y-4 mb-6">
          {selectedServices.map((service) => (
            <div key={service.id} className="flex justify-between">
              <span>{service.name}</span>
              <span className="font-semibold">{service.basePrice}€</span>
            </div>
          ))}
          {selectedOptions.map((option) => (
            <div key={option.id} className="flex justify-between text-gray-600">
              <span>+ {option.name}</span>
              <span>{option.price}€</span>
            </div>
          ))}
          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{totalPrice}€</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Téléphone (optionnel)
            </label>
            <input
              type="tel"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message (optionnel)
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Recevoir mon devis par email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}