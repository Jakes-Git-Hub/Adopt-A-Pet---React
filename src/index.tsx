import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const { worker } = require('./mocks/browser');
worker.start();

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();