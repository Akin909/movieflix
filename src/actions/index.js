import { FETCH_REQUESTED, START_PLAYING } from './../constants/index';
export function beginFetch() {
  return {
    type: FETCH_REQUESTED,
  };
}

export function startPlaying(movie) {
  console.log('movie in action', movie);
  return {
    type: START_PLAYING,
    movie,
  };
}
