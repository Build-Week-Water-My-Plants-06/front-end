import styled from "styled-components";

const LoginStyled = styled.div`
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: #ffffff;
  width: 30%;
  height: 60%;
  margin: 7%;
  margin-top: 11%;
  border-radius: 5%;
  box-shadow: 0 0 7px #000;
  font-family: "Hina Mincho", serif;
  h1 {
    padding-top: 22%;
    text-align: center;
    color: #3ca55c;
    font-weight: bold;
    font-size: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-top: 40px;
  }
  .username {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: "Hina Mincho", serif;
  }
  .password {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;
    font-family: "Hina Mincho", serif;
  }
  .username:focus,
  .password:focus {
    border: 2px solid rgba(0, 0, 0, 0.18);
  }
  button {
    margin: auto;
  }
  .signIn {
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background: #3ca55c;
    background: linear-gradient(to right, #3ca55c, #b5ac49);
    border: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: "Ubuntu", sans-serif;
    /* margin-left: 35%; */
    font-size: 1rem;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  }
  .signUp {
    margin-top: 35px;
  }
  a {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
    color: #16a085;
    text-decoration: none;
  }
  .forgot {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
    color: #e1bee7;

    /* padding-top: 5px; */
  }
  .warning {
    color: red;
    margin: 0;
    min-height: 1rem;
  }
`;

export default LoginStyled;
