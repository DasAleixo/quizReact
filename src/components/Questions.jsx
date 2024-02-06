import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import Option from  "./Option"

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch(
      { type: 'SELECT_OPTION', payload: {answer: currentQuestion.answer, option} }
    )
  }
  const handleTip = (tip) => {
    dispatch({type: 'SHOW_TIP', payload: tip});
    return
  }

  return (
    <div className="flex flex-col items-center justify-center bg-violet-600 p-12 rounded-xl w-6/12 min-w-96">
      <p className="text-white text-lg mb-5">Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2 className="font-bold text-white text-xl mb-5">{currentQuestion.question}</h2>
      <div className="w-full">
        <p className="font-bold text-lg text-white mb-4">Opções:</p>
        {currentQuestion.options.map((option) => (
          <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} hide={quizState.toHide}/>
        ))}
        
      </div>
      {!quizState.answerSelected && !quizState.tip && !quizState.restOptions &&(
        <div className="flex flex-row gap-x-8">
          {currentQuestion.tip && (
            <button onClick={() => handleTip(currentQuestion.tip)} className='mt-5 border-2 border-white bg-gradient-to-r from-violet-500 text-white py-2 px-5 font-bold text-xl rounded-3xl shadow-xl mb-8 hover:from-violet-400 transition-colors'>Dica</button>
          )}
          <button onClick={() => dispatch({type: 'REMOVE_OPTION'})} className='mt-5 border-2 border-white bg-gradient-to-r from-violet-500 text-white py-2 px-5 font-bold text-xl rounded-3xl shadow-xl mb-8 hover:from-violet-400 transition-colors'>Eliminar</button>
        </div>
      )}
      {!quizState.answerSelected && quizState.tip === currentQuestion.tip && (
            <p className="text-white">{quizState.tip}</p>
          )}
      {quizState.answerSelected && (<button onClick={() => dispatch({type: 'CHANGE_STAGE'})} className='mt-5 border-2 border-white bg-gradient-to-r from-violet-500 text-white py-2 px-5 font-bold text-xl rounded-3xl shadow-xl mb-8 hover:from-violet-400 transition-colors'>Continuar</button>)}

    </div>
  )
}

export default Questions