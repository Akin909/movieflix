import React from 'react';
import styled from 'styled-components';
import { Loading } from './../styles/components';

const Banner = styled.iframe`
  width: 100%;
  margin: 0;
  height: 30em;
`;

const MovieBanner = ({ movies }) => {
  console.log('movies', movies);
  const randomTrailer = Math.floor(Math.random() * movies.length);
  console.log('movies', movies[randomTrailer].trailer);
  const url = `https://www.youtube.com/embed/${movies[randomTrailer].trailer ? movies[randomTrailer].trailer.key : ''}`;
  return (
    <Banner src={url}>
      {movies[randomTrailer].overview
        ? <Loading>Loading...</Loading>
        : <div>
            <h1>{movies[randomTrailer].title}</h1>
            <p>{movies[randomTrailer].overview}</p>
          </div>}
    </Banner>
  );
};

export default MovieBanner;
