import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('renders the application shell without crashing', () => {
  const div = document.createElement('div');

  try {
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
      div
    );
  } finally {
    ReactDOM.unmountComponentAtNode(div);
  }
});
