import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const { worker } = require('./mocks/browser');
worker.start();
const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
}
reportWebVitals();
