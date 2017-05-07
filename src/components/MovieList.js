import React, { Component } from 'react';
import { connect } from 'react-redux';
import { beginFetch } from './../actions/index';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.beginFetch();
  }

  render() {
    return (
      <div>
        MovieList
        {this.props.movies.length > 0
          ? this.props.movies.map(movie => <div>{movie.title}</div>)
          : <div>Loading...</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps, { beginFetch })(MovieList);
