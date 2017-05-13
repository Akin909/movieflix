import React from 'react';
import { connect } from 'react-redux';
import { MainTitle } from './../styles/components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled.div`
  display: flex;
  align-self: flex-end;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  margin: 0.4rem;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    font-weight: 800;
  }
`;

const NavBar = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const Nav = props => (
  <NavBar>
    <MainTitle>
      MovieFlix
    </MainTitle>
    {props.user.loggedIn ? <span> Hi, {props.user.firstname}</span> : ''}
    <Links>
      <StyledLink to="Login">Login</StyledLink>
      <StyledLink to="/">Home</StyledLink>
    </Links>
  </NavBar>
);
const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Nav);
