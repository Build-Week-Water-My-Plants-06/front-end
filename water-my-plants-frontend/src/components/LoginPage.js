import React, { useEffect, useState } from "react";
import LoginStyled from "./formStyled";
import IconStyled from "./IconStyled";
import schema from "../validation/SigninSchema";
import * as yup from "yup";
// import image from "../images/loginIcon.jpg";

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};
const initialDisabled = true;

const LoginPage = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  const inputChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setFormValues({ ...setFormValues, [name]: value });
  };
  const submit = (evt) => {
    evt.preventDefault();
    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);
  };

  useEffect(() => {
    props.changeBack("form");
  }, []);

  return (
    <>
      <IconStyled>
        <div>
          <img src={props.image} alt="login icon" />
        </div>
      </IconStyled>

      <LoginStyled>
        <div>
          {/* <img src={props.image} alt="login icon" /> */}
          <h1>Login to Your Account</h1>
          <form onSubmit={submit}>
            <input
              className="username"
              name="username"
              placeholder="Enter your username"
              type="text"
              onChange={inputChange}
              value={formValues.username}
            />

            <p className="warning">{formErrors.username}</p>

            <input
              className="password"
              name="password"
              placeholder="Enter your password"
              type="password"
              onChange={inputChange}
              value={formValues.password}
            />

            <p className="warning">{formErrors.password}</p>

            <button className="signIn">Sign in!</button>
          </form>
          <p className="forgot" align="center">
            <a href="#">Forgot Password?</a>
          </p>
          <p align="center" className="signUp">
            Don't have an account? <a href="/signup">Sign up!</a>
          </p>
        </div>
      </LoginStyled>
    </>
  );
};

export default LoginPage;
