import { createSlice } from '@reduxjs/toolkit';
import * as stages from '../utils/constants';

const initialState = { stage: stages.START_TRIVIA, score: 0 };

const quizReducer = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    // fetchData() {},
    // fetchFail() {}
    // eslint-disable-next-line prettier/prettier
  }
});

export const { fetchData, fetchFail } = quizReducer.actions;
export default quizReducer.reducer;
