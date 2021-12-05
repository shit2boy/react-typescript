import React from 'react'
import {  AnswerObject } from '../App'
import {  Wrapper, ButtonWrapper } from './QuestionCard.styles'


type Props ={
    question: string;
    answers: string[];
    userAnswer: AnswerObject | undefined;
    callback:(e:React.MouseEvent<HTMLButtonElement>) =>void;
    totalQuestions: number;
    questionNr: number;

}

const QuestionCard: React.FC<Props>  = ({answers,question,questionNr,userAnswer,callback,totalQuestions}) => {
    return (
        <Wrapper>
           <p className="number">
               Question:{questionNr}/{totalQuestions}
           </p>
          <p dangerouslySetInnerHTML={{__html:question}}/>
          <div>
              {answers.map((answer)=>(
                  <ButtonWrapper
                  userClicked={userAnswer?.answer === answer}
                  correct={userAnswer?.correctAnswer === answer}
                  key ={answer}>
                      <button disabled={!!userAnswer} value={answer} onClick={callback}>
                          <span dangerouslySetInnerHTML={{__html: answer}}/>
                      </button>
                      </ButtonWrapper>
              ))}
          </div>
          </Wrapper>
    )
}

export default QuestionCard
