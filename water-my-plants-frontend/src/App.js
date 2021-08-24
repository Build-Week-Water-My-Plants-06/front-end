import React, {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';

import Header from './components/Header';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';

import background from './images/Background.jpg';
import signinBack from './images/FormBackground.jpg';

let currentBackground = background;


const StyledApp = styled.div`
  background-image: url(${currentBackground});
  height: 120vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`;

function App() {
  const [appBack, setAppBack] = useState(background);

  useEffect(() => {
    const rootApp = document.querySelector('#root div');
    rootApp.style.backgroundImage = `url(${appBack})`;
    rootApp.style.backgroundPosition = `left top`;
  },[appBack]);

  const changeBackground = page => {
    if (page === 'form') {
      setAppBack(signinBack);
    }
  }

  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/login">
          <LoginPage changeBack={changeBackground}/>
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </StyledApp>
  );
}


export default App;
