import { FETCH_REQUESTED, LOGIN_USER, START_PLAYING } from './../constants/index';
export function beginFetch() {
  return {
    type: FETCH_REQUESTED,
  };
}

export function startPlaying(movie) {
  return {
    type: START_PLAYING,
    movie,
    playing: true,
  };
}

export function loginUser(firstname, lastname) {
  return {
    type: LOGIN_USER,
    user: {
      firstname,
      lastname,
      loggedIn: true,
    },
  };
}
