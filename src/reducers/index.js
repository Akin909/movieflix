import { combineReducers } from 'redux';
import {
  MOVIES_FETCH_SUCCEEDED,
  MOVIES_FETCH_FAILED,
} from './../constants/index';

// Actions live here
function receiveMovies(state = { movies: [], trailers: [] }, action) {
  switch (action.type) {
    case MOVIES_FETCH_SUCCEEDED:
      return {
        ...state,
        movies: [...state.movies, ...action.movies],
        // trailers: [...state.trailers, ...action.trailers],
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

export default combineReducers({
  movies: receiveMovies,
  error: receiveTmdbError,
});
