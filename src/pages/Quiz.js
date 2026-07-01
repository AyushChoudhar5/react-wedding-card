import React, { useState } from 'react';
import '../css/Quiz.css';

const questions = [
    {
      questionText: 'Which of the following is our honeymoon destination?',
      correctAnswer: 'We are traveling to the UK and Spain.',
      answerOptions: [
        { answerText: 'Australia', isCorrect: false },
        { answerText: 'Canada', isCorrect: false },
        { answerText: 'Switzerland', isCorrect: false },
        { answerText: 'United Kingdom', isCorrect: true },
        { answerText: 'Spain', isCorrect: true },
      ],
    },
    {
      questionText: 'Which country have we NOT traveled to together?',
      correctAnswer: 'We have never traveled to Vietnam together.',
      answerOptions: [
        { answerText: 'Japan', isCorrect: false },
        { answerText: 'Hong Kong', isCorrect: false },
        { answerText: 'Macau', isCorrect: false },
        { answerText: 'Laos', isCorrect: false },
        { answerText: 'Vietnam', isCorrect: true },
      ],
    },
    {
      questionText: 'Which activity have we NOT done together?',
      correctAnswer: 'We have never been to Lotte World together. We have been to Gyeongju World, E-World, and Disneyland together.',
      answerOptions: [
        { answerText: 'Running a 10km marathon', isCorrect: false },
        { answerText: 'Hiking Hallasan Mountain', isCorrect: false },
        { answerText: 'Surfing at Mallipo Beach', isCorrect: false },
        { answerText: 'Riding amusement rides at Lotte World', isCorrect: true },
        { answerText: 'Playing games at a PC bang (gaming cafe)', isCorrect: false },
      ],
    }
  ];


function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState(null);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);


    const handleAnswerButtonClick = (correctAnswer, isCorrect, index) => {
        const nextQuestion = currentQuestion + 1;
        setSelectedOptionIndex(index);
    
        if (isCorrect) {
          setScore(score + 1);
          setAnswerFeedback(`Correct!`);
        } else {
          setAnswerFeedback(`Incorrect! ${correctAnswer}`);
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
        <div className='title'>Surprise Quiz</div>
        {showScore ? (
        <div className='score-section'>
          <div>You answered <span className='my-score'>{score} out of {questions.length}</span> questions correctly!</div>
          <button onClick={handleRestart} className='restart-button'>Try Again</button> 
        </div>
        ) : (
            <>
            <div className='question-section'>
                <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
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

export default Quiz