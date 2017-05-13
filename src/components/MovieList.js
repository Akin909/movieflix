import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { beginFetch, startPlaying } from './../actions/index';
import MovieCards from './MovieCard';
import MovieBanner from './Banner';
import { Container } from './../styles/components';

import styled from 'styled-components';
import { Title, Loading, CardContainer } from './../styles/components';

const MovieListContainer = styled(Container)`
  color: white;
`;

const MovieCardContainer = styled(CardContainer)`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
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
              <MovieCardContainer>
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
              </MovieCardContainer>
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
