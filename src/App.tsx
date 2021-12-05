import React, { useState } from 'react'
import {fetchQuizQuestions,Difficulty, QuestionState} from './API'

import QuestionCard from './components/QuestionCard'
import {GlobalStyle,Wrapper } from './App.styles';


export type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer: string;
}

const TOTAL_QUESTION = 10


const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)
  
  // console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY));
  console.log(questions);
  
  

const startQuiz= async()=>{
  setLoading(true);
  setGameOver(false);

  const newQuestion = await fetchQuizQuestions(
    TOTAL_QUESTION,
    Difficulty.EASY
  )
  setQuestions(newQuestion);
  setScore(0);
  setUserAnswer([]);
  setNumber(0);
setLoading(false)
}
const checkAnswer = async( e:React.MouseEvent<HTMLButtonElement>)=>{
if (!gameOver) {
  const answer =  e.currentTarget.value;
  const correct = questions[number].correct_answer === answer;
  if (correct) setScore(prev => prev + 1);

  const AnswerObject= {
    question: questions[number].question,
    answer,
    correct,
    correctAnswer:questions[number].correct_answer
  };
  setUserAnswer(prev => [...prev, AnswerObject])

}
}
const nextQuestion= ()=>{
  const nextQuestion = number + 1;
  if (nextQuestion === TOTAL_QUESTION) {
    setGameOver(true);  
  } else{
    setNumber(nextQuestion)
  }
}


  return (
    <>
    <GlobalStyle/>
    <Wrapper>

      <h1>React Quiz</h1>

     {gameOver || userAnswer.length ===  TOTAL_QUESTION ?  <button className="start" onClick={startQuiz}>START</button> : null}
{!gameOver ?       <p className="score">Score : {score}</p>: null}
     
{loading &&  <p> Loading Questions ....</p> }

     {!loading && !gameOver &&  <QuestionCard 
      totalQuestions={TOTAL_QUESTION}
      question={questions[number].question}
      questionNr={number + 1} 
      answers={questions[number].answers}
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer}
  

      />}
      {!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTION - 1 ? <button className="next" onClick={nextQuestion}>
        NEXT QUESTION
      </button> : null}
      </Wrapper>


</>      )
}


export default App
