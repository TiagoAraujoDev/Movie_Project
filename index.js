import { getPopularMovies, searchMovies } from "./src/apiRequests.js";
import { searchButton, favoritesCheckbox, clearMoviesContainer } from "./src/DOMElements.js";
import { showOnlyFavorites } from "./src/localStorage.js";

window.addEventListener("load", () => {
  getPopularMovies();
});

searchButton.addEventListener("click", () => {
  clearMoviesContainer();
  const searchText = document.querySelector("#search-input").value;
  searchMovies(searchText);
});

favoritesCheckbox.addEventListener("change", () => {
  clearMoviesContainer();
  if (favoritesCheckbox.checked) {
    showOnlyFavorites();
  } else {
    getPopularMovies();
  }
});
