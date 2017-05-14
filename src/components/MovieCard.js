import React from 'react';
import styled from 'styled-components';
import { MainTitle, Iframe, Card, Blurb } from './../styles/components';
import uuid from 'uuid';

export const MovieCard = styled(Card)`
  background-image: ${props => (props.url ? `url(${'https://image.tmdb.org/t/p/original/' + props.url})` : '')};
  background-repeat: no-repeat;
  background-size: 100%;
  display: ${props => (props.hide && props.title ? 'none' : '')};
  width: 15rem;
  transition: all 0.3s linear;
  &:hover {
    transition-delay:1s;
    width: 30rem;
    position: absolute;
    z-index: 100;
  }
`;
const Summary = styled.p`
  height: 50%;
  font-weight: bold;
  overflow: scroll;
  padding: 0.3rem;
`;

const MovieBlurb = styled(Blurb)`
  transition: transform 0.2s ease-in;
  transform: translate(0, 53%);
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
  background-color: hsla(0, 100%, 0%, 0.5);
  width: 3rem;
  height: 3rem;
  border: 2px white solid;
  box-shadow: 0 1px 1px grey;
`;

export const MovieTitle = styled(MainTitle)`
  color: white;
  display: flex;
  flex-direction: column;
  text-shadow: 0 1px 1px black,
                0 1.4px 1.4px black;
  height: 50%;
  margin: 0;
  margin-bottom: 1rem;
`;

const CompanyLogo = styled.h3`
  color: #E50914;
  margin: 0;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 20;
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
            autoPlay
            controls={'0'}
            preload
            autobuffer
            src={`https://www.youtube.com/embed/${trailer[0].key}?modestbranding=1`}
          />
        : <MovieCard hide={playing} title={playing} url={poster_path}>
            <CompanyLogo>Movieflix</CompanyLogo>
            <PlayButton onClick={onClick.bind(MovieCards, title)}>
              ►
            </PlayButton>
            <MovieBlurb>
              <MovieTitle>
                {title}
              </MovieTitle>
              <Summary>
                {overview}
              </Summary>
            </MovieBlurb>
          </MovieCard>}
    </InnerCardContainer>
  );
};

export default MovieCards;
