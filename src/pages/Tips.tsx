import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Tip {
  id: number;
  title: string;
  description: string;
  category: 'cuisine' | 'achats' | 'conservation' | 'organisation';
  icon: string;
}

const Tips = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tips: Tip[] = [
    {
      id: 1,
      title: 'Planification des repas',
      description: 'Planifiez vos repas à l\'avance pour éviter les achats impulsifs et le gaspillage.',
      category: 'organisation',
      icon: '📝'
    },
    {
      id: 2,
      title: 'Liste de courses',
      description: 'Faites une liste précise de ce dont vous avez besoin et respectez-la.',
      category: 'achats',
      icon: '🛒'
    },
    {
      id: 3,
      title: 'Stockage intelligent',
      description: 'Organisez votre frigo en plaçant les aliments périssables devant.',
      category: 'conservation',
      icon: '❄️'
    },
    {
      id: 4,
      title: 'Recettes avec restes',
      description: 'Transformez vos restes en nouvelles recettes créatives.',
      category: 'cuisine',
      icon: '🍳'
    },
    {
      id: 5,
      title: 'Congélation',
      description: 'Congelez les aliments que vous ne pourrez pas consommer à temps.',
      category: 'conservation',
      icon: '🧊'
    },
    {
      id: 6,
      title: 'Portions adaptées',
      description: 'Adaptez les quantités cuisinées au nombre de personnes.',
      category: 'cuisine',
      icon: '⚖️'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous', icon: '🌟' },
    { id: 'cuisine', name: 'Cuisine', icon: '🍳' },
    { id: 'achats', name: 'Achats', icon: '🛒' },
    { id: 'conservation', name: 'Conservation', icon: '❄️' },
    { id: 'organisation', name: 'Organisation', icon: '📝' }
  ];

  const filteredTips = selectedCategory === 'all'
    ? tips
    : tips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
        Conseils Anti-Gaspillage
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              selectedCategory === category.id
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Tips Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="text-4xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-green-100 p-8 rounded-lg text-center mt-8"
      >
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Vous avez d'autres astuces ?
        </h2>
        <p className="text-gray-700 mb-6">
          Partagez vos conseils avec la communauté pour aider d'autres personnes à réduire leur gaspillage
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors">
          Partager un conseil
        </button>
      </motion.div>
    </div>
  );
};

export default Tips; 