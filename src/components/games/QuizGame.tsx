import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const allQuestions: Question[] = [
  {
    id: 1,
    question: "Quelle est la meilleure façon de conserver les bananes pour éviter le gaspillage ?",
    options: [
      "Les mettre directement au réfrigérateur",
      "Les suspendre à température ambiante",
      "Les mettre dans un sac plastique",
      "Les mettre dans un bol d'eau"
    ],
    correctAnswer: 1,
    explanation: "Les bananes se conservent mieux suspendues à température ambiante. Le réfrigérateur accélère leur mûrissement et peut les faire noircir."
  },
  {
    id: 2,
    question: "Quelle est la signification de la date de péremption (DLC) sur un produit ?",
    options: [
      "Le produit est dangereux après cette date",
      "Le produit perd ses qualités gustatives après cette date",
      "Le produit doit être consommé avant cette date",
      "Le produit peut être vendu jusqu'à cette date"
    ],
    correctAnswer: 2,
    explanation: "La DLC indique la date jusqu'à laquelle le produit peut être consommé en toute sécurité. Après cette date, il peut présenter des risques pour la santé."
  },
  {
    id: 3,
    question: "Quelle est la meilleure pratique pour éviter le gaspillage lors des courses ?",
    options: [
      "Acheter en grande quantité pour faire des économies",
      "Faire une liste précise et s'y tenir",
      "Acheter des produits en promotion",
      "Acheter des produits hors saison"
    ],
    correctAnswer: 1,
    explanation: "Faire une liste précise et s'y tenir permet d'éviter les achats impulsifs et de n'acheter que ce dont on a réellement besoin."
  },
  {
    id: 4,
    question: "Quelle est la meilleure façon de conserver le pain pour éviter le gaspillage ?",
    options: [
      "Le mettre au réfrigérateur",
      "Le mettre dans un sac plastique",
      "Le mettre dans un torchon propre",
      "Le mettre au congélateur"
    ],
    correctAnswer: 2,
    explanation: "Le pain se conserve mieux dans un torchon propre à température ambiante. Le réfrigérateur accélère son rassissement."
  },
  {
    id: 5,
    question: "Quelle est la meilleure pratique pour les restes de repas ?",
    options: [
      "Les jeter à la poubelle",
      "Les mettre au réfrigérateur dans un récipient hermétique",
      "Les laisser à température ambiante",
      "Les donner aux animaux"
    ],
    correctAnswer: 1,
    explanation: "Les restes doivent être conservés au réfrigérateur dans un récipient hermétique pour éviter la prolifération des bactéries."
  },
  {
    id: 6,
    question: "Quelle est la meilleure façon de conserver les herbes fraîches ?",
    options: [
      "Les mettre dans un verre d'eau",
      "Les mettre au réfrigérateur dans un sac plastique",
      "Les mettre dans un torchon humide",
      "Les mettre dans un bocal hermétique"
    ],
    correctAnswer: 0,
    explanation: "Les herbes fraîches se conservent mieux dans un verre d'eau, comme un bouquet. Cela permet de maintenir leur fraîcheur plus longtemps."
  },
  {
    id: 7,
    question: "Quelle est la meilleure pratique pour les fruits et légumes abîmés ?",
    options: [
      "Les jeter immédiatement",
      "Les utiliser pour faire du compost",
      "Les mettre au congélateur",
      "Les donner aux animaux"
    ],
    correctAnswer: 1,
    explanation: "Les fruits et légumes abîmés peuvent être compostés pour créer un engrais naturel, évitant ainsi le gaspillage tout en nourrissant le sol."
  },
  {
    id: 8,
    question: "Quelle est la meilleure façon de conserver les œufs ?",
    options: [
      "Les mettre dans la porte du réfrigérateur",
      "Les mettre dans le bac à légumes",
      "Les laisser à température ambiante",
      "Les mettre dans un récipient hermétique"
    ],
    correctAnswer: 1,
    explanation: "Les œufs se conservent mieux dans le bac à légumes du réfrigérateur, où la température est plus stable et plus fraîche."
  },
  {
    id: 9,
    question: "Quelle est la meilleure pratique pour les courses en ligne ?",
    options: [
      "Commander en grande quantité",
      "Choisir des produits en promotion",
      "Planifier les repas à l'avance",
      "Commander des produits hors saison"
    ],
    correctAnswer: 2,
    explanation: "Planifier les repas à l'avance permet d'acheter uniquement ce dont on a besoin et d'éviter les achats impulsifs."
  },
  {
    id: 10,
    question: "Quelle est la meilleure façon de conserver les pommes de terre ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les mettre dans un sac plastique",
      "Les mettre dans un endroit sombre et sec",
      "Les mettre dans le bac à légumes"
    ],
    correctAnswer: 2,
    explanation: "Les pommes de terre se conservent mieux dans un endroit sombre et sec, comme une cave ou un placard, pour éviter la germination."
  },
  {
    id: 11,
    question: "Quelle est la meilleure façon de conserver les tomates ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les laisser à température ambiante",
      "Les mettre dans un sac plastique",
      "Les mettre dans le bac à légumes"
    ],
    correctAnswer: 1,
    explanation: "Les tomates se conservent mieux à température ambiante. Le réfrigérateur altère leur goût et leur texture."
  },
  {
    id: 12,
    question: "Quelle est la meilleure pratique pour les courses en grande surface ?",
    options: [
      "Faire les courses le ventre vide",
      "Faire les courses après avoir mangé",
      "Faire les courses en fin de journée",
      "Faire les courses le matin tôt"
    ],
    correctAnswer: 1,
    explanation: "Faire les courses après avoir mangé permet d'éviter les achats impulsifs liés à la faim."
  },
  {
    id: 13,
    question: "Quelle est la meilleure façon de conserver les champignons ?",
    options: [
      "Les mettre dans un sac plastique",
      "Les mettre dans un torchon humide",
      "Les mettre dans un récipient hermétique",
      "Les mettre dans un panier en osier"
    ],
    correctAnswer: 3,
    explanation: "Les champignons se conservent mieux dans un panier en osier qui permet une bonne circulation de l'air."
  },
  {
    id: 14,
    question: "Quelle est la meilleure pratique pour les fruits mûrs ?",
    options: [
      "Les jeter",
      "Les mettre au congélateur",
      "Les utiliser pour faire des compotes",
      "Les donner aux animaux"
    ],
    correctAnswer: 2,
    explanation: "Les fruits mûrs peuvent être transformés en compotes, confitures ou smoothies, évitant ainsi le gaspillage."
  },
  {
    id: 15,
    question: "Quelle est la meilleure façon de conserver le fromage ?",
    options: [
      "Dans du papier aluminium",
      "Dans du papier sulfurisé",
      "Dans du papier absorbant",
      "Dans un récipient hermétique"
    ],
    correctAnswer: 1,
    explanation: "Le fromage se conserve mieux dans du papier sulfurisé qui permet une bonne respiration tout en évitant le dessèchement."
  },
  {
    id: 16,
    question: "Quelle est la meilleure pratique pour les courses en vrac ?",
    options: [
      "Acheter en grande quantité",
      "Acheter uniquement ce dont on a besoin",
      "Acheter des produits en promotion",
      "Acheter des produits hors saison"
    ],
    correctAnswer: 1,
    explanation: "Le vrac permet d'acheter exactement la quantité dont on a besoin, évitant ainsi le gaspillage."
  },
  {
    id: 17,
    question: "Quelle est la meilleure façon de conserver les carottes ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les mettre dans un sac plastique",
      "Les mettre dans le bac à légumes",
      "Les mettre dans un torchon humide"
    ],
    correctAnswer: 3,
    explanation: "Les carottes se conservent mieux dans un torchon humide qui maintient leur fraîcheur tout en évitant la pourriture."
  },
  {
    id: 18,
    question: "Quelle est la meilleure pratique pour les courses en saison ?",
    options: [
      "Acheter des produits importés",
      "Acheter des produits locaux",
      "Acheter des produits en conserve",
      "Acheter des produits surgelés"
    ],
    correctAnswer: 1,
    explanation: "Acheter des produits locaux en saison permet d'avoir des aliments plus frais qui se conservent mieux."
  },
  {
    id: 19,
    question: "Quelle est la meilleure façon de conserver les avocats ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les laisser à température ambiante",
      "Les mettre dans un sac plastique",
      "Les mettre dans le bac à légumes"
    ],
    correctAnswer: 1,
    explanation: "Les avocats se conservent mieux à température ambiante jusqu'à maturité, puis au réfrigérateur."
  },
  {
    id: 20,
    question: "Quelle est la meilleure pratique pour les courses en famille ?",
    options: [
      "Faire les courses avec les enfants",
      "Faire les courses seul",
      "Faire les courses en ligne",
      "Faire les courses le soir"
    ],
    correctAnswer: 2,
    explanation: "Faire les courses en ligne permet d'éviter les achats impulsifs liés aux demandes des enfants."
  },
  {
    id: 21,
    question: "Quelle est la meilleure façon de conserver les fraises ?",
    options: [
      "Les mettre au réfrigérateur dans leur barquette",
      "Les laver et les mettre dans un récipient hermétique",
      "Les mettre dans un torchon humide",
      "Les mettre dans un sac plastique"
    ],
    correctAnswer: 0,
    explanation: "Les fraises se conservent mieux dans leur barquette d'origine au réfrigérateur. Les laver accélère leur détérioration."
  },
  {
    id: 22,
    question: "Quelle est la meilleure pratique pour les courses en promotion ?",
    options: [
      "Acheter tout ce qui est en promotion",
      "N'acheter que ce dont on a besoin",
      "Acheter en grande quantité",
      "Acheter des produits hors saison"
    ],
    correctAnswer: 1,
    explanation: "Il faut n'acheter que ce dont on a besoin, même en promotion, pour éviter le gaspillage."
  },
  {
    id: 23,
    question: "Quelle est la meilleure façon de conserver les oignons ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les mettre dans un sac plastique",
      "Les mettre dans un endroit sombre et sec",
      "Les mettre dans le bac à légumes"
    ],
    correctAnswer: 2,
    explanation: "Les oignons se conservent mieux dans un endroit sombre et sec, comme une cave ou un placard."
  },
  {
    id: 24,
    question: "Quelle est la meilleure pratique pour les courses en ligne ?",
    options: [
      "Commander en grande quantité",
      "Choisir des produits en promotion",
      "Planifier les repas à l'avance",
      "Commander des produits hors saison"
    ],
    correctAnswer: 2,
    explanation: "Planifier les repas à l'avance permet d'acheter uniquement ce dont on a besoin et d'éviter les achats impulsifs."
  },
  {
    id: 25,
    question: "Quelle est la meilleure façon de conserver les poires ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les laisser à température ambiante",
      "Les mettre dans un sac plastique",
      "Les mettre dans le bac à légumes"
    ],
    correctAnswer: 1,
    explanation: "Les poires se conservent mieux à température ambiante jusqu'à maturité, puis au réfrigérateur."
  },
  {
    id: 26,
    question: "Quelle est la meilleure pratique pour les courses en vrac ?",
    options: [
      "Acheter en grande quantité",
      "Acheter uniquement ce dont on a besoin",
      "Acheter des produits en promotion",
      "Acheter des produits hors saison"
    ],
    correctAnswer: 1,
    explanation: "Le vrac permet d'acheter exactement la quantité dont on a besoin, évitant ainsi le gaspillage."
  },
  {
    id: 27,
    question: "Quelle est la meilleure façon de conserver les carottes ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les mettre dans un sac plastique",
      "Les mettre dans le bac à légumes",
      "Les mettre dans un torchon humide"
    ],
    correctAnswer: 3,
    explanation: "Les carottes se conservent mieux dans un torchon humide qui maintient leur fraîcheur tout en évitant la pourriture."
  },
  {
    id: 28,
    question: "Quelle est la meilleure pratique pour les courses en saison ?",
    options: [
      "Acheter des produits importés",
      "Acheter des produits locaux",
      "Acheter des produits en conserve",
      "Acheter des produits surgelés"
    ],
    correctAnswer: 1,
    explanation: "Acheter des produits locaux en saison permet d'avoir des aliments plus frais qui se conservent mieux."
  },
  {
    id: 29,
    question: "Quelle est la meilleure façon de conserver les avocats ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les laisser à température ambiante",
      "Les mettre dans un sac plastique",
      "Les mettre dans le bac à légumes"
    ],
    correctAnswer: 1,
    explanation: "Les avocats se conservent mieux à température ambiante jusqu'à maturité, puis au réfrigérateur."
  },
  {
    id: 30,
    question: "Quelle est la meilleure pratique pour les courses en famille ?",
    options: [
      "Faire les courses avec les enfants",
      "Faire les courses seul",
      "Faire les courses en ligne",
      "Faire les courses le soir"
    ],
    correctAnswer: 2,
    explanation: "Faire les courses en ligne permet d'éviter les achats impulsifs liés aux demandes des enfants."
  },
  {
    id: 31,
    question: "Quelle est la meilleure façon de conserver les champignons ?",
    options: [
      "Les mettre dans un sac plastique",
      "Les mettre dans un torchon humide",
      "Les mettre dans un récipient hermétique",
      "Les mettre dans un panier en osier"
    ],
    correctAnswer: 3,
    explanation: "Les champignons se conservent mieux dans un panier en osier qui permet une bonne circulation de l'air."
  },
  {
    id: 32,
    question: "Quelle est la meilleure pratique pour les fruits mûrs ?",
    options: [
      "Les jeter",
      "Les mettre au congélateur",
      "Les utiliser pour faire des compotes",
      "Les donner aux animaux"
    ],
    correctAnswer: 2,
    explanation: "Les fruits mûrs peuvent être transformés en compotes, confitures ou smoothies, évitant ainsi le gaspillage."
  },
  {
    id: 33,
    question: "Quelle est la meilleure façon de conserver le fromage ?",
    options: [
      "Dans du papier aluminium",
      "Dans du papier sulfurisé",
      "Dans du papier absorbant",
      "Dans un récipient hermétique"
    ],
    correctAnswer: 1,
    explanation: "Le fromage se conserve mieux dans du papier sulfurisé qui permet une bonne respiration tout en évitant le dessèchement."
  },
  {
    id: 34,
    question: "Quelle est la meilleure pratique pour les courses en vrac ?",
    options: [
      "Acheter en grande quantité",
      "Acheter uniquement ce dont on a besoin",
      "Acheter des produits en promotion",
      "Acheter des produits hors saison"
    ],
    correctAnswer: 1,
    explanation: "Le vrac permet d'acheter exactement la quantité dont on a besoin, évitant ainsi le gaspillage."
  },
  {
    id: 35,
    question: "Quelle est la meilleure façon de conserver les carottes ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les mettre dans un sac plastique",
      "Les mettre dans le bac à légumes",
      "Les mettre dans un torchon humide"
    ],
    correctAnswer: 3,
    explanation: "Les carottes se conservent mieux dans un torchon humide qui maintient leur fraîcheur tout en évitant la pourriture."
  },
  {
    id: 36,
    question: "Quelle est la meilleure pratique pour les courses en saison ?",
    options: [
      "Acheter des produits importés",
      "Acheter des produits locaux",
      "Acheter des produits en conserve",
      "Acheter des produits surgelés"
    ],
    correctAnswer: 1,
    explanation: "Acheter des produits locaux en saison permet d'avoir des aliments plus frais qui se conservent mieux."
  },
  {
    id: 37,
    question: "Quelle est la meilleure façon de conserver les avocats ?",
    options: [
      "Les mettre au réfrigérateur",
      "Les laisser à température ambiante",
      "Les mettre dans un sac plastique",
      "Les mettre dans le bac à légumes"
    ],
    correctAnswer: 1,
    explanation: "Les avocats se conservent mieux à température ambiante jusqu'à maturité, puis au réfrigérateur."
  },
  {
    id: 38,
    question: "Quelle est la meilleure pratique pour les courses en famille ?",
    options: [
      "Faire les courses avec les enfants",
      "Faire les courses seul",
      "Faire les courses en ligne",
      "Faire les courses le soir"
    ],
    correctAnswer: 2,
    explanation: "Faire les courses en ligne permet d'éviter les achats impulsifs liés aux demandes des enfants."
  },
  {
    id: 39,
    question: "Quelle est la meilleure façon de conserver les fraises ?",
    options: [
      "Les mettre au réfrigérateur dans leur barquette",
      "Les laver et les mettre dans un récipient hermétique",
      "Les mettre dans un torchon humide",
      "Les mettre dans un sac plastique"
    ],
    correctAnswer: 0,
    explanation: "Les fraises se conservent mieux dans leur barquette d'origine au réfrigérateur. Les laver accélère leur détérioration."
  },
  {
    id: 40,
    question: "Quelle est la meilleure pratique pour les courses en promotion ?",
    options: [
      "Acheter tout ce qui est en promotion",
      "N'acheter que ce dont on a besoin",
      "Acheter en grande quantité",
      "Acheter des produits hors saison"
    ],
    correctAnswer: 1,
    explanation: "Il faut n'acheter que ce dont on a besoin, même en promotion, pour éviter le gaspillage."
  },
  {
    id: 41,
    question: "Comment réduire le gaspillage de pain ?",
    options: [
      "Acheter un pain entier à chaque fois",
      "Le congeler en tranches",
      "Le garder dans un sac plastique",
      "Le conserver au réfrigérateur"
    ],
    correctAnswer: 1,
    explanation: "Congeler le pain en tranches permet de ne décongeler que la quantité nécessaire et évite le gaspillage."
  },
  {
    id: 42,
    question: "Quelle est la meilleure façon de conserver les herbes aromatiques ?",
    options: [
      "Les sécher à l'air libre",
      "Les congeler dans des glaçons",
      "Les mettre dans un vase d'eau",
      "Les garder dans un sac plastique"
    ],
    correctAnswer: 1,
    explanation: "Congeler les herbes dans des glaçons d'eau ou d'huile préserve leur saveur et permet de les utiliser facilement."
  },
  {
    id: 43,
    question: "Comment éviter le gaspillage des yaourts ?",
    options: [
      "Acheter en grande quantité",
      "Vérifier les dates et acheter selon les besoins",
      "Les congeler",
      "Les garder à température ambiante"
    ],
    correctAnswer: 1,
    explanation: "Il est important de vérifier les dates et d'acheter uniquement la quantité nécessaire pour éviter que les yaourts ne périment."
  },
  {
    id: 44,
    question: "Quelle est la meilleure façon d'organiser son réfrigérateur ?",
    options: [
      "Mettre les nouveaux produits devant",
      "Ranger par type d'aliment",
      "Mettre les produits les plus anciens devant",
      "Remplir tous les espaces"
    ],
    correctAnswer: 2,
    explanation: "Placer les produits les plus anciens devant permet de les utiliser en premier et éviter qu'ils ne périment."
  },
  {
    id: 45,
    question: "Comment réutiliser les épluchures de légumes ?",
    options: [
      "Les jeter",
      "Les donner aux animaux",
      "Faire du bouillon",
      "Les brûler"
    ],
    correctAnswer: 2,
    explanation: "Les épluchures peuvent être utilisées pour faire un excellent bouillon de légumes, réduisant ainsi le gaspillage."
  },
  {
    id: 46,
    question: "Quelle est la meilleure façon de conserver les citrons ?",
    options: [
      "Au réfrigérateur",
      "À température ambiante",
      "Dans un sac plastique",
      "Dans un bocal d'eau"
    ],
    correctAnswer: 0,
    explanation: "Les citrons se conservent mieux au réfrigérateur, où ils peuvent durer jusqu'à trois semaines."
  },
  {
    id: 47,
    question: "Comment utiliser les restes de riz ?",
    options: [
      "Les jeter",
      "Faire un riz cantonais",
      "Les donner aux animaux",
      "Les garder au réfrigérateur"
    ],
    correctAnswer: 1,
    explanation: "Le riz de la veille est parfait pour faire un riz cantonais, c'est même la recette traditionnelle."
  },
  {
    id: 48,
    question: "Quelle est la meilleure façon de conserver les pommes ?",
    options: [
      "Dans un panier à fruits",
      "Au réfrigérateur",
      "Dans un sac plastique",
      "À côté des bananes"
    ],
    correctAnswer: 1,
    explanation: "Les pommes se conservent mieux au réfrigérateur, où elles peuvent durer plusieurs semaines."
  },
  {
    id: 49,
    question: "Comment éviter le gaspillage des produits surgelés ?",
    options: [
      "Les décongeler tous en même temps",
      "Les conserver à -18°C",
      "Les recongeler après décongélation",
      "Les laisser à température ambiante"
    ],
    correctAnswer: 1,
    explanation: "Maintenir une température constante de -18°C permet de conserver les aliments surgelés dans les meilleures conditions."
  },
  {
    id: 50,
    question: "Quelle est la meilleure façon d'utiliser les fruits très mûrs ?",
    options: [
      "Les jeter",
      "Les donner aux animaux",
      "Faire des smoothies ou des compotes",
      "Les mettre au compost"
    ],
    correctAnswer: 2,
    explanation: "Les fruits très mûrs sont parfaits pour faire des smoothies ou des compotes, conservant ainsi leurs nutriments."
  }
];

