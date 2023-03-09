import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import { getAnswer, getQuestion, index } from './cards';

const App = () => {

  const [question, setQuestion] = useState(getQuestion);

  const setRandomQuestion= () => {
    const newQuestion = getQuestion();
    setQuestion(newQuestion);
  }

  const [answer, setAnswer] = useState(getAnswer);

  const setCorrespondingAnswer = () => {
    const newAnswer = getAnswer();
    setAnswer(newAnswer);
  }

  return (
    <div className="App">
      <div className='header'>
        <h1> The Ultimate Civics Wizard </h1>
        <h2> How good is your civics knowledge? Test it here with us! </h2>
        <h3> Number of cards: 10 </h3>
      </div>
      {/* <Card question = "How many US reps are there?" answer = "435" /> */}
      <Card question={question} answer={answer} />
      <button onClick={() => {
          setRandomQuestion();
          setCorrespondingAnswer();
        }}> → </button>
    </div>
  )
}

export default App;