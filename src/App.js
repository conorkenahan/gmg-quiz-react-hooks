import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementScore } from './actions';
import Question from './Components/Question/Question';
import Answers from './Components/Answers/Answers';
import Summary from './Components/Summary/Summary';

export default function App() {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [step, setStep] = useState('start');
  const [correct, setCorrect] = useState([]);

  const checkAnswer = (guess) => {
    if (guess === questions[currentQuestion].correct) {
      dispatch(incrementScore());
      setCorrect(oldCorrect => [...oldCorrect, true]);
    }
    if (guess !== questions[currentQuestion].correct) {
      setCorrect(oldCorrect => [...oldCorrect, false]);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setStep('summary');
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setStep('start');
    setCorrect([]);
  }

  let display;
  if (step === 'start') {
    display = <button type="button" onClick={() => setStep('question')}>Start!</button>;
  } else if (step === 'question') {
    display = (
      <div>
        <Question questions={questions} currentQuestion={currentQuestion} />
        <Answers questions={questions} currentQuestion={currentQuestion} checkAnswer={checkAnswer} />
      </div>
    );
  } else if (step === 'summary') {
    display = <Summary questions={questions} restartQuiz={restartQuiz} correct={correct} />;
  }

  return (
    <div className="App">
        <h1>Who sang what?</h1>
        <h2>A short quiz about the Beatles</h2>
        {display}
    </div>
  );
}

