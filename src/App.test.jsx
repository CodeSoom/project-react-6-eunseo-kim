import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context("with path '/'", () => {
    it('renders the home page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Create your own Flashcards!');
    });
  });

  context("with path '/about'", () => {
    it('renders the about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('about');
    });
  });

  context("with path '/courses'", () => {
    it('renders the courses page', () => {
      const { container } = renderApp({ path: '/courses' });

      expect(container).toHaveTextContent('courses');
    });
  });

  context("with path '/login'", () => {
    it('renders the log in page', () => {
      const { container } = renderApp({ path: '/login' });

      expect(container).toHaveTextContent('log in');
    });
  });

  context("with path '/signup'", () => {
    it('renders the sign up page', () => {
      const { container } = renderApp({ path: '/signup' });

      expect(container).toHaveTextContent('sign up');
    });
  });
});
