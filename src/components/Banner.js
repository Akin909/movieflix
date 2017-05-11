import React from 'react';
import { Loading, Iframe } from './../styles/components';

const MovieBanner = ({ movies }) => {
  const randomTrailer = Math.floor(Math.random() * movies.length);
  const url = `https://www.youtube.com/embed/${movies[randomTrailer].trailer[0] ? movies[randomTrailer].trailer[0].key : ''}`;
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
