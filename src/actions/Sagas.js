import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  MOVIES_FETCH_SUCCEEDED,
  MOVIES_FETCH_FAILED,
  FETCH_REQUESTED,
} from './../constants/index';
const endpoint =
  'https://api.themoviedb.org/3/discover/movie?api_key=d616297942d0c3077745cdf09cb85185';

function getApiData(endpoint, movie) {
  return axios.get(endpoint).then(res => res).then(json => {
    if (movie) {
      if (json.data.id === movie.id) {
        movie.trailer = json.data.results;
      }
      return movie;
    }
    return json.data.results;
  });
}

function* fetchMovies() {
  try {
    const movies = yield call(getApiData, endpoint);
    const moviesWithTrailers = yield movies.map(movie =>
      call(
        getApiData,
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=d616297942d0c3077745cdf09cb85185&language=en-US`,
        movie
      )
    );
    yield put({
      type: MOVIES_FETCH_SUCCEEDED,
      moviesWithTrailers,
    });
  } catch (error) {
    yield put({
      type: MOVIES_FETCH_FAILED,
      message: error.message,
    });
  }
}

function* fetchMoviesSaga() {
  yield takeLatest(FETCH_REQUESTED, fetchMovies);
}

export default fetchMoviesSaga;
