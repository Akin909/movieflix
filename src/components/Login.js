import React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
  width: 15rem;
  height: 25rem;
`;

const LoginCardContainer = styled(CardContainer)`
  margin: 5rem;
`;

const LoginIcon = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const LoginBlurb = styled(Blurb)`
  height: 30%;
  padding: 0.4rem;
  justify-content: center;
`;

const Login = props => {
  console.log('props', props);
  return (
    <LoginContainer>
      <LoginCardContainer>
        <LoginCard>
          <LoginIcon alt="login icon" src={loginIcon} />
          <LoginBlurb>
            <Button>Login</Button>
          </LoginBlurb>
        </LoginCard>
        <LoginCard>
          <LoginIcon alt="login icon" src={loginIcon} />
          <LoginBlurb>
            <Button>Login</Button>
          </LoginBlurb>
        </LoginCard>
        <LoginCard>
          <LoginIcon alt="login icon" src={loginIcon} />
          <LoginBlurb>
            <Button>Login</Button>
          </LoginBlurb>
        </LoginCard>
      </LoginCardContainer>
    </LoginContainer>
  );
};

const FeedQuery = gql`query allUsers {
  allUsers(orderBy: createdAt_DESC){
    id
    firstname
    lastname
  }
}`;

export default graphql(FeedQuery)(Login);
