import { createSlice } from '@reduxjs/toolkit';
import * as stages from '../utils/constants';

const initialState = {
  stage: stages.START_TRIVIA,
  score: 0,
  questionIndex: 0,
  questions: {},
  answers: [],
  error: false,
};

const triviaReducer = createSlice({
  name: 'trivia',
  initialState,

  reducers: {
    startTrvia(state) {
      state.stage = stages.FETCHING_TRIVIA;
    },
    succesLoad(state, action) {
      state.stage = stages.TRIVIA;
      state.questions = action.payload;
      state.error = false;
      state.questionIndex = 0;
      state.score = 0;
    },
    failLoad(state) {
      state.error = true;
    },
    answerQuestion(state, action) {
      const currentQuestion = state.questions[state.questionIndex];
      state.score +=
        action.payload.answer === currentQuestion.correct_answer ? 1 : 0;
      state.questionIndex += 1;
      state.answers.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.correct_answer,
        answer: action.payload.answer,
        isCorrect: action.payload.answer === currentQuestion.correct_answer,
      });
    },
    endTrivia(state) {
      state.stage = stages.END_TRIVIA;
    },
  },
});

export const { startTrvia, succesLoad, failLoad, answerQuestion, endTrivia } =
  triviaReducer.actions;
export default triviaReducer.reducer;
