import React from 'react';
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
    <Links>
      <StyledLink to="Login">Login</StyledLink>
      <StyledLink to="/">Home</StyledLink>
    </Links>
  </NavBar>
);

export default Nav;
