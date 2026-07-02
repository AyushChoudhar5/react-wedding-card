import React, { useState } from 'react';
import '../css/Quiz.css';
import { useLanguage } from '../context/LanguageContext';

function Quiz() {
    const { t, language } = useLanguage();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState(null);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

    const questions = [
      {
        questionText: t('q1Text'),
        correctAnswer: t('q1Correct'),
        answerOptions: [
          { answerText: t('q1Options')[0], isCorrect: false },
          { answerText: t('q1Options')[1], isCorrect: false },
          { answerText: t('q1Options')[2], isCorrect: false },
          { answerText: t('q1Options')[3], isCorrect: true },
          { answerText: t('q1Options')[4], isCorrect: true },
        ],
      },
      {
        questionText: t('q2Text'),
        correctAnswer: t('q2Correct'),
        answerOptions: [
          { answerText: t('q2Options')[0], isCorrect: false },
          { answerText: t('q2Options')[1], isCorrect: false },
          { answerText: t('q2Options')[2], isCorrect: false },
          { answerText: t('q2Options')[3], isCorrect: false },
          { answerText: t('q2Options')[4], isCorrect: true },
        ],
      },
      {
        questionText: t('q3Text'),
        correctAnswer: t('q3Correct'),
        answerOptions: [
          { answerText: t('q3Options')[0], isCorrect: false },
          { answerText: t('q3Options')[1], isCorrect: false },
          { answerText: t('q3Options')[2], isCorrect: false },
          { answerText: t('q3Options')[3], isCorrect: true },
          { answerText: t('q3Options')[4], isCorrect: false },
        ],
      }
    ];

    const handleAnswerButtonClick = (correctAnswer, isCorrect, index) => {
        const nextQuestion = currentQuestion + 1;
        setSelectedOptionIndex(index);
    
        if (isCorrect) {
          setScore(score + 1);
          setAnswerFeedback(t('quizCorrect'));
        } else {
          setAnswerFeedback(t('quizIncorrect', { correctAnswer }));
        }
    
        setTimeout(() => {
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
          setAnswerFeedback(null);
          setSelectedOptionIndex(null);
        }, 3000);
      };

      const handleRestart = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSelectedOptionIndex(null);
      };

  return (
    <div className='container bc-pink'>
        <div className='title'>{t('quizTitle')}</div>
        {showScore ? (
        <div className='score-section'>
          <div>
            {language === 'mr' ? (
              <>तुम्ही {questions.length} पैकी <span className='my-score'>{score}</span> प्रश्नांची उत्तरे बरोबर दिली आहेत!</>
            ) : (
              <>You answered <span className='my-score'>{score} out of {questions.length}</span> questions correctly!</>
            )}
          </div>
          <button onClick={handleRestart} className='restart-button'>{t('quizTryAgain')}</button> 
        </div>
        ) : (
            <>
            <div className='question-section'>
                <div className='question-count'>
                  <span>{language === 'mr' ? `प्रश्न ${currentQuestion + 1}` : `Question ${currentQuestion + 1}`}</span>/{questions.length}
                </div>
                <div className='question-text'>
                  <div>Yogesh ♥ Dipali</div>
                  <div>{questions[currentQuestion].questionText}</div>
                </div>
            </div>
            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                    className={`answer-button ${selectedOptionIndex === index ? (answerOption.isCorrect ? 'correct' : 'incorrect') : ''}`}
                    onClick={() => handleAnswerButtonClick(questions[currentQuestion].correctAnswer, answerOption.isCorrect, index)}
                    key={index}
                >
                    {answerOption.answerText}
                </button>
                ))}
            </div>
            {answerFeedback && <div className='feedback'>{answerFeedback}</div>}
            </>
        )}
    </div>
  )
}

export default Quiz;