import React from 'react';
import { motion } from 'framer-motion';

interface StatCard {
  title: string;
  value: string;
  icon: string;
  trend: 'up' | 'down' | 'neutral';
}

const Dashboard = () => {
  const stats: StatCard[] = [
    {
      title: 'Aliments sauvés',
      value: '12 kg',
      icon: '🥬',
      trend: 'up'
    },
    {
      title: 'Économies réalisées',
      value: '45€',
      icon: '💰',
      trend: 'up'
    },
    {
      title: 'Jeux complétés',
      value: '8/10',
      icon: '🏆',
      trend: 'neutral'
    },
    {
      title: 'Impact CO2',
      value: '-2.5 kg',
      icon: '🌍',
      trend: 'up'
    }
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
        Mon Tableau de Bord
      </h1>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold text-green-800">{stat.value}</p>
              <span className={getTrendColor(stat.trend)}>
                {stat.trend === 'up' && '↑'}
                {stat.trend === 'down' && '↓'}
                {stat.trend === 'neutral' && '→'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Vos Progrès</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Tri des aliments</span>
              <span className="text-green-600">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Recettes anti-gaspillage</span>
              <span className="text-green-600">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Quiz du gaspillage</span>
              <span className="text-green-600">40%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Vos Réalisations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['🌱', '♻️', '💡', '🏆'].map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{achievement}</div>
              <p className="text-sm text-gray-600">Réalisation {index + 1}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 