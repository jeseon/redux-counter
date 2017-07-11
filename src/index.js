import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { INCREMENT } from './actions';
import App from './App';

/*
 * Reducer
 */
const initialState = {
  value: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + action.addBy
      });
    default:
      return state;
  }
}

/*
 * Store
 */
const store = createStore(counterReducer);

const render = () => ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);

store.subscribe(render);
render();
