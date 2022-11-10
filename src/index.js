import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import store2 from './redux/store2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store2}>
    <App />
  </Provider>
);
