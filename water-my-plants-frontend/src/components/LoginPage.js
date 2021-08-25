import React, {useEffect, useState} from 'react';
import LoginStyled from './formStyled';
import schema from '../validation/SigninSchema';
import * as yup from 'yup';


const initialFormValues = {
  username: '',
  password: ''
};
const initialFormErrors = {
  username: '',
  password: ''
};
const initialDisabled = true;

const LoginPage = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}));
  }
  const inputChange = evt => {
    const {name, value} = evt.target;
    validate(name, value);
    setFormValues({...setFormValues,[name]:value});
  }
  const submit = evt => {
    evt.preventDefault();
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);
  }

  useEffect(() => {
    props.changeBack('form');
  },[]);

  return (
    <LoginStyled>
      <div>
        <form onSubmit={submit}>
          <label>Username<br/>
            <input 
              name="username"
              placeholder="Enter your username"
              type="text"
              onChange={inputChange}
              value={formValues.username}
            />
          </label>
          <p class="warning">{formErrors.username}</p>
          <label>Password<br/>
            <input 
              name="password"
              placeholder="Enter your password"
              type="password"
              onChange={inputChange}
              value={formValues.password}
            />
          </label>
          <p class="warning">{formErrors.password}</p>
          <button>Sign in!</button>
        </form>
        <p>Don't have an account?</p>
        <button><a href="/signup">Sign up!</a></button>
      </div>
    </LoginStyled>
  );
};

export default LoginPage;