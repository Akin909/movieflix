import { combineReducers } from 'redux';
import {
  MOVIES_FETCH_SUCCEEDED,
  MOVIES_FETCH_FAILED,
  START_PLAYING,
} from './../constants/index';

// Actions live here
function moviesReducer(
  state = {
    movies: [],
    trailers: [],
  },
  action
) {
  switch (action.type) {
    case MOVIES_FETCH_SUCCEEDED:
      return {
        ...state,
        movies: [...state.movies, ...action.moviesWithTrailers],
      };
    case START_PLAYING:
      const newMoviesState = state.movies.map(movie => {
        if (movie.title !== action.movie) {
          return {
            ...movie,
            playing: !action.playing,
          };
        }
        return {
          ...movie,
          playing: action.playing,
        };
      });
      return {
        ...state,
        movies: newMoviesState,
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

// function playTrailer(state = {}, action) {
//   console.log('state', state);
//   switch (action.type) {
//       return state;
//   }
// }

export default combineReducers({
  movies: moviesReducer,
  error: receiveTmdbError,
});
