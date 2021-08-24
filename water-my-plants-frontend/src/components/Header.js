import React from 'react';

import styled from 'styled-components';
import logo from '../images/Logo.jpg';

const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  img {
    height: 5rem;
  }
  nav {
    padding: 0 3rem;
    display: flex;
    flex-flow: row nowrap;
  }
  nav div {
    height: 100%;
  }
  nav a {
    text-decoration: none;
    color: black;
    height: 100%;
    padding: 1.82rem 3rem;
    display: block;
    :hover {
      background-color: #f5cace;
    }
  }
`

const Header = (props) => {
  return (
    <HeaderStyled>
      <img src={logo} alt="business logo" />
      <nav>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/">Contact</a>
        </div>
        <div>
          <a href="/login">Login</a>
        </div>
      </nav>
    </HeaderStyled>
  )
};

export default Header;