import React, {useEffect} from 'react';

import styled from 'styled-components';

import signinBack from '../images/FormBackground.jpg';

const LoginStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  form {
    display: flex;
    flex-flow: column nowrap;
    margin: 15% 15%;
  }
`;

const LoginPage = (props) => {

  useEffect(() => {
    props.changeBack('form');
  },[]);

  return (
    <LoginStyled>
      <form>
        <label>Username<br/>
          <input 
            name="username"
            placeHolder="Enter your username"
            type="text"
          />
        </label>
        <label>Password<br/>
          <input 
            name="password"
            placeHolder="Enter your password"
            type="password"
          />
        </label>
        <button>Sign in!</button>
      </form>
    </LoginStyled>
  );
};

export default LoginPage;