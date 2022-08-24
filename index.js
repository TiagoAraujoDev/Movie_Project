import { getPopularMovies, searchMovies } from "./src/apiRequests.js";
import { searchButton, favoritesCheckbox } from "./src/DOMElements.js";
import { moviesContainer } from "./src/DOMElements.js";
import { showOnlyFavorites } from "./src/localStorage.js";

const clearMoviesContainer = () => {
  moviesContainer.innerHTML = "";
};

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
