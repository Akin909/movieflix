import { combineReducers } from 'redux';
import {
  MOVIES_FETCH_SUCCEEDED,
  MOVIES_FETCH_FAILED,
  START_PLAYING,
  LOGIN_USER,
  TOGGLE_SEARCH,
} from './../constants/index';

function moviesReducer(
  state = {
    movies: [],
    trailers: [],
    isFetching: true,
  },
  action
) {
  switch (action.type) {
    case MOVIES_FETCH_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
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

function loginReducer(state = { firstname: '', lastname: '' }, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        firstname: action.user.firstname,
        lastname: action.user.lastname,
        loggedIn: true,
      };
    default:
      return state;
  }
}

function searchBarReducer(state = { searchStatus: false }, action) {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return {
        ...state,
        searchStatus: !state.searchStatus,
      };
    default:
      return state;
  }
}

export default combineReducers({
  movies: moviesReducer,
  error: receiveTmdbError,
  user: loginReducer,
  search: searchBarReducer,
});
