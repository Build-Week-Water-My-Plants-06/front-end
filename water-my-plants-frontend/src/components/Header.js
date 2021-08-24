import React from 'react';

import styled from 'styled-components';

const HeaderStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: lightgray;
  justify-content: space-between;
  align-items: center;
  h3 {
    padding: 0 1rem;
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
    padding: 1.25rem 3rem;
    display: block;
    :hover {
      background-color: gray;
    }
  }
`

const Header = (props) => {
  return (
    <HeaderStyled>
      <h3>Water My Plants</h3>
      <nav>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/">Contact</a>
        </div>
        <div>
          <a href="/">Login</a>
        </div>
      </nav>
    </HeaderStyled>
  )
};

export default Header;