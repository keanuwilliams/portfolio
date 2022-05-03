import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);