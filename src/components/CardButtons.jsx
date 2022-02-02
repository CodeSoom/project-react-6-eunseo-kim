import styled from '@emotion/styled';

const CardButtonsWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '15px',
  height: '50px',
});

const WrongButton = styled.button({
  width: '50px',
  marginRight: '15px',
  border: 'none',
  borderRadius: '30px',
  backgroundColor: '#e44b88',
  color: 'white',
});

const FlipButton = styled.button({
  flex: 1,
  marginRight: '15px',
  border: 'none',
  borderRadius: '30px',
});

const CorrectButton = styled.button({
  width: '50px',
  border: 'none',
  borderRadius: '30px',
  backgroundColor: '#01dca4',
  color: 'white',
});

export default function CardButtons() {
  return (
    <CardButtonsWrapper>
      <WrongButton
        type="button"
      >
        X
      </WrongButton>
      <FlipButton
        type="button"
      >
        FLIP
      </FlipButton>
      <CorrectButton
        type="button"
      >
        O
      </CorrectButton>
    </CardButtonsWrapper>
  );
}
