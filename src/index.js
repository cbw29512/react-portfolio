import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { HashRouter } from 'react-router-dom';

// State logic: GitHub Pages serves static files only. HashRouter keeps all
// portfolio routes inside the loaded index.html file so direct visits and
// refreshes do not ask GitHub Pages for a missing /resume or /projects file.
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}
