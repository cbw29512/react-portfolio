import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// State logic: GitHub Pages serves static files only. HashRouter keeps every
// route inside index.html so direct visits never request a missing static page.
const rootElement = document.getElementById('root');

try {
  if (!rootElement) {
    throw new Error('Portfolio root element was not found.');
  }

  const root = createRoot(rootElement);
  root.render(
    <HashRouter>
      <App />
    </HashRouter>
  );
} catch (error) {
  console.error('Portfolio application failed to start:', error);
  throw error;
}

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
