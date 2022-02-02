import {
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';

const MenuBar = styled.header({
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
});

const Title = styled.div({
  paddingLeft: '16px',
  fontSize: '20px',
});

const MenuItems = styled.ul({
  display: 'flex',
  '& li': {
    paddingRight: '16px',
  },
});

export default function Header() {
  return (
    <MenuBar>
      <Title>
        <Link to="/">Flashcards</Link>
      </Title>
      <MenuItems>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/cardsets">cardsets</Link></li>
        <li><Link to="/login">log in</Link></li>
        <li><Link to="/signup">sign up</Link></li>
      </MenuItems>
    </MenuBar>
  );
}
