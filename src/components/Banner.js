import React from 'react';
import { Loading, Iframe } from './../styles/components';
import styled from 'styled-components';

const FrameContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
`;

const MovieBanner = ({ movies }) => {
  //TODO refactor this component as various elements make no sense... e.g is the trailer shown what I intended, the Loading spinner is in the wrong
  //Section of the ternary... FIX
  const randomIndex = array => Math.floor(Math.random() * array.length);
  const randomMovie = randomIndex(movies);
  const randomTrailer = randomIndex(movies[randomMovie].trailer);
  const url = `https://www.youtube.com/embed/${movies[randomTrailer].trailer[randomTrailer] ? movies[randomTrailer].trailer[randomTrailer].key + '?modestbranding=1' : ''}`;
  return (
    <FrameContainer>
      <Iframe src={url}>
        {movies[randomTrailer].overview
          ? <Loading>Loading...</Loading>
          : <div>
              <h1>{movies[randomTrailer].title}</h1>
              <p>{movies[randomTrailer].overview}</p>
            </div>}
      </Iframe>
    </FrameContainer>
  );
};

export default MovieBanner;
