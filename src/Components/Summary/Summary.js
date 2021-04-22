import React from 'react';
import { useSelector } from 'react-redux';

export default function Summary({ questions, restartQuiz }) {
  return (
    <div className="Summary">
      <p>You scored {useSelector((state) => state.score)} out of {questions.length}!</p>
      <button type="button" onClick={() => restartQuiz()}>Reset Quiz</button>
    </div>
  );
}

