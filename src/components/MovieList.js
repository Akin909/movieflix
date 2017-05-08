import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { beginFetch } from './../actions/index';
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

  tidyOrCount = (words, count) => {
    const noOfWords = words.split(' ');
    if (count) return noOfWords.length;
    return noOfWords.slice(0, 50).join(' ') + '...';
  };

  render() {
    const { movies } = this.props.movies;
    const { videos } = this.props.movies;
    return (
      <MovieListContainer>
        <Title>In Cinemas Now..</Title>
        <MovieBanner {...movies[0]} videos={videos} />
        <CardContainer>
          {movies.length > 0
            ? movies.map(movie => {
                return <MovieCards key={uuid()} {...movie} />;
              })
            : <Loading>Loading...</Loading>}
        </CardContainer>
      </MovieListContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps, { beginFetch })(MovieList);
