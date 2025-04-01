import React from 'react';
import { Link } from 'react-router-dom';
import StatsSection from '../components/StatsSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 h-[50vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Cercles décoratifs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-4xl text-center z-10">
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Luttez contre le Gaspillage Alimentaire
          </h1>
          <p className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Découvrez des solutions simples et efficaces pour réduire le gaspillage alimentaire et préserver notre planète.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/tips"
              className="group relative px-8 py-3 bg-white text-green-600 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10">Découvrir les conseils</span>
              <div className="absolute inset-0 bg-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link
              to="/games"
              className="group relative px-8 py-3 border-2 border-white text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:bg-white hover:text-green-600 hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10">Jouer et apprendre</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Statistiques */}
      <StatsSection />
    </div>
  );
};

export default Home; 