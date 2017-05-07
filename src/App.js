import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index';
import MovieList from './components/MovieList';
import fetchMoviesSaga from './actions/Sagas';

const sagaMiddlware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddlware))
);

sagaMiddlware.run(fetchMoviesSaga);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>MovieFlix</h1>
          <MovieList />
        </div>
      </Provider>
    );
  }
}

export default App;
