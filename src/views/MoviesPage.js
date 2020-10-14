import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import MovieList from '../components/MovieList';
import { withRouter } from 'react-router-dom';
import moviesApi from '../services/moviesApi';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  componentDidMount() {
    const searchQueryFromLocalStorage = localStorage.getItem('SearchQuery');
    if (searchQueryFromLocalStorage) {
      this.setState({ searchQuery: searchQueryFromLocalStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      localStorage.setItem('SearchQuery', this.state.searchQuery);
      this.fetchMovies();
    }
  }

  async fetchMovies() {
    const { searchQuery } = this.state;
    moviesApi
      .getSearchMovies(searchQuery)
      .then(movies => this.setState({ movies: movies }));
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Movies</h2>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MovieList movies={movies} />
      </>
    );
  }
}

export default withRouter(MoviesPage);
