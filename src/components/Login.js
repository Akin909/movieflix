import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import uuid from 'uuid/v4';

import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import loginIcon from './../../public/login-icon.png';
import {
  Container,
  Card,
  CardContainer,
  Blurb,
  Button,
} from './../styles/components';
import LoginForm from './LoginForm';

const LoginContainer = styled(Container)`
  min-height: 90vh;
  grid-template-areas:"login login login"
  "form form form";
  justify-content: space-evenly;
  align-items: center;
`;

const LoginCard = styled(Card)`
  width: 15rem;
  height: 25rem;
`;

const LoginCardContainer = styled(CardContainer)`
  margin-top: 1rem;
  grid-area: login
  grid-template-rows: 1fr;
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

const Transition = styled(CSSTransitionGroup)`
  grid-area: form;
`;

const FirstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const Login = props => {
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
      <Transition
        component={FirstChild}
        transitionName="login"
        transitionLeave={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {!props.user.loggedIn && <LoginForm key={uuid()} />}
      </Transition>
    </LoginContainer>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

// {
//   setTimeout(
//     () => (
//       <Redirect
//         to={{
//           pathname: '/',
//           state: { from: props.location },
//         }}
//       />
//     ),
//     2000
//   );
// }
// const FeedQuery = gql`query allUsers {
//   allUsers(orderBy: createdAt_DESC){
//     id
//     firstname
//     lastname
//   }
// }`;
export default connect(mapStateToProps)(Login);
