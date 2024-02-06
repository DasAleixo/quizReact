import Welldone from '../img/welldone.svg';
import { useContext } from "react"
import { QuizContext } from "../context/quiz"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='flex flex-col justify-center text-center items-center'>
      <h2 className='font-bold text-white text-2xl mb-2'>Fim de jogo!</h2>
      <p className='text-white text-xl'>Pontuação: {quizState.score}</p>
      <p className='text-white text-xl mb-5'>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <img src={Welldone} alt='Você terminou!' className='mb-5 h-72'></img>
      <button onClick={() => dispatch({type: 'RETURN_STAGE'})} className='border-2 border-white bg-gradient-to-r from-violet-500 text-white py-2 px-5 font-bold text-xl rounded-3xl shadow-xl mb-8 hover:from-violet-400 transition-colors'>Reiniciar</button>
    </div>
  )
}

export default GameOver