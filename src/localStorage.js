import { FavoriteMovie } from "./FavoriteMovie.js";
import { renderMovies } from "./render.js";

const getFavoriteMovies = () => {
  let movies = JSON.parse(localStorage.getItem("FavoriteMovies"));

  if (!movies) {
    movies = [];
  }
  return movies;
};

const saveInLocalStorage = (movie) => {
  const movies = getFavoriteMovies();

  const movieAlreadyFavorite = movies.some(
    (movieInLocalStorage) => movieInLocalStorage.title === movie.title
  );

  if (!movieAlreadyFavorite) {
    movies.push(movie);

    const moviesJSON = JSON.stringify(movies);

    localStorage.setItem("FavoriteMovies", moviesJSON);
  } else {
    const movieIndex = movies.findIndex(
      (movieInLocalStorage) => movieInLocalStorage.title === movie.title
    );

    movies.splice(movieIndex, 1);

    const moviesJSON = JSON.stringify(movies);

    localStorage.setItem("FavoriteMovies", moviesJSON);
  }
};

const setFavorite = (movie) => {
  const favoriteMovie = new FavoriteMovie(movie);

  saveInLocalStorage(favoriteMovie);
};

const showOnlyFavorites = () => {
  const favoriteMovies = getFavoriteMovies();

  if (!favoriteMovies) {
    showError("No favorite movies!");
  }

  favoriteMovies.forEach((movie) => {
    renderMovies(movie, movie.isFavorite);
  });
};

const changeHeartStyle = (heartIcon) => {
  heartIcon.src = heartIcon.src.includes("full")
    ? (heartIcon.src = "./assets/svg/Heart.svg")
    : (heartIcon.src = "./assets/svg/Heart-full.svg");
};

export { getFavoriteMovies, setFavorite, saveInLocalStorage, changeHeartStyle, showOnlyFavorites };
