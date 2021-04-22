import React from 'react';

export default function Answers({ questions, currentQuestion, checkAnswer }) {
  return (
    <div className="answers">
      {questions[currentQuestion].answers.map((answer) => (
          <button type="button" className="answer" onClick={() => checkAnswer(answer)}>{answer}</button>
      ))}
    </div>
  );
}

