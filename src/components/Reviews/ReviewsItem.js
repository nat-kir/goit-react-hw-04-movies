import React from 'react';
import styles from './Reviews.module.css';
import PropTypes from 'prop-types';

const ReviewsItem = ({ id, author, content }) => {
  return (
    <li className={styles.ReviewItem} key={id}>
      <h4>Author: {author} </h4>
      <p className={styles.ReviewText}>{content}</p>
    </li>
  );
};

ReviewsItem.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default ReviewsItem;
