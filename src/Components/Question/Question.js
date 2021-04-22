import React from 'react';

export default function Question({ questions, currentQuestion }) {
  return (
    <div className="Question">
      {questions[currentQuestion].title}
    </div>
  );
}

