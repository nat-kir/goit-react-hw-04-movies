import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import styles from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className={styles.ListItem}>
          <Link
            className={styles.Link}
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequered,
    }),
  ),
  location: PropTypes.object,
};
export default withRouter(MovieList);
