import { Calculator } from 'lucide-react';

export default function Hero({ onStart }: { onStart: () => void }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
            Calculez votre devis en quelques clics !
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Notre simulateur interactif vous permet de personnaliser vos besoins et de recevoir un devis précis immédiatement.
          </p>
          <button
            onClick={onStart}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Commencer le simulateur
          </button>
        </div>
      </div>
    </div>
  );
}