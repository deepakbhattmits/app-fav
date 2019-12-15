import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProvider from './hooks-store/products-store';
// import ProductsProvider from './context/products-context';
// import productReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);
configureProvider();
const rootElement = document.querySelector('#root');
ReactDOM.render(
  // <Provider store={store}>
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductsProvider >
  // </Provider>
  rootElement
);
