import React from 'react';
import styled from 'styled-components';

import loginIcon from './../../public/login-icon.png';
import {
  Container,
  Card,
  CardContainer,
  Blurb,
  Button,
} from './../styles/components';

const LoginContainer = styled(Container)`
  min-height: 90vh;
`;

const LoginCard = styled(Card)`
  
`;

const LoginCardContainer = styled(CardContainer)`
  margin: 5rem;
`;

const LoginIcon = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const Login = props => (
  <LoginContainer>
    <LoginCardContainer>
      <LoginCard>
        <LoginIcon alt="login icon" src={loginIcon} />
        <Blurb>
          <Button>Login</Button>
        </Blurb>
      </LoginCard>
      <LoginCard>
        <LoginIcon alt="login icon" src={loginIcon} />
        <Blurb>
          <Button>Login</Button>
        </Blurb>
      </LoginCard>
      <LoginCard>
        <LoginIcon alt="login icon" src={loginIcon} />
        <Blurb>
          <Button>Login</Button>
        </Blurb>
      </LoginCard>
    </LoginCardContainer>
  </LoginContainer>
);

export default Login;
