import React, { Component } from 'react';
import moviesApi from '../../services/moviesApi';
import styles from './Reviews.module.css';
import ReviewsItem from './ReviewsItem';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const reviews = await moviesApi.getMovieReviews(movieId);
    this.setState({ reviews: reviews });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul className={styles.ReviewsList}>
            {reviews.map(({ id, author, content }) => (
              <ReviewsItem id={id} author={author} content={content} />
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
