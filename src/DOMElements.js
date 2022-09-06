const moviesContainer = document.querySelector(".movies-container");
const searchButton = document.querySelector(".search-button");
const favoritesCheckbox = document.querySelector("input#favorites");

const clearMoviesContainer = () => {
  moviesContainer.innerHTML = "";
};

export { moviesContainer, searchButton, favoritesCheckbox, clearMoviesContainer };
