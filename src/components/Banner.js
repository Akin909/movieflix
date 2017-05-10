import React from 'react';
import styled from 'styled-components';
import { Loading } from './../styles/components';

const Banner = styled.iframe`
  width: 100%;
  margin: 0;
  height: 30em;
`;

const MovieBanner = ({ trailers, poster_path, overview, title }) => {
  console.log('trailers', trailers);
  const url = `https://www.youtube.com/embed/${trailers[0] ? trailers[0].key : ''}`;
  return (
    <Banner src={url}>
      {overview
        ? <Loading>Loading...</Loading>
        : <div>
            <h1>{title}</h1>
            <p>{overview}</p>
          </div>}
    </Banner>
  );
};

export default MovieBanner;
