import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your apps to work offlines and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about services workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
