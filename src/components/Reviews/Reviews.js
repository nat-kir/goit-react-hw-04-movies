import React, { Component } from 'react';
import moviesApi from '../../services/moviesApi';
import styles from './Reviews.module.css';
class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    moviesApi
      .getMovieReviews(movieId)
      .then(reviews => this.setState({ reviews: reviews }));
  }
  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul className={styles.ReviewsList}>
            {reviews.map(review => (
              <li className={styles.ReviewItem} key={review.id}>
                <h4>Author: {review.author} </h4>
                <p className={styles.ReviewText}>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </>
    );
  }
}

export default Reviews;
