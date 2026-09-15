import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { expect, it } from 'vitest';
import App from './App';

const ROUTES = ['/', '/projects', '/resume', '/contact', '/missing-route'];

ROUTES.forEach((route) => {
  it(`renders ${route} without crashing`, () => {
    try {
      const html = renderToString(
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      );

      expect(html.length).toBeGreaterThan(0);
    } catch (error) {
      console.error(`Route smoke test failed for ${route}:`, error);
      throw error;
    }
  });
});
