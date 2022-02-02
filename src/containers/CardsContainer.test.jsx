import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CardsContainer from './CardsContainer';

describe('CardsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      cards: [
        { id: 1, question: '사과를 영어로 하면?', answer: 'apple' },
        { id: 2, question: '과일을 영어로 하면?', answer: 'fruit' },
      ],
      cardIndex: 1,
      flipped: true,
    }));
  });

  it('renders Cards Container', () => {
    render(
      <MemoryRouter>
        <CardsContainer />
      </MemoryRouter>,
    );
  });
});
