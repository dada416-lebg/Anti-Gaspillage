import React, { useState } from 'react';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  daysUntilExpiry: number;
}

const foodItems: FoodItem[] = [
  { id: 1, name: 'Yaourt nature', image: '🥛', daysUntilExpiry: 7 },
  { id: 2, name: 'Yaourt aux fruits', image: '🥛', daysUntilExpiry: 5 },
  { id: 3, name: 'Lait frais', image: '🥛', daysUntilExpiry: 7 },
  { id: 4, name: 'Lait UHT', image: '🥛', daysUntilExpiry: 90 },
  { id: 5, name: 'Fromage frais', image: '🧀', daysUntilExpiry: 7 },
  { id: 6, name: 'Fromage à pâte dure', image: '🧀', daysUntilExpiry: 30 },
  { id: 7, name: 'Fromage à pâte molle', image: '🧀', daysUntilExpiry: 14 },
  { id: 8, name: 'Viande hachée', image: '🥩', daysUntilExpiry: 2 },
  { id: 9, name: 'Steak', image: '🥩', daysUntilExpiry: 3 },
  { id: 10, name: 'Poulet', image: '🍗', daysUntilExpiry: 3 },
  { id: 11, name: 'Poisson frais', image: '🐟', daysUntilExpiry: 2 },
  { id: 12, name: 'Fruits rouges', image: '🍓', daysUntilExpiry: 3 },
  { id: 13, name: 'Pommes', image: '🍎', daysUntilExpiry: 14 },
  { id: 14, name: 'Bananes', image: '🍌', daysUntilExpiry: 5 },
  { id: 15, name: 'Oranges', image: '🍊', daysUntilExpiry: 14 },
  { id: 16, name: 'Légumes feuilles', image: '🥬', daysUntilExpiry: 5 },
  { id: 17, name: 'Carottes', image: '🥕', daysUntilExpiry: 14 },
  { id: 18, name: 'Pommes de terre', image: '🥔', daysUntilExpiry: 30 },
  { id: 19, name: 'Pain frais', image: '🍞', daysUntilExpiry: 3 },
  { id: 20, name: 'Pain de mie', image: '🍞', daysUntilExpiry: 7 },
  { id: 21, name: 'Œufs', image: '🥚', daysUntilExpiry: 21 },
  { id: 22, name: 'Jus de fruits frais', image: '🧃', daysUntilExpiry: 7 },
  { id: 23, name: 'Jus de fruits pasteurisé', image: '🧃', daysUntilExpiry: 30 },
  { id: 24, name: 'Crème fraîche', image: '🥛', daysUntilExpiry: 7 },
  { id: 25, name: 'Beurre', image: '🧈', daysUntilExpiry: 14 },
  { id: 26, name: 'Margarine', image: '🧈', daysUntilExpiry: 30 },
  { id: 27, name: 'Tofu', image: '🧊', daysUntilExpiry: 7 },
  { id: 28, name: 'Tempeh', image: '🧊', daysUntilExpiry: 7 },
  { id: 29, name: 'Champignons', image: '🍄', daysUntilExpiry: 5 },
  { id: 30, name: 'Tomates', image: '🍅', daysUntilExpiry: 7 },
  { id: 31, name: 'Concombre', image: '🥒', daysUntilExpiry: 7 },
  { id: 32, name: 'Poivrons', image: '🫑', daysUntilExpiry: 7 },
  { id: 33, name: 'Aubergines', image: '🍆', daysUntilExpiry: 7 },
  { id: 34, name: 'Courgettes', image: '🥒', daysUntilExpiry: 7 },
  { id: 35, name: 'Brocoli', image: '🥦', daysUntilExpiry: 5 },
  { id: 36, name: 'Chou-fleur', image: '🥦', daysUntilExpiry: 7 },
  { id: 37, name: 'Épinards', image: '🥬', daysUntilExpiry: 5 },
  { id: 38, name: 'Laitue', image: '🥬', daysUntilExpiry: 5 },
  { id: 39, name: 'Avocat', image: '🥑', daysUntilExpiry: 5 },
  { id: 40, name: 'Mangue', image: '🥭', daysUntilExpiry: 5 },
  { id: 41, name: 'Ananas', image: '🍍', daysUntilExpiry: 5 },
  { id: 42, name: 'Kiwi', image: '🥝', daysUntilExpiry: 7 },
  { id: 43, name: 'Raisins', image: '🍇', daysUntilExpiry: 7 },
  { id: 44, name: 'Pêches', image: '🍑', daysUntilExpiry: 5 },
  { id: 45, name: 'Abricots', image: '🍑', daysUntilExpiry: 5 },
  { id: 46, name: 'Prunes', image: '🍇', daysUntilExpiry: 5 },
  { id: 47, name: 'Framboises', image: '🍓', daysUntilExpiry: 3 },
  { id: 48, name: 'Myrtilles', image: '🫐', daysUntilExpiry: 7 },
  { id: 49, name: 'Mûres', image: '🫐', daysUntilExpiry: 3 },
  { id: 50, name: 'Fruits de la passion', image: '🥭', daysUntilExpiry: 7 }
];

