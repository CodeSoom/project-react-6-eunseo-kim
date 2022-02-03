export function setFlipped(flipped) {
  return {
    type: 'setFlipped',
    payload: { flipped },
  };
}

export function setCardIndex(cardIndex) {
  return {
    type: 'setCardIndex',
    payload: { cardIndex },
  };
}
