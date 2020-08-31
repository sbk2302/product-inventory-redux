import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css'
import App from './App';
import {HashRouter} from 'react-router-dom'
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import AllReducers from "./reducers/allreducer";

const reduxstore=createStore(AllReducers,applyMiddleware(thunk))

ReactDOM.render(
   <HashRouter>
     <Provider store ={reduxstore}> <App />
     </Provider>
     </HashRouter> ,
  document.getElementById('root')
);

