import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './Profile_default_image.jpg';
import styles from './Cast.module.css';

const CastProfile = ({ profilePath, name, character }) => {
  return (
    <>
      {profilePath ? (
        <img
          // className={styles.CastProfileImg}
          src={`https://image.tmdb.org/t/p/w200/${profilePath}`}
          alt={`${name}`}
        />
      ) : (
        <img src={defaultImage} alt="Profile is epsent" width={200} />
      )}
      <p className={styles.CastName}>{name}</p>
      <p className={styles.CastCharacter}>Character: {character}</p>
    </>
  );
};

CastProfile.defaultProps = {
  profilePath: defaultImage,
};

CastProfile.propTypes = {
  profilePath: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
export default CastProfile;
