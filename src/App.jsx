import './App.css'
import Welcome from './components/Welcome'
import Questions from './components/Questions'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

import { QuizContext } from './context/quiz'
import { useContext } from 'react'


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='flex flex-col p-6 justify-center items-center text-center'>
      <h1 className="font-bold text-white text-4xl mb-10">Quiz de Programação</h1>
      {quizState.gameStage === 'start' && <Welcome />}
      {quizState.gameStage === 'category' && <PickCategory />}
      {quizState.gameStage === 'playing' && <Questions />}
      {quizState.gameStage === 'end'  && <GameOver />}
    </div>
  )
}

export default App
