import { BASE_URL, API_KEY } from "../env/key.js";
import { renderMovie } from "./renderMovie.js";
import { filterFavoriteMovies } from "./localStorage.js";

const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  const { results } = await response.json();

  results.forEach((movie) => {
    const isFavorite = filterFavoriteMovies(movie);
    renderMovie(movie, isFavorite);
  });
};

const searchMovies = async (searchTerm) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
  );
  const { results } = await response.json();

  results.forEach((movie) => {
    const isFavorite = filterFavoriteMovies(movie);
    renderMovie(movie, isFavorite);
  });
};

export { getPopularMovies, searchMovies };
