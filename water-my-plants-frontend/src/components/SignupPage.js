import React, {useEffect} from 'react';

import LoginStyled from './formStyled';


const SignupPage = (props) => {

  useEffect(() => {
    props.changeBack('form');
  },[]);

  return (
    <LoginStyled>
      <div>
        <form>
          <label>Enter a Username<br/>
            <input 
              name="username"
              placeHolder="Enter a username"
              type="text"
            />
          </label>
          <label>Enter a Phone Number<br/>
            <input 
              name="phone"
              placeHolder="Enter a phone number"
              type="text"
            />
          </label>
          <label>Enter a Password<br/>
            <input 
              name="password"
              placeHolder="Enter a password"
              type="password"
            />
          </label>
          <label>Reenter Password<br/>
            <input 
              name="passconfirm"
              placeHolder="Reenter the password"
              type="password"
            />
          </label>
          <button>Create Account!</button>
        </form>
      </div>
    </LoginStyled>
  );
};

export default SignupPage;