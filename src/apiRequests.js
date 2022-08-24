import { BASE_URL, API_KEY } from "../env/key.js";
import { renderMovies } from "./render.js";
import { getFavoriteMovies } from "./localStorage.js"

const filterFavoriteMovies = (popularMovie) => {
  const favoriteMovies = getFavoriteMovies();

  const favoriteMovie = favoriteMovies.find(
    (movie) => movie.title === popularMovie.title
  );

  if (!favoriteMovie) {
    return false;
  }

  return favoriteMovie.isFavorite;
};

const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const { results } = await response.json();

  results.forEach((movie) => {
    const isFavorite = filterFavoriteMovies(movie);
    renderMovies(movie, isFavorite);
  });
};

const searchMovies = async (searchTerm) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
  );
  const { results } = await response.json();

  results.forEach((movie) => {
    const isFavorite = filterFavoriteMovies(movie);
    renderMovies(movie, isFavorite);
  });
};

export { filterFavoriteMovies, getPopularMovies, searchMovies };
