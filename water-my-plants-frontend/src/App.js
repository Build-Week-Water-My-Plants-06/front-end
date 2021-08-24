import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './components/MainPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
