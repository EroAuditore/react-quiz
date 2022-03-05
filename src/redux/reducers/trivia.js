import { createSlice } from '@reduxjs/toolkit';
import * as stages from '../utils/constants';

const initialState = { stage: stages.START_TRIVIA, score: 0 };

const triviaReducer = createSlice({
  name: 'trivia',
  initialState,
  // eslint-disable-next-line prettier/prettier
  reducers: {
    startTrvia(state) {
      state.stage = stages.START_TRIVIA;
    }
  }
});

// eslint-disable-next-line no-empty-pattern
export const { startTrvia } = triviaReducer.actions;
export default triviaReducer.reducer;
