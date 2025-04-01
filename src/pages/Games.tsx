import React, { useState } from 'react';
import QuizGame from '../components/games/QuizGame';
import ExpiryDateGame from '../components/games/ExpiryDateGame';
import StorageGame from '../components/games/StorageGame';

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const renderGame = () => {
    switch (selectedGame) {
      case 'quiz':
        return <QuizGame />;
      case 'expiry':
        return <ExpiryDateGame />;
      case 'storage':
        return <StorageGame />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quiz Anti-Gaspillage</h3>
              <p className="text-gray-600 mb-4">
                Testez vos connaissances sur les bonnes pratiques anti-gaspillage.
              </p>
              <button
                onClick={() => setSelectedGame('quiz')}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
              >
                Jouer
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Jeu des Dates de Péremption</h3>
              <p className="text-gray-600 mb-4">
                Testez vos connaissances sur les dates de péremption des aliments.
              </p>
              <button
                onClick={() => setSelectedGame('expiry')}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
              >
                Jouer
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Jeu de Conservation</h3>
              <p className="text-gray-600 mb-4">
                Découvrez où conserver vos aliments pour éviter le gaspillage.
              </p>
              <button
                onClick={() => setSelectedGame('storage')}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
              >
                Jouer
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Jeux Anti-Gaspillage</h1>
      
      {selectedGame && (
        <button
          onClick={() => setSelectedGame(null)}
          className="mb-6 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
        >
          Retour aux jeux
        </button>
      )}

      {renderGame()}
    </div>
  );
};

export default Games; 