import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// State logic: GitHub Pages serves static files only. HashRouter keeps every
// route inside index.html so direct visits never request a missing static page.
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    try {
      registrations.forEach((registration) => registration.unregister());
    } catch (error) {
      console.error('Old service workers failed to unregister:', error);
    }
  }).catch((error) => {
    console.error('Service worker registrations could not be read:', error);
  });
}
