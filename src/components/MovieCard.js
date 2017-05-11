import React from 'react';
import styled from 'styled-components';
import { Title, Iframe } from './../styles/components';

export const MovieCard = styled.li`
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
const MovieCards = ({ trailer, title, overview, poster_path, playing }) => (
  <MovieCard url={poster_path}>
    {playing
      ? <Blurb>
          <Title>{title}</Title>
          <Summary>
            {overview}
          </Summary>
        </Blurb>
      : <Iframe />}
  </MovieCard>
);

export default MovieCards;
