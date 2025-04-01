import React, { useState } from 'react';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  correctStorage: 'frigo' | 'congelateur' | 'placard' | 'fruits-legumes';
  explanation: string;
}

const foodItems: FoodItem[] = [
  { 
    id: 1, 
    name: 'Yaourt nature', 
    image: '🥛', 
    correctStorage: 'frigo',
    explanation: 'Les yaourts doivent être conservés au réfrigérateur pour maintenir leur fraîcheur et éviter la prolifération des bactéries.'
  },
  { 
    id: 2, 
    name: 'Yaourt aux fruits', 
    image: '🥛', 
    correctStorage: 'frigo',
    explanation: 'Les yaourts aux fruits se conservent également au réfrigérateur pour maintenir leur texture et leur goût.'
  },
  { 
    id: 3, 
    name: 'Lait frais', 
    image: '🥛', 
    correctStorage: 'frigo',
    explanation: 'Le lait frais doit être conservé au réfrigérateur pour éviter sa dégradation rapide.'
  },
  { 
    id: 4, 
    name: 'Lait UHT', 
    image: '🥛', 
    correctStorage: 'placard',
    explanation: 'Le lait UHT peut être conservé à température ambiante dans un placard jusqu\'à ouverture.'
  },
  { 
    id: 5, 
    name: 'Fromage frais', 
    image: '🧀', 
    correctStorage: 'frigo',
    explanation: 'Le fromage frais doit être conservé au réfrigérateur pour maintenir sa fraîcheur.'
  },
  { 
    id: 6, 
    name: 'Fromage à pâte dure', 
    image: '🧀', 
    correctStorage: 'frigo',
    explanation: 'Le fromage à pâte dure se conserve au réfrigérateur, idéalement dans le bac à fromage.'
  },
  { 
    id: 7, 
    name: 'Fromage à pâte molle', 
    image: '🧀', 
    correctStorage: 'frigo',
    explanation: 'Le fromage à pâte molle doit être conservé au réfrigérateur pour éviter sa dégradation.'
  },
  { 
    id: 8, 
    name: 'Viande hachée', 
    image: '🥩', 
    correctStorage: 'frigo',
    explanation: 'La viande hachée doit être conservée au réfrigérateur dans la partie la plus froide.'
  },
  { 
    id: 9, 
    name: 'Steak', 
    image: '🥩', 
    correctStorage: 'frigo',
    explanation: 'Le steak doit être conservé au réfrigérateur, idéalement dans la partie la plus froide.'
  },
  { 
    id: 10, 
    name: 'Poulet', 
    image: '🍗', 
    correctStorage: 'frigo',
    explanation: 'Le poulet doit être conservé au réfrigérateur dans la partie la plus froide.'
  },
  { 
    id: 11, 
    name: 'Poisson frais', 
    image: '🐟', 
    correctStorage: 'frigo',
    explanation: 'Le poisson frais doit être conservé au réfrigérateur dans la partie la plus froide.'
  },
  { 
    id: 12, 
    name: 'Fruits rouges', 
    image: '🍓', 
    correctStorage: 'frigo',
    explanation: 'Les fruits rouges se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 13, 
    name: 'Pommes', 
    image: '🍎', 
    correctStorage: 'fruits-legumes',
    explanation: 'Les pommes se conservent dans le bac à légumes du réfrigérateur ou dans un endroit frais et sec.'
  },
  { 
    id: 14, 
    name: 'Bananes', 
    image: '🍌', 
    correctStorage: 'fruits-legumes',
    explanation: 'Les bananes se conservent à température ambiante jusqu\'à maturité, puis au réfrigérateur.'
  },
  { 
    id: 15, 
    name: 'Oranges', 
    image: '🍊', 
    correctStorage: 'fruits-legumes',
    explanation: 'Les oranges se conservent dans le bac à légumes du réfrigérateur ou dans un endroit frais.'
  },
  { 
    id: 16, 
    name: 'Légumes feuilles', 
    image: '🥬', 
    correctStorage: 'frigo',
    explanation: 'Les légumes feuilles se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 17, 
    name: 'Carottes', 
    image: '🥕', 
    correctStorage: 'frigo',
    explanation: 'Les carottes se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 18, 
    name: 'Pommes de terre', 
    image: '🥔', 
    correctStorage: 'placard',
    explanation: 'Les pommes de terre se conservent dans un endroit sombre, sec et frais, comme un placard.'
  },
  { 
    id: 19, 
    name: 'Pain frais', 
    image: '🍞', 
    correctStorage: 'placard',
    explanation: 'Le pain frais se conserve dans un endroit sec et à température ambiante.'
  },
  { 
    id: 20, 
    name: 'Pain de mie', 
    image: '🍞', 
    correctStorage: 'placard',
    explanation: 'Le pain de mie se conserve dans un endroit sec et à température ambiante.'
  },
  { 
    id: 21, 
    name: 'Œufs', 
    image: '🥚', 
    correctStorage: 'frigo',
    explanation: 'Les œufs se conservent au réfrigérateur dans leur emballage d\'origine.'
  },
  { 
    id: 22, 
    name: 'Jus de fruits frais', 
    image: '🧃', 
    correctStorage: 'frigo',
    explanation: 'Le jus de fruits frais doit être conservé au réfrigérateur.'
  },
  { 
    id: 23, 
    name: 'Jus de fruits pasteurisé', 
    image: '🧃', 
    correctStorage: 'placard',
    explanation: 'Le jus de fruits pasteurisé peut être conservé à température ambiante jusqu\'à ouverture.'
  },
  { 
    id: 24, 
    name: 'Crème fraîche', 
    image: '🥛', 
    correctStorage: 'frigo',
    explanation: 'La crème fraîche doit être conservée au réfrigérateur.'
  },
  { 
    id: 25, 
    name: 'Beurre', 
    image: '🧈', 
    correctStorage: 'frigo',
    explanation: 'Le beurre se conserve au réfrigérateur.'
  },
  { 
    id: 26, 
    name: 'Margarine', 
    image: '🧈', 
    correctStorage: 'frigo',
    explanation: 'La margarine se conserve au réfrigérateur.'
  },
  { 
    id: 27, 
    name: 'Tofu', 
    image: '🧊', 
    correctStorage: 'frigo',
    explanation: 'Le tofu se conserve au réfrigérateur dans son emballage d\'origine.'
  },
  { 
    id: 28, 
    name: 'Tempeh', 
    image: '🧊', 
    correctStorage: 'frigo',
    explanation: 'Le tempeh se conserve au réfrigérateur dans son emballage d\'origine.'
  },
  { 
    id: 29, 
    name: 'Champignons', 
    image: '🍄', 
    correctStorage: 'frigo',
    explanation: 'Les champignons se conservent au réfrigérateur dans un sac en papier.'
  },
  { 
    id: 30, 
    name: 'Tomates', 
    image: '🍅', 
    correctStorage: 'fruits-legumes',
    explanation: 'Les tomates se conservent à température ambiante jusqu\'à maturité.'
  },
  { 
    id: 31, 
    name: 'Concombre', 
    image: '🥒', 
    correctStorage: 'frigo',
    explanation: 'Le concombre se conserve au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 32, 
    name: 'Poivrons', 
    image: '🫑', 
    correctStorage: 'frigo',
    explanation: 'Les poivrons se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 33, 
    name: 'Aubergines', 
    image: '🍆', 
    correctStorage: 'frigo',
    explanation: 'Les aubergines se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 34, 
    name: 'Courgettes', 
    image: '🥒', 
    correctStorage: 'frigo',
    explanation: 'Les courgettes se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 35, 
    name: 'Brocoli', 
    image: '🥦', 
    correctStorage: 'frigo',
    explanation: 'Le brocoli se conserve au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 36, 
    name: 'Chou-fleur', 
    image: '🥦', 
    correctStorage: 'frigo',
    explanation: 'Le chou-fleur se conserve au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 37, 
    name: 'Épinards', 
    image: '🥬', 
    correctStorage: 'frigo',
    explanation: 'Les épinards se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 38, 
    name: 'Laitue', 
    image: '🥬', 
    correctStorage: 'frigo',
    explanation: 'La laitue se conserve au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 39, 
    name: 'Avocat', 
    image: '🥑', 
    correctStorage: 'fruits-legumes',
    explanation: 'L\'avocat se conserve à température ambiante jusqu\'à maturité.'
  },
  { 
    id: 40, 
    name: 'Mangue', 
    image: '🥭', 
    correctStorage: 'fruits-legumes',
    explanation: 'La mangue se conserve à température ambiante jusqu\'à maturité.'
  },
  { 
    id: 41, 
    name: 'Ananas', 
    image: '🍍', 
    correctStorage: 'fruits-legumes',
    explanation: 'L\'ananas se conserve à température ambiante jusqu\'à maturité.'
  },
  { 
    id: 42, 
    name: 'Kiwi', 
    image: '🥝', 
    correctStorage: 'fruits-legumes',
    explanation: 'Le kiwi se conserve à température ambiante jusqu\'à maturité.'
  },
  { 
    id: 43, 
    name: 'Raisins', 
    image: '🍇', 
    correctStorage: 'frigo',
    explanation: 'Les raisins se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 44, 
    name: 'Pêches', 
    image: '🍑', 
    correctStorage: 'fruits-legumes',
    explanation: 'Les pêches se conservent à température ambiante jusqu\'à maturité.'
  },
  { 
    id: 45, 
    name: 'Abricots', 
    image: '🍑', 
    correctStorage: 'fruits-legumes',
    explanation: 'Les abricots se conservent à température ambiante jusqu\'à maturité.'
  },
  { 
    id: 46, 
    name: 'Prunes', 
    image: '🍇', 
    correctStorage: 'fruits-legumes',
    explanation: 'Les prunes se conservent à température ambiante jusqu\'à maturité.'
  },
  { 
    id: 47, 
    name: 'Framboises', 
    image: '🍓', 
    correctStorage: 'frigo',
    explanation: 'Les framboises se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 48, 
    name: 'Myrtilles', 
    image: '🫐', 
    correctStorage: 'frigo',
    explanation: 'Les myrtilles se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 49, 
    name: 'Mûres', 
    image: '🫐', 
    correctStorage: 'frigo',
    explanation: 'Les mûres se conservent au réfrigérateur dans le bac à légumes.'
  },
  { 
    id: 50, 
    name: 'Fruits de la passion', 
    image: '🥭', 
    correctStorage: 'fruits-legumes',
    explanation: 'Les fruits de la passion se conservent à température ambiante jusqu\'à maturité.'
  }
];

