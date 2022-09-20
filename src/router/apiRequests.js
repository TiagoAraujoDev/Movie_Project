import { BASE_URL, API_KEY } from "../../env/env.js";
import { MovieCard } from "../components/MovieCard.js";
import { filterFavoriteMovies } from "../localStorage.js";

const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const { results } = await response.json();

  results.forEach((movie) => {
    const isFavorite = filterFavoriteMovies(movie);
    MovieCard(movie, isFavorite);
  });
};

const searchMovies = async (searchTerm) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
  );
  const { results } = await response.json();

  results.forEach((movie) => {
    const isFavorite = filterFavoriteMovies(movie);
    MovieCard(movie, isFavorite);
  });
};

const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();

  return data;
};

export { getPopularMovies, searchMovies, getMovieDetails };
