import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import moviesApi from '../services/moviesApi';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movies = await moviesApi.getTrendingMovies();

    this.setState({ movies: movies });
  }

  componentWillUnmount() {
    localStorage.setItem('SearchQuery', '');
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default HomeView;
