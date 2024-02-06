import { createContext, useReducer } from "react"; 

import questions from '../data/questions_complete'

const STATES = ['start', 'category', 'playing', 'end'];


const initialState = {
    gameStage: STATES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    tip: false,
    toHide: false,
};

const quizReducer = (state, action) => {
    switch(action.type) {   
        case 'INITIAL_STAGE':
            return {...state, gameStage: STATES[1] }

        case 'START_GAME': 
            let quizQuestions = null;

            state.questions.forEach((question) => {
                if(question.category === action.payload) {
                    quizQuestions = question.questions;
                }
            });
            return {...state, questions: quizQuestions, gameStage: STATES[2]}

        case 'REORDER_QUESTION':
            const reorderQuestion = state.questions.sort(() => {
                return Math.random() - 0.5;
            });
            return {...state, questions: reorderQuestion};
        
        case 'CHANGE_STAGE': 
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if(!state.questions[nextQuestion]) {
                endGame = true;
            }
            return {...state, currentQuestion: nextQuestion, gameStage: endGame ?  STATES[3] : STATES[2], answerSelected: false , tip: null, restOptions: null}

        case 'SHOW_TIP': 
            console.log(action.payload)
            const tip = action.payload
            return {...state, tip: tip}
        
        case 'REMOVE_OPTION':
            const questionWithoutOption = state.questions[state.currentQuestion]
            let repeat = true
            let optionToHide
            questionWithoutOption.options.forEach((option) => {
                if(option !== questionWithoutOption.answer && repeat) {
                    optionToHide = option
                    return repeat = false
                }
            })
            console.log(optionToHide)
            return {...state, toHide: optionToHide, tip: true}

        case 'RETURN_STAGE':
            return initialState;

        case 'SELECT_OPTION':
            if(state.answerSelected) return state

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if(answer === option) correctAnswer = 1;
            
            return {...state, score: state.score + correctAnswer, answerSelected: option}

        default:
            return state
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return  <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}