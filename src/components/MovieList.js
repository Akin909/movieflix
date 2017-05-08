import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beginFetch } from './../actions/index';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { Title } from './../styles/components';

const MovieListContainer = styled.div`
  display: grid;
  color: white;
  background-color:#141414;
`;

// width: 80%;
// flex-grow: 2;
// flex-shrink: 2;
// flex-basis: 0;
// height: 10em;
const MovieCard = styled.li`
  background-image: ${props => (props.url ? `url(${'https://image.tmdb.org/t/p/original/' + props.url})` : '')};
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 0.5rem;
  margin: 0.5rem;
  height: 20em;
  background-color: #848380;
  box-shadow: 0 1px 1px whitesmoke;
  overflow: hidden;
`;

const CardContainer = styled.ul`
  padding: 0;
  display: grid;
  list-style-type: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1em;
`;
//TODO the number given to the transform here is a rank hack...FIX IT
const Blurb = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0.3rem;
  padding: 0.3rem;
  background: hsla(0, 0%, 0%, 0.6);
  height: 100%;
  transition: transform 0.2s ease-in;
  transform: translate(0, 68%);
  &:hover {
    transform: translate(0, 0%)
  }
`;
const Summary = styled.p`
  font-weight: bold;
  overflow: scroll;
  transform: translate(0, 100%)
  &:hover {
    transform: translate(0, 0%)
  }
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
    return (
      <MovieListContainer>
        <Title>In Cinemas Now..</Title>
        <CardContainer>
          {this.props.movies.length > 0
            ? this.props.movies.map(movie => {
                return (
                  <MovieCard key={uuid()} url={movie.poster_path}>
                    {/*<img
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  />*/}
                    <Blurb>
                      <Title>{movie.title}</Title>
                      <Summary>
                        {movie.overview}
                      </Summary>
                    </Blurb>
                  </MovieCard>
                );
              })
            : <MovieCard>Loading...</MovieCard>}
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
