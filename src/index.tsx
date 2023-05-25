import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './i18n';


type TodoItem = string | number | boolean;

interface StateInterface {
  loader: boolean;
  counter: number;
  todo: TodoItem[];
}

const defaultState:StateInterface = {
  loader: true,
  counter: 0,
  todo: [],
};


const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'loader':
      return {...state, loader: action.payload};
    case 'minus':
      return {...state, counter: state.counter - action.payload};
    case 'not-minus':
      return {...state, counter: action.payload};
    case 'plus':
      return {...state, counter: state.counter + action.payload};
    case 'repeat': 
      return {...state, counter: action.payload};
    case 'completed':
      return {...state, todo: [...state.todo.map((i:any) => {
        return i.id === action.payload ? {...i, completed: i.completed = true} : {...i}
      })]};
    case 'remove-task': 
    return {...state, todo: [...state.todo.filter((i:any) => {
      return i.id !== action.payload;
    })]}; 
    case 'add-task':
      return {...state, todo: [...state.todo, action.payload]}
    case 'add-task-enter':
      return {...state, todo: [...state.todo, action.payload]}
    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename='/five-basics'>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


