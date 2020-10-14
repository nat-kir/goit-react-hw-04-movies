import React, { Component } from 'react';
import CastProfile from './CastProfile';
import moviesApi from '../../services/moviesApi';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    casts: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    moviesApi
      .getMovieCredits(movieId)
      .then(casts => this.setState({ casts: casts }));
  }
  render() {
    const { casts } = this.state;
    return (
      <>
        {casts.length > 0 ? (
          <ul className={styles.ProfileList}>
            {casts.map(({ credit_id, profile_path, name, character }) => (
              <li className={styles.CastListItem} key={credit_id}>
                <CastProfile
                  profilePath={profile_path}
                  name={name}
                  character={character}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No casts</p>
        )}
      </>
    );
  }
}
export default Cast;
