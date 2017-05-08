import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  MOVIES_FETCH_SUCCEEDED,
  MOVIES_FETCH_FAILED,
  FETCH_REQUESTED,
} from './../constants/index';
const endpoint =
  'https://api.themoviedb.org/3/discover/movie?api_key=d616297942d0c3077745cdf09cb85185';

function tmdbRequest(url) {
  let moviesObj = {};
  return axios.get(url).then(res => res.data.results).then(movies => {
    moviesObj.movies = movies;
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movies[0].id}/videos?api_key=d616297942d0c3077745cdf09cb85185`
      )
      .then(res => {
        moviesObj.videos = res.data.results;
        return moviesObj;
      });
  });
}

export function* fetchMovies() {
  try {
    const movies = yield call(tmdbRequest, endpoint);
    yield put({
      type: MOVIES_FETCH_SUCCEEDED,
      movies,
    });
  } catch (error) {
    yield put({
      type: MOVIES_FETCH_FAILED,
      message: error.message,
    });
  }
}

function* fetchMoviesSaga(url) {
  yield takeLatest(FETCH_REQUESTED, fetchMovies);
}

export default fetchMoviesSaga;
