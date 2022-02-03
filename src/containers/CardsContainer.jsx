import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Card from '../components/Card';
import CardButtons from '../components/CardButtons';

import {
  setFlipped,
  setCardIndex,
} from '../actions';

import { get } from '../utils';

const CardItemsContainer = styled.div({
  width: '100vw',
  height: '90vh',
  position: 'relative',
});

const CardItemsWrapper = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export default function CardsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFlipped(false));
    dispatch(setCardIndex(0));
  }, []);

  const cards = useSelector(get('cards'));
  const cardIndex = useSelector(get('cardIndex'));
  const flipped = useSelector(get('flipped'));
  const card = cards[cardIndex];

  const handleFlip = () => {
    dispatch(setFlipped(!flipped));
  };

  const handleClick = () => {
    // TODO: 일단 다음 카드로 넘어가도록만 구현 / X, O 처리에 대한 추가 구현 필요
    if (cardIndex < cards.length - 1) {
      dispatch(setCardIndex(cardIndex + 1));
    } else {
      dispatch(setCardIndex(cards.length - 1));
    }

    dispatch(setFlipped(false));
  };

  return (
    <CardItemsContainer>
      <CardItemsWrapper>
        <Card
          content={flipped ? card.answer : card.question}
        />
        <CardButtons
          onFlip={handleFlip}
          onClick={handleClick}
        />
      </CardItemsWrapper>
    </CardItemsContainer>
  );
}
