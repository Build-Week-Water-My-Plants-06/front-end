import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

import background from "./images/Background.jpg";
// import signinBack from "./images/FormBackground.jpg";
import signinBack from "./images/LoginBackground.jpg";
import image from "./images/loginIcon.jpg";

let currentBackground = background;

const StyledApp = styled.div`
  background-image: url(${currentBackground});
  height: 100vh;
  /* height: 120vh; */
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`;

const initialSignupValues = {
  username: "",
  phone: "",
  password: "",
  passconfirm: "",
};
const initialSignupErrors = {
  username: "",
  phone: "",
  password: "",
  passconfirm: "",
};

function App() {
  const [appBack, setAppBack] = useState(background);

  useEffect(() => {
    const rootApp = document.querySelector("#root div");
    rootApp.style.backgroundImage = `url(${appBack})`;
    // rootApp.style.backgroundPosition = `left top`;
    rootApp.style.backgroundPosition = `center bottom`;
  }, [appBack]);

  const changeBackground = (page) => {
    if (page === "form") {
      setAppBack(signinBack);
    }
  };

  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/login">
          <LoginPage changeBack={changeBackground} image={image} />
        </Route>
        <Route path="/signup">
          <SignupPage changeBack={changeBackground} />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </StyledApp>
  );
}

export default App;
