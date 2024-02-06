import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import category from '../img/category.svg'

const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    const chooseCategory = (category) => {
        dispatch({type: 'START_GAME', payload: category})

        dispatch({type: 'REORDER_QUESTION'})
      }
  return (
    <div  className="flex flex-col">
        <h2 className="font-bold text-white text-3xl mb-5">Escolha uma categoria</h2>
        <p className="text-lg bg-clip-text bg-gradient-to-r from-violet-500 text-transparent mb-10">As perguntas serão referentes a uma das linguagens abaixo:</p>
        <div className="flex justify-center items-center gap-5">
            {quizState.questions.map((question) => (
                <button onClick={() => chooseCategory(question.category)} key={question.category} className="border-2 border-white bg-gradient-to-r from-violet-500 text-white py-2 px-3 font-bold text-lg rounded-3xl shadow-xl mb-8 hover:from-violet-400 transition-colors sm:py-2 sm:px-5 sm:text-xl">{question.category}</button>
            ))}
        </div>
        <img src={category} alt="Categorias do Quiz" className="h-72"/>
    </div>
  )
}

export default PickCategory