const QUESTIONS_PER_GAME = 5;

const QuizGame: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [message, setMessage] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [questionsAsked, setQuestionsAsked] = useState<number>(0);

  const selectRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, QUESTIONS_PER_GAME);
  };

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setMessage('');
    setShowExplanation(false);
    setQuestionsAsked(0);
    const selectedQuestions = selectRandomQuestions();
    setQuestions(selectedQuestions);
    setCurrentQuestion(selectedQuestions[0]);
  };

  const handleAnswer = (selectedAnswer: number) => {
    if (!currentQuestion) return;

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setMessage('Bravo ! C\'est correct !');
    } else {
      setMessage('Dommage ! Ce n\'était pas la bonne réponse.');
    }

    setShowExplanation(true);
    setTimeout(() => {
      setMessage('');
      setShowExplanation(false);
      setQuestionsAsked(questionsAsked + 1);
      if (questionsAsked + 1 >= QUESTIONS_PER_GAME) {
        setGameOver(true);
      } else {
        const remainingQuestions = questions.filter(q => q.id !== currentQuestion.id);
        const nextQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
        setCurrentQuestion(nextQuestion);
      }
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Quiz Anti-Gaspillage</h2>
      
      {!questions.length && !gameOver && (
        <button
          onClick={startGame}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Commencer le quiz
        </button>
      )}
      
      {questions.length > 0 && !gameOver && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((questionsAsked + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Question {questionsAsked + 1} sur {questions.length}
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-6">{currentQuestion?.question}</h3>
          
          <div className="space-y-4">
            {currentQuestion?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                  showExplanation
                    ? index === currentQuestion.correctAnswer
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{currentQuestion?.explanation}</p>
            </div>
          )}
        </div>
      )}

      {gameOver && (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Quiz terminé !</h3>
          <p className="text-xl mb-4">
            Votre score : {score} sur {questions.length}
          </p>
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

export default QuizGame; 