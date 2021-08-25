import React from "react";

import styled from "styled-components";
import logo from "../images/Logo.jpg";

const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  background-color: transparent;
  border-bottom: 1px solid green; //Thomas please change this color to the green from the logo
  justify-content: space-between;
  align-items: center;
  img {
    height: 8rem;
    width: 14rem;
    margin: 0.5%;
    border-radius: 50%;
  }
  nav {
    padding: 0 3rem;
    display: flex;
    flex-flow: row nowrap;
    font-family: "Hina Mincho", serif;
    font-size: ${(pr) => pr.theme.navFontSize};
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
      background-color: ${(pr) => pr.theme.primaryColor};
      border-radius: 50%;
      color: purple; //Thomas please change this color on hover to the pot (purple) color
    }
  }
  @media ${(pr) => pr.theme.breakpointMobile} {
    border-bottom: none;
    img {
      height: 4rem;
      width: 7rem;
      margin: 1%;
    }
    nav {
      font-size: ${(pr) => pr.theme.mobileNavFontSize};
      padding: 0 1.5rem;
    }
    nav a {
      padding: 0 1rem;
      hover {
        background-color: none;
        border-radius: 0;
      }
    }
  }
`;

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
  );
};

export default Header;
