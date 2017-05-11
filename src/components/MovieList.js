import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { beginFetch, startPlaying } from './../actions/index';
import MovieCards from './MovieCard';
import MovieBanner from './Banner';

import styled from 'styled-components';
import { Title, Loading } from './../styles/components';

const MovieListContainer = styled.div`
  display: grid;
  color: white;
  background-color:#141414;
`;

const CardContainer = styled.ul`
  padding: 0;
  margin: 0.5rem;
  display: grid;
  list-style-type: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1em;
`;

class MovieList extends Component {
  componentDidMount() {
    this.props.beginFetch();
  }

  handleClick = movie => {
    this.props.startPlaying(movie);
  };

  render() {
    const { movies } = this.props.movies;
    return (
      <MovieListContainer>
        {movies.length > 0
          ? <div>
              <Title>In Cinemas Now..</Title>
              <MovieBanner movies={movies} />
              <CardContainer>
                {movies.map(movie => {
                  return (
                    <MovieCards
                      isPlaying={this.props.playing}
                      onClick={this.handleClick}
                      key={uuid()}
                      {...movie}
                    />
                  );
                })}
              </CardContainer>
            </div>
          : <Loading>Loading...</Loading>}
      </MovieListContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    playing: state.playing,
  };
}

export default connect(mapStateToProps, { beginFetch, startPlaying })(
  MovieList
);
