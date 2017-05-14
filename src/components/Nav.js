import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleSearch } from './../actions/index';
import SearchBar from './SearchBar';
import searchIcon from './../../public/search-icon.png';
import styled from 'styled-components';
import { MainTitle } from './../styles/components';

const Links = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  margin: 0.4rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    font-weight: 800;
  }
`;

const GreetUser = styled.span`
  color: white;
  font-weight: 800;
  padding-right: 1rem;
`;

const Image = styled.img`
  width: 2rem;
  height:2rem;
  margin: 0.5rem;
`;

const NavBar = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  padding: 0.5rem;
  z-index: 100;
`;

class Nav extends Component {
  state = {
    value: '',
    searchResults: [],
  };

  filterResults = searchTerm => {
    const searchResults = this.props.movies.movies.filter(movie => {
      if (movie.title.toLowerCase().includes(searchTerm)) {
        return movie;
      }
      return movie;
    });
    this.setState({ searchResults });
  };

  handleChange = event => {
    this.setState(
      {
        value: event.target.value,
      },
      this.filterResults(event.target.value)
    );
  };
  render() {
    return (
      <NavBar>
        <MainTitle>
          MovieFlix
        </MainTitle>
        <Links>
          {this.props.user.loggedIn
            ? <GreetUser> Hi, {this.props.user.firstname}</GreetUser>
            : ''}
          {this.props.showSearch.searchStatus &&
            <SearchBar {...this.state} handleChange={this.handleChange} />}
          <Image src={searchIcon} onClick={this.props.toggleSearch} />
          <StyledLink to="Login">Login</StyledLink>
          <StyledLink to="/">Home</StyledLink>
        </Links>
      </NavBar>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    movies: state.movies,
    showSearch: state.search,
  };
};

export default connect(mapStateToProps, { toggleSearch })(Nav);
