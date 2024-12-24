export const services = [
  {
    id: 'website',
    name: 'Création de site vitrine',
    description: 'Un site web professionnel et responsive pour présenter votre activité',
    basePrice: 500,
    options: [
      { id: 'pages-5', name: '5 pages supplémentaires', price: 250 },
      { id: 'seo-basic', name: 'SEO basique', price: 200 },
      { id: 'hosting', name: 'Hébergement annuel', price: 120 },
    ],
  },
  {
    id: 'seo',
    name: 'Audit SEO',
    description: 'Analyse complète et optimisation de votre présence en ligne',
    basePrice: 300,
    options: [
      { id: 'keyword-research', name: 'Recherche de mots-clés', price: 150 },
      { id: 'competitor-analysis', name: 'Analyse concurrentielle', price: 200 },
    ],
  },
  {
    id: 'maintenance',
    name: 'Maintenance et support',
    description: 'Support technique et mises à jour régulières',
    basePrice: 50,
    options: [
      { id: 'priority-support', name: 'Support prioritaire', price: 30 },
      { id: 'security', name: 'Sécurité renforcée', price: 40 },
    ],
  },
];