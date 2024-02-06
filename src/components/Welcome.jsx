import Quiz from '../img/quiz.svg';
import { QuizContext } from '../context/quiz';
import { useContext } from 'react';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='from-violet-500 max-w-lg'>
        <h2 className='font-bold text-white text-3xl mb-5'>Seja bem-vindo</h2>
        <p className='text-lg bg-clip-text bg-gradient-to-r from-violet-500 text-transparent mb-4'>Clique no botão abaixo para começar</p>
        <button  onClick={() => dispatch({type: 'INITIAL_STAGE'})} className='border-2 border-white bg-gradient-to-r from-violet-500 text-white py-2 px-5 font-bold text-xl rounded-3xl shadow-xl mb-8 hover:from-violet-400 transition-colors'>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz"className='h-72'/>
    </div>
  )
}

export default Welcome