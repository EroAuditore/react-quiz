import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas';
import rootReducer from './reducers/index';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

// const store = configureStore({
//   reducer: allReducers,
//   middleware: (getDefaultMiddleware) =>
//     // eslint-disable-next-line prettier/prettier
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare)
// });

// LOUNCH MIDDLEWARE
sagaMiddleWare.run(rootSaga);

export default store;
