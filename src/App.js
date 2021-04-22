import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Question from './Components/Question/Question';
import Summary from './Components/Summary/Summary';

export default function App() {
  const questions = useSelector((state) => state.questions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [step, setStep] = useState('start');

  const checkAnswer = (guess) => {
    console.log(guess);
  }

  let display;
  if (step === 'start') {
    display = <button type="button" onClick={() => setStep('question')}>Start!</button>;
  } else if (step === 'question') {
    display = (
      <div>
        <Question questions={questions} currentQuestion={currentQuestion} />
        {questions[currentQuestion].answers.map((answer) => (
          <button onClick={() => checkAnswer()}>{answer}</button>
        ))}
      </div>
    );
  } else if (step === ' summary') {
    display = <Summary />;
  }

  return (
    <div className="App">
        <h1>Who sang what?</h1>
        <h2>A short quiz about the Beatles</h2>
        {display}
    </div>
  );
}

