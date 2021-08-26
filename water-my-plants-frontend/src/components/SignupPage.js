import React, {useEffect, useState} from 'react';
import * as yup from 'yup';

import LoginStyled from './formStyled';
import schema from '../validation/SignupSchema';


const initialFormValues = {
  username: '',
  password: '',
  // passconfirm: '',
  phone: '',
  tos: false
}
const initialFormErrors = {
  username: '',
  password: '',
  // passconfirm: '',
  phone: '',
  tos: false
}
const SignupPage = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}));
  }
  const inputChange = evt => {
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    validate(name, valueToUse);
    setFormValues({...formValues,[name]:valueToUse});
  }
  const submit = evt => {
    evt.preventDefault();
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);
  }

  useEffect(() => {
    props.changeBack('form');
  },[]);

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  },[formValues])

  return (
    <LoginStyled>
      <div>
        <form onSubmit={submit}>
          <label>Enter a Username<br/>
            <input 
              name="username"
              placeHolder="Enter a username"
              type="text"
              onChange={inputChange}
              value={formValues.username}
            />
          </label>
          <p class="warning">{formErrors.username}</p>
          <label>Enter a Phone Number<br/>
            <input 
              name="phone"
              placeHolder="Enter a phone number"
              type="text"
              onChange={inputChange}
              value={formValues.phone}
            />
          </label>
          <p class="warning">{formErrors.phone}</p>
          <label>Enter a Password<br/>
            <input 
              name="password"
              placeHolder="Enter a password"
              type="password"
              onChange={inputChange}
              value={formValues.password}
            />
          </label>
          <p class="warning">{formErrors.password}</p>
          {/* <label>Reenter Password<br/>
            <input 
              name="passconfirm"
              placeHolder="Reenter the password"
              type="password"
              onChange={inputChange}
              value={formValues.passconfirm}
            />
          </label>
          <p class="warning">{formErrors.passconfirm}</p> */}
          <label><a href="/">Terms of Service</a>
            <input 
              type="checkbox"
              name="tos"
              checked={formValues.tos}
              onChange={inputChange}
            />
          </label>
          <p class="warning">{formErrors.tos}</p>
          <button disabled={disabled}>Create Account!</button>
        </form>
      </div>
    </LoginStyled>
  );
};

export default SignupPage;