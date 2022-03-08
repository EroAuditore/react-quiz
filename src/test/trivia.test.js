import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import * as stages from './../redux/utils/constants';
import { BrowserRouter } from 'react-router-dom';
import Trivia from './../components/trivia';

const initialState = {
  trivia: {
    stage: stages.TRIVIA,
    score: 0,
    questionIndex: 0,
    questions: [
      {
        category: 'Science & Nature',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
    ],
    answers: [],
    error: false,
  },
};
const mockStore = configureStore();
let store;

describe('it renders home component', () => {
  // Arrange
  store = mockStore(initialState);

  // Act
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Trivia />
        </BrowserRouter>
      </Provider>
    );
  });

  // Assert

  test('Render first question', () => {
    const element = screen.getByText(initialState.trivia.questions[0].question);
    expect(element).toHaveTextContent(
      initialState.trivia.questions[0].question
    );
  });
});
