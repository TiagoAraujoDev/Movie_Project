import { moviesContainer, clearMoviesContainer } from "./DOMElements.js";

const renderMovieDetails = (movie) => {
  clearMoviesContainer();
  console.log(movie);
};

export { renderMovieDetails };
