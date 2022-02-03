import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CardsContainer from './CardsContainer';

import {
  setFlipped,
  setCardIndex,
} from '../actions';

describe('CardsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      cards: [
        { id: 1, question: '사과를 영어로 하면?', answer: 'apple' },
        { id: 2, question: '과일을 영어로 하면?', answer: 'fruit' },
      ],
      cardIndex: given.cardIndex,
      flipped: given.flipped,
    }));
  });

  it("renders Cards Container and initializes card's state", () => {
    given('cardIndex', () => 0);

    render(
      <MemoryRouter>
        <CardsContainer />
      </MemoryRouter>,
    );

    expect(dispatch).toBeCalledWith(setFlipped(false));
    expect(dispatch).toBeCalledWith(setCardIndex(0));
  });

  it('renders flip button and listens click event', () => {
    given('cardIndex', () => 0);
    given('flipped', () => false);

    const { getByRole } = render(
      <MemoryRouter>
        <CardsContainer />
      </MemoryRouter>,
    );

    expect(getByRole('button', { name: 'FLIP' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: 'FLIP' }));

    expect(dispatch).toBeCalledWith(setFlipped(!given.flipped));
  });

  context('when the card is the last one', () => {
    it("doesn't change the card index when 'O' button clicked", () => {
      const lastIndex = 1;
      given('cardIndex', () => lastIndex);

      const { getByRole } = render(
        <MemoryRouter>
          <CardsContainer />
        </MemoryRouter>,
      );

      fireEvent.click(getByRole('button', { name: 'O' }));

      expect(dispatch).toBeCalledWith(setCardIndex(lastIndex));
    });

    context('when the card is not the last one', () => {
      it("changes the card index when 'O' button clicked", () => {
        const cardIndex = 0;
        const changedCardIndex = cardIndex + 1;
        given('cardIndex', () => cardIndex);

        const { getByRole } = render(
          <MemoryRouter>
            <CardsContainer />
          </MemoryRouter>,
        );

        fireEvent.click(getByRole('button', { name: 'O' }));

        expect(dispatch).toBeCalledWith(setCardIndex(changedCardIndex));
      });
    });
  });
});
