import { combineReducers } from 'redux';
import {
  MOVIES_FETCH_SUCCEEDED,
  MOVIES_FETCH_FAILED,
} from './../constants/index';

// Actions live here
function recieveMovies(state = { movies: [], videos: [] }, action) {
  switch (action.type) {
    case MOVIES_FETCH_SUCCEEDED:
      return {
        ...state,
        movies: [...state.movies, ...action.movies.movies],
        videos: [...state.videos, ...action.movies.videos],
      };
    default:
      return state;
  }
}

function recieveTmdbError(state = {}, action) {
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
  movies: recieveMovies,
  error: recieveTmdbError,
});
