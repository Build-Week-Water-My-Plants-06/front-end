import styled from 'styled-components';

const LoginStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  div {
    margin: 15% 15%;
    display: flex;
    flex-flow: column nowrap;
    a {
      display: block;
      text-decoration: none;
      color: black;
    }
  }
  form {
    display: flex;
    flex-flow: column nowrap;
  }
  .warning {
    color: red;
    margin: 0;
    min-height: 1rem;
  }
`;

export default LoginStyled;