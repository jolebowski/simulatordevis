import { useState } from 'react';
import { Service } from '../types';
import { services } from '../data/services';

interface ServiceSelectorProps {
  onNext: (selectedServices: Service[]) => void;
}

export default function ServiceSelector({ onNext }: ServiceSelectorProps) {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const toggleService = (service: Service) => {
    setSelectedServices(prev =>
      prev.find(s => s.id === service.id)
        ? prev.filter(s => s.id !== service.id)
        : [...prev, service]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sélectionnez vos services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
              selectedServices.find(s => s.id === service.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => toggleService(service)}
          >
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-blue-600 font-semibold">
              À partir de {service.basePrice}€
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => onNext(selectedServices)}
          disabled={selectedServices.length === 0}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuer
        </button>
      </div>
    </div>
  );
}