import { createSlice } from '@reduxjs/toolkit';
import * as stages from '../utils/constants';

const initialState = {
  stage: stages.START_TRIVIA,
  score: 0,
  questionIndex: 0,
  questions: {},
  error: false
};

const triviaReducer = createSlice({
  name: 'trivia',
  initialState,

  reducers: {
    startTrvia(state) {
      state.stage = stages.FETCHING_TRIVIA;
    },
    succesLoad(state, payload) {
      state.stage = stages.TRIVIA;
      state.questions = payload.data;
      state.error = false;
      state.questionIndex = 0;
      state.score = 0;
    },
    failLoad(state) {
      state.error = true;
    }
  }
});

export const { startTrvia, succesLoad, failLoad } = triviaReducer.actions;
export default triviaReducer.reducer;
