"use client";

import { useState } from 'react';

const QuizApp = ({ quizSettings }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Process quiz settings to get questions
  const { difficulty = 'level1', topic } = quizSettings;
  const levelsData = topic.levelsData;
  const currentLevelQuestions = levelsData[difficulty];

  const questions = currentLevelQuestions.map(question => ({
    question: question.q,
    options: question.answers.map(answer => answer.answer),
    correctAnswer: question.answers.findIndex(answer => answer.t === 1),
    link: question.link // Adding link for reference if needed
  }));

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResults(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        أسئلة في {topic.name}
      </h1>

      {!showResults ? (
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-green-800 dark:text-white">
              السؤال {currentQuestion + 1} من {questions.length}
            </h2>
            <p className="mt-2 text-green-900 dark:text-white font-quran text-xl">
              {questions[currentQuestion].question}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={`p-4 rounded-lg transition-all text-lg font-quran
                  ${selectedAnswer !== null
                    ? index === questions[currentQuestion].correctAnswer
                      ? 'bg-green-600 text-white'
                      : selectedAnswer === index
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 dark:bg-zinc-800 text-green-900 dark:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 hover:dark:bg-zinc-700 text-green-900 dark:text-white'}
                  ${selectedAnswer === null && 'hover:scale-[1.02]'}
                `}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-green-700 dark:text-white">
            نتيجتك النهائية: {score} من {questions.length}
          </h2>
          <button
            onClick={restartQuiz}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            إعادة المحاولة
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;