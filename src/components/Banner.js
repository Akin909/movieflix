import React from 'react';
import styled from 'styled-components';
import { Loading } from './../styles/components';

const Banner = styled.iframe`
  width: 100%;
  margin: 0;
  height: 30em;
`;

const MovieBanner = ({ videos, poster_path, overview, title }) => {
  console.log('videos', videos);
  const url = `https://www.youtube.com/embed/${videos[0] ? videos[0].key : ''}`;
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
