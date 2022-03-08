import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Home from '../components/home';
import * as stages from './../redux/utils/constants';
import { BrowserRouter } from 'react-router-dom';

const initialState = {
  trivia: {
    stage: stages.START_TRIVIA,
    score: 0,
    questionIndex: 0,
    questions: {},
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

  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );

  // Assert
  test('Button start render render', () => {
    let comp = component.getByText('Start');
    expect(comp).toHaveTextContent('Start');
  });
});
