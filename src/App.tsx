import { useState } from 'react';
import { Service, ServiceOption, QuoteFormData } from './types';
import { calculateTotal } from './utils/pricing';
import Hero from './components/Hero';
import ServiceSelector from './components/ServiceSelector';
import OptionsSelector from './components/OptionsSelector';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';

function App() {
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<ServiceOption[]>([]);

  const handleQuoteSubmit = (data: QuoteFormData) => {
    // Here you would typically send this data to your backend
    console.log('Quote submitted:', data);
    alert('Merci ! Votre demande de devis a été envoyée avec succès.');
    // Reset form
    setStep(0);
    setSelectedServices([]);
    setSelectedOptions([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {step === 0 && <Hero onStart={() => setStep(1)} />}
      
      <main className="py-12">
        {step === 1 && (
          <ServiceSelector
            onNext={(services) => {
              setSelectedServices(services);
              setStep(2);
            }}
          />
        )}
        
        {step === 2 && (
          <OptionsSelector
            selectedServices={selectedServices}
            onNext={(options) => {
              setSelectedOptions(options);
              setStep(3);
            }}
          />
        )}
        
        {step === 3 && (
          <QuoteForm
            selectedServices={selectedServices}
            selectedOptions={selectedOptions}
            totalPrice={calculateTotal(selectedServices, selectedOptions)}
            onSubmit={handleQuoteSubmit}
          />
        )}
      </main>

      {step === 0 && <Testimonials />}
    </div>
  );
}

export default App;