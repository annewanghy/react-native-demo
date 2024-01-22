import {combineReducers, applyMiddleware} from 'redux';
import {configureStore, Tuple} from '@reduxjs/toolkit';

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = configureStore({
  reducer: combineReducers({count: counter}),
  middleware: () => middlewares,
});

export {store};
