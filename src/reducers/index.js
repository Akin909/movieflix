import { combineReducers } from 'redux';
import {
  MOVIES_FETCH_SUCCEEDED,
  MOVIES_FETCH_FAILED,
  START_PLAYING,
} from './../constants/index';

// Actions live here
function receiveMovies(state = { movies: [], trailers: [] }, action) {
  switch (action.type) {
    case MOVIES_FETCH_SUCCEEDED:
      return {
        ...state,
        movies: [...state.movies, ...action.moviesWithTrailers],
      };
    default:
      return state;
  }
}

function receiveTmdbError(state = {}, action) {
  switch (action.type) {
    case MOVIES_FETCH_FAILED:
      return {
        ...state,
        [state.message]: action.message,
      };
    default:
      return state;
  }
}

function playTrailer(state = { playing: false, title: '' }, action) {
  switch (action.type) {
    case START_PLAYING:
      return {
        ...state,
        playing: !state.playing,
        title: action.movie,
      };
    default:
      return state;
  }
}

export default combineReducers({
  movies: receiveMovies,
  error: receiveTmdbError,
  playing: playTrailer,
});
