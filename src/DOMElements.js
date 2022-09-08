const moviesContainer = document.querySelector(".movies-container");
const searchButton = document.querySelector(".search-button");
const favoritesCheckbox = document.querySelector("input#favorites");
const searchInput = document.querySelector("#search-input")

const clearMoviesContainer = () => {
  moviesContainer.innerHTML = "";
};

export { moviesContainer, searchButton, favoritesCheckbox, searchInput, clearMoviesContainer };
