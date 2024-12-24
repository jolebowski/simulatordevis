import { useState } from 'react';
import { Service, ServiceOption } from '../types';

interface OptionsSelectorProps {
  selectedServices: Service[];
  onNext: (selectedOptions: ServiceOption[]) => void;
}

export default function OptionsSelector({ selectedServices, onNext }: OptionsSelectorProps) {
  const [selectedOptions, setSelectedOptions] = useState<ServiceOption[]>([]);

  const toggleOption = (option: ServiceOption) => {
    setSelectedOptions(prev =>
      prev.find(o => o.id === option.id)
        ? prev.filter(o => o.id !== option.id)
        : [...prev, option]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personnalisez vos options</h2>
      {selectedServices.map((service) => (
        <div key={service.id} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {service.options?.map((option) => (
              <div
                key={option.id}
                className={`p-4 rounded-lg border-2 cursor-pointer ${
                  selectedOptions.find(o => o.id === option.id)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => toggleOption(option)}
              >
                <div className="flex justify-between items-center">
                  <span>{option.name}</span>
                  <span className="font-semibold">{option.price}€</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-8 text-center">
        <button
          onClick={() => onNext(selectedOptions)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Voir le récapitulatif
        </button>
      </div>
    </div>
  );
}