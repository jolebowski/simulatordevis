export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie D.',
      company: 'Boutique en ligne',
      content: 'Le simulateur m\'a permis de comprendre rapidement les coûts de mon projet. Très intuitif !',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
    },
    {
      name: 'Thomas L.',
      company: 'Cabinet d\'architecte',
      content: 'Un outil précis et professionnel qui m\'a fait gagner beaucoup de temps dans ma recherche de prestataire.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
    },
    {
      name: 'Sophie M.',
      company: 'Restaurant',
      content: 'Excellent service ! Le devis était clair et correspondait parfaitement à mes besoins.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Ce qu'en disent nos clients</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}