
import * as ReactDOM from 'react-dom'; import { StrictMode } from "react";
// import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);













// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from "react-router-dom";
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import productReducer from './redux/product'
// import dataReducer from './redux/newData'

// const composeEnhancers = compose;

// const rootReducer = combineReducers({
//   product: productReducer,
//   data: dataReducer
// })

// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunk)
// ))

// const app = (
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>

// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(app);


