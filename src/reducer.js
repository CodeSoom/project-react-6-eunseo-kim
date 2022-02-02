import cardsets from './fixtures/cardsets';

const initialState = {
  cardsets,
  cardIndex: 0,
  flipped: false,
  cards: [
    { id: 1, question: '사과를 영어로 하면?', answer: 'apple' },
    { id: 2, question: '과일을 영어로 하면?', answer: 'fruit' },
  ],
};

const reducers = {
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
