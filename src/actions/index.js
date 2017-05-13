import { FETCH_REQUESTED, START_PLAYING } from './../constants/index';
export function beginFetch() {
  return {
    type: FETCH_REQUESTED,
    // isFetching: true,
  };
}

export function startPlaying(movie) {
  return {
    type: START_PLAYING,
    movie,
    playing: true,
  };
}
