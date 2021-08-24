import React from 'react';

import styled from 'styled-components';

const MainStyled = styled.div`
  background-image: url('https://source.unsplash.com/S7viz8JWxwY/1851x1234?crop=top');
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  /* object-fit: cover;
  object-position: 0 90%; */
  h1 {
    margin: 0;
  }
  p {
    max-width: 70rem;
  }
`;

const MainPage = (props) => {
  return (
    <MainStyled>
      <h1>Water My Plants</h1>
      <p> Never delay another water day. Water My Plants is an app that remembers you when your beloved flora needs to be watered so you don't have to. With our set it and forget it design your plants are always watered on time.</p>
      <p>For our VIP plant enthusiasts, Water My Plants allows subscribers to track their plant's health using a visual diary with an inclusive journal. Simply capture a photo of your flora and have a visual representation of changes to your plant's daily health and growth! </p>
    </MainStyled>
  );
};

export default MainPage;