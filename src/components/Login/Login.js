import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../Firebase";

const Login = ({ logo, setUser }) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <Logo src={logo} />
        <h1>Sign into KR Tradings</h1>
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  background-color: #f8f8f8;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 3px gray;
  text-align: center;
`;

const Logo = styled.img`
  height: 100px;
  cursor: pointer;
  margin-bottom: 40px;
`;

const LoginButton = styled.button`
  margin-top: 50px;
  height: 40px;
  padding: 4px 8px;
  font-size: 16px;
  background: #3f51b5;
  outline: none;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  :hover {
    color: #3f51b5;
    background-color: #f5f5f5;
    transition: all 1s;
  }
`;
