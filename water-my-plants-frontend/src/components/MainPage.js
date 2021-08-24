import React from 'react';

import styled from 'styled-components';

import background from '../images/Background.jpg';

const MainStyled = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* object-fit: cover;
  object-position: 0 90%; */
  h1 {
    margin: 0;
  }
  p {
    max-width: 70rem;
    font-size: 1.2rem;
  }
  button {
    margin: 2rem 0;
    padding: .9rem 2rem ;
    font-size: 1rem;
    border-radius: 1rem;
    :hover {
      background-color: #f5cace;
    }
  }
`;

const MainPage = (props) => {
  return (
    <MainStyled>
      <h1>Water My Plants</h1>
      <p> Never delay another water day. Water My Plants is an app that remembers when your beloved flora needs to be watered so you don't have to. With our set it and forget it design, we make it easy to water your plants on time.</p>
      <p>For our VIP plant enthusiasts, Water My Plants allows subscribers to track their plant's health using a visual diary with an inclusive journal. Simply capture a photo of your flora and have a visual representation of changes to your plant's daily health and growth! </p>
      <button>Get Started now!</button>
    </MainStyled>
  );
};

export default MainPage;