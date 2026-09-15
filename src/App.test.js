import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const ROUTES = ['/', '/projects', '/resume', '/contact', '/missing-route'];

ROUTES.forEach((route) => {
  it(`renders ${route} without crashing`, () => {
    const div = document.createElement('div');

    try {
      ReactDOM.render(
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>,
        div
      );

      expect(div.innerHTML.length).toBeGreaterThan(0);
    } catch (error) {
      console.error(`Route smoke test failed for ${route}:`, error);
      throw error;
    }
  });
});
