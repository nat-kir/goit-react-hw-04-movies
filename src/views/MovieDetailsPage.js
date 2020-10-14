import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';
import moviesApi from '../services/moviesApi';
import '../styles/base.scss';

class MovieDetailsPage extends Component {
  state = {
    movieDetails: {},
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    moviesApi
      .getMovieDetails(movieId)
      .then(movieDetails => this.setState({ movieDetails: movieDetails }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      id,
      original_title,
      poster_path,
      vote_average,
      overview,
      genres,
    } = this.state.movieDetails;

    return (
      <>
        <button
          type="button"
          onClick={this.handleGoBack}
          className="buttonGoBack"
        >
          Go back
        </button>
        <div className="movieDetails">
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={original_title}
              className="imgMoviePoster"
            />
          )}
          <div className="movieDescription">
            <h2>{original_title}</h2>
            <p>User score: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres && (
              <ul className="GenreList">
                {genres.map(genre => (
                  <li key={genre.id} className="GenreItem">
                    <p className="GenreItemText">{genre.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="AddInfoSection">
          <h4 className="AddInfoTitle">Additional information</h4>
          <ul className="AddInfoList">
            <li className="AddInfoItem">
              <NavLink
                exact
                to={`/movies/${id}/cast`}
                className="NavLink"
                activeClassName="NavLink--active"
              >
                CAST
              </NavLink>
            </li>
            <li className="AddInfoItem">
              <NavLink
                exact
                to={`/movies/${id}/reviews`}
                className="NavLink"
                activeClassName="NavLink--active"
              >
                REVIEWS
              </NavLink>
            </li>
          </ul>
        </div>
        <Route exact path={routes.cast} component={Cast} />
        <Route exact path={routes.reviews} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
