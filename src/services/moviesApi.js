import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const key = '39ada902d447395d586a1a58852d6c9f';

const getTrendingMovies = async () => {
  const url = `${baseUrl}/trending/movie/day?api_key=${key}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data.results;
  } catch (error) {
    return console.error(error);
  }
};

const getSearchMovies = async searchQuery => {
  const url = `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data.results;
  } catch (error) {
    return console.error(error);
  }
};

const getMovieDetails = async moviesId => {
  const url = `${baseUrl}/movie/${moviesId}?api_key=${key}&language=en-US`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data;
  } catch (error) {
    return console.error(error);
  }
};

const getMovieCredits = async moviesId => {
  const url = `${baseUrl}/movie/${moviesId}/credits?api_key=${key}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return data.cast;
  } catch (error) {
    return console.error(error);
  }
};

const getMovieReviews = async moviesId => {
  const url = `${baseUrl}/movie/${moviesId}/reviews?api_key=${key}&language=en-US&page=1`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    return data.results;
  } catch (error) {
    return console.error(error);
  }
};

export default {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
