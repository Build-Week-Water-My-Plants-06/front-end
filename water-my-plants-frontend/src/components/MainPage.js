import React from "react";

import styled from "styled-components";

const MainStyled = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: "Hina Mincho", serif;
  line-height: 1.3;
  h1 {
    font-family: "Cinzel Decorative", cursive;
    margin: 0;
    padding-top: 1rem;
    font-size: 4rem;
  }
  p {
    max-width: 70rem;
    font-size: ${(pr) => pr.theme.baseFontSize};
  }
  button {
    padding: 0.9rem 2rem;
    font-size: ${(pr) => pr.theme.buttonFontSize};
    border-radius: 1rem;
    font-family: "Hina Mincho", serif;
    :hover {
      background-color: ${(pr) => pr.theme.primaryColor};
      font-size: ${(pr) => pr.theme.baseFontSize};
      cursor: pointer;
    }
  }
  @media ${(pr) => pr.theme.breakpointMobile} {
    h1 {
      margin: 0;
      font-size: 2rem;
      padding-top: 1rem;
    }
    .p1 {
      font-size: ${(pr) => pr.theme.mobileBaseFontSize};
    }
    .p2 {
      font-size: ${(pr) => pr.theme.mobileBaseFontSize};
      margin-left: 46%;
    }
    button {
      margin: 1rem 0 0 12.5rem;
      padding: 0.45rem 1rem;
      font-size: ${(pr) => pr.theme.mobileButtonFontSize};

      :hover {
        font-size: ${(pr) => pr.theme.mobileBaseFontSize};
      }
    }
  }
`;

const MainPage = () => {
  return (
    <MainStyled>
      <h1>Water My Plants</h1>
      <p className="p1">
        Never delay another water day. Water My Plants is an app that remembers
        when your beloved flora needs to be watered so you don't have to. With
        our set it and forget it design, we make it easy to water your plants on
        time.
      </p>
      <p className="p2">
        For our VIP plant enthusiasts, Water My Plants allows subscribers to
        track their plant's health using a visual diary with an inclusive
        journal. Simply capture a photo of your flora and have a visual
        representation of changes to your plant's daily health and growth!
      </p>
      <a href="/">
        <button>Get Started now!</button>
      </a>
    </MainStyled>
  );
};

export default MainPage;