const QUESTIONS_PER_GAME = 5;

const StorageGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [currentItem, setCurrentItem] = useState<FoodItem | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setMessage('');
    setShowExplanation(false);
    setQuestionsAsked(0);
    const shuffledItems = [...foodItems].sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_GAME);
    setCurrentItem(shuffledItems[0]);
  };

  const checkAnswer = (selectedStorage: string) => {
    if (!currentItem) return;

    if (selectedStorage === currentItem.correctStorage) {
      setScore(score + 1);
      setMessage('Bravo ! C\'est correct !');
    } else {
      setMessage('Dommage ! Ce n\'était pas le bon endroit.');
    }

    setShowExplanation(true);
    setTimeout(() => {
      setMessage('');
      setShowExplanation(false);
      setQuestionsAsked(questionsAsked + 1);
      if (questionsAsked + 1 >= QUESTIONS_PER_GAME) {
        setGameOver(true);
      } else {
        const remainingItems = foodItems.filter(item => item.id !== currentItem.id);
        const nextItem = remainingItems[Math.floor(Math.random() * remainingItems.length)];
        setCurrentItem(nextItem);
      }
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Jeu de Conservation des Aliments</h2>
      
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
            <h3 className="text-xl font-semibold">Où conserver {currentItem?.name} ?</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {['frigo', 'congelateur', 'placard', 'fruits-legumes'].map((storage) => (
              <button
                key={storage}
                onClick={() => checkAnswer(storage)}
                className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {storage === 'frigo' ? 'Réfrigérateur' :
                 storage === 'congelateur' ? 'Congélateur' :
                 storage === 'placard' ? 'Placard' :
                 'Bac à légumes'}
              </button>
            ))}
          </div>

          {message && (
            <p className={`mt-4 text-lg ${message.includes('Bravo') ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}

          {showExplanation && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700">{currentItem?.explanation}</p>
            </div>
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

export default StorageGame; 