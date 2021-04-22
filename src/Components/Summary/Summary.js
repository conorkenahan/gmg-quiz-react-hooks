import React from 'react';
import { useSelector } from 'react-redux';

export default function Summary({ questions, restartQuiz, correct }) {
  return (
    <div className="Summary">
      <p>You scored {useSelector((state) => state.score)} out of {questions.length}!</p>
      <button type="button" onClick={() => restartQuiz()}>Reset Quiz</button>
        {questions.map((question, i) => (
            <div key={i}>
                <p>{question.title}</p>
                <p className={`${correct[i] ? 'correct' :'incorrect'}`}>{question.correct}</p>
            </div>
        ))}
    </div>
  );
}