const QUESTIONS_PER_GAME = 5;

interface GameItem extends FoodItem {
  expiryDate: Date;
}

const ExpiryDateGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentItem, setCurrentItem] = useState<GameItem | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [questionsAsked, setQuestionsAsked] = useState(0);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setMessage('');
    setQuestionsAsked(0);
    const shuffledItems = [...foodItems].sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_GAME);
    const items = shuffledItems.map(item => ({
      ...item,
      expiryDate: new Date(Date.now() + item.daysUntilExpiry * 24 * 60 * 60 * 1000)
    }));
    setCurrentItem(items[0]);
  };

  const checkAnswer = (days: number) => {
    if (!currentItem) return;

    const difference = Math.abs(days - currentItem.daysUntilExpiry);
    if (difference <= 1) {
      setScore(score + 2);
      setMessage('Excellent ! C\'est exact !');
    } else if (difference <= 2) {
      setScore(score + 1);
      setMessage('Pas mal ! C\'était proche !');
    } else {
      setMessage(`Dommage ! C'était ${currentItem.daysUntilExpiry} jours`);
    }

    setTimeout(() => {
      setMessage('');
      setQuestionsAsked(questionsAsked + 1);
      if (questionsAsked + 1 >= QUESTIONS_PER_GAME) {
        setGameOver(true);
      } else {
        const remainingItems = foodItems.filter(item => item.id !== currentItem.id);
        const nextItem = remainingItems[Math.floor(Math.random() * remainingItems.length)];
        setCurrentItem({
          ...nextItem,
          expiryDate: new Date(Date.now() + nextItem.daysUntilExpiry * 24 * 60 * 60 * 1000)
        });
      }
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Jeu des Dates de Péremption</h2>
      
      {!currentItem && !gameOver && (
        <button
          onClick={startGame}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Commencer le jeu
        </button>
      )}

      {currentItem && !gameOver && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((questionsAsked + 1) / QUESTIONS_PER_GAME) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Question {questionsAsked + 1} sur {QUESTIONS_PER_GAME}
            </p>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{currentItem?.image}</div>
            <h3 className="text-xl font-semibold">Combien de jours avant la date de péremption ?</h3>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[2, 3, 5, 7, 14].map((days) => (
              <button
                key={days}
                onClick={() => checkAnswer(days)}
                className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {days} jours
              </button>
            ))}
          </div>

          {message && (
            <p className={`mt-4 text-lg ${message.includes('Excellent') ? 'text-green-500' : message.includes('Pas mal') ? 'text-yellow-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </div>
      )}

      {gameOver && (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Partie terminée !</h3>
          <p className="text-xl mb-4">Score final : {score}</p>
          <button
            onClick={startGame}
            className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpiryDateGame; 