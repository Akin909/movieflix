import React from 'react';
import styled from 'styled-components';
import { Loading } from './../styles/components';

const Banner = styled.iframe`
  width: 100%;
  margin: 0;
  height: 30em;
`;

const MovieBanner = ({ trailer, poster_path, overview, title }) => {
  const url = `https://www.youtube.com/embed/${trailer[0] ? trailer[0].key : ''}`;
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
