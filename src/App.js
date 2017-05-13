import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { devToolsEnhancer } from 'redux-devtools-extension';
// import { offline } from 'redux-offline';
// import offlineConfig from 'redux-offline/lib/defaults';

import fetchMoviesSaga from './actions/Sagas';
import reducer from './reducers/index';
import MovieList from './components/MovieList';
import Login from './components/Login';
import Nav from './components/Nav';

//eslint-disable-next-line
injectGlobal`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  * {
      box-sizing: inherit;
      font-family: inherit;
   }
`;

const sagaMiddlware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddlware),
  devToolsEnhancer()
  // offline(offlineConfig)
);

const store = createStore(reducer, enhancer);

sagaMiddlware.run(fetchMoviesSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={MovieList} />
            <Route path="/Login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
