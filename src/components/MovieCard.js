import React from 'react';
import styled from 'styled-components';
import { Title, Iframe, Card, Blurb } from './../styles/components';
import uuid from 'uuid';

export const MovieCard = styled(Card)`
  background-image: ${props => (props.url ? `url(${'https://image.tmdb.org/t/p/original/' + props.url})` : '')};
  background-repeat: no-repeat;
  background-size: 100%;
  display: ${props => (props.hide && props.title ? 'none' : '')};
`;
const Summary = styled.p`
  font-weight: bold;
  overflow: scroll;
  transform: translate(0, 100%)
  &:hover {
    transform: translate(0, 0%)
  }
`;

const MovieBlurb = styled(Blurb)`
  transition: transform 0.2s ease-in;
  transform: translate(0, 50%);
  &:hover {
    transform: translate(0, 0%)
  }
`;

const InnerCardContainer = styled.div`
  height: 20em;
`;

const CardVideo = styled(Iframe)`
  height: 100%;
  width: 100%;
`;

const PlayButton = styled.button`
  font-size: 1.5rem;
  border-radius: 50%;
  margin: 0;
  padding: 0.5rem;
  background-color: hsla(0, 0%, 0%, 0.5);
  width: 3rem;
  height: 3rem;
  border: 2px white solid;
  box-shadow: 0 1px 1px grey;
`;

const MovieCards = ({
  trailer,
  title,
  overview,
  poster_path,
  playing,
  onClick,
}) => {
  return (
    <InnerCardContainer>
      {playing
        ? <CardVideo
            key={uuid()}
            allowFullScreen
            autoplay
            controls={'false'}
            preload
            src={`https://www.youtube.com/embed/${trailer[0].key}`}
          />
        : <MovieCard hide={playing} title={playing} url={poster_path}>
            <PlayButton onClick={onClick.bind(MovieCards, title)}>►</PlayButton>
            <MovieBlurb>
              <Title>{title}</Title>
              <Summary>
                {overview}
              </Summary>
            </MovieBlurb>
          </MovieCard>}
    </InnerCardContainer>
  );
};

export default MovieCards;
