import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beginFetch } from './../actions/index';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { Title } from './../styles/components';

const MovieListContainer = styled.div`
  width: 100%;
  min-height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: flex;
  background-color: #848380;
  box-shadow: 0 1px 1px whitesmoke;
`;

const CardContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Blurb = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0.3rem;
  padding: 0.3rem;
  background: hsla(0, 0%, 49%, 0.6);
`;

class MovieList extends Component {
  componentDidMount() {
    this.props.beginFetch();
  }

  render() {
    return (
      <MovieListContainer>
        <Title>In Cinemas Now..</Title>
        <CardContainer>
          {this.props.movies.length > 0
            ? this.props.movies.map(movie => (
                <MovieCard key={uuid()} url={movie.poster_path}>
                  {/*<img
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  />*/}
                  <Blurb>
                    <Title>{movie.title}</Title>
                    <p>{movie.overview}</p>
                  </Blurb>
                </MovieCard>
              ))
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
