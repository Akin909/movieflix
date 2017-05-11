import React from 'react';
import { Loading, Iframe } from './../styles/components';

const MovieBanner = ({ movies }) => {
  const randomIndex = array => Math.floor(Math.random() * array.length);
  const randomMovie = randomIndex(movies);
  const randomTrailer = randomIndex(movies[randomMovie].trailer);
  const url = `https://www.youtube.com/embed/${movies[randomTrailer].trailer[randomTrailer] ? movies[randomTrailer].trailer[randomTrailer].key : ''}`;
  return (
    <Iframe src={url}>
      {movies[randomTrailer].overview
        ? <Loading>Loading...</Loading>
        : <div>
            <h1>{movies[randomTrailer].title}</h1>
            <p>{movies[randomTrailer].overview}</p>
          </div>}
    </Iframe>
  );
};

export default MovieBanner;
