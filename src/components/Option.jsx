import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import './Options.css'

const Option = ({ option, answer, selectOption, hide }) => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id={option} onClick={() => selectOption()} className={`
    ${quizState.answerSelected && option === answer ? 'correct' : ''}
    ${quizState.answerSelected && option !== answer ? 'incorrect' : ''}  
    ${!quizState.answerSelected && 'bg-violet-800'}
    rounded-xl cursor-pointer flex-1 hover:bg-violet-950 transition-colors`}>
        <p className={`${hide === option ? 'hidden' : ''} mb-3 text-white p-5`}>{option}</p>
    </div>
  )
}

export default Option