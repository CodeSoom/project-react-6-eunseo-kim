import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

import Header from './Header';

describe('Header', () => {
  it('renders application title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(getByText('Flashcards')).not.toBeNull();
  });

  it('renders header menus', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(getByText('home')).not.toBeNull();
    expect(getByText('about')).not.toBeNull();
    expect(getByText('courses')).not.toBeNull();
    expect(getByText('log in')).not.toBeNull();
    expect(getByText('sign up')).not.toBeNull();
  });
});
