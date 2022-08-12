import { BASE_URL, API_KEY } from "./env/key.js";
import { FavoriteMovie } from "./FavoriteMovie.js";

const moviesContainer = document.querySelector(".movies-container");
const searchButton = document.querySelector(".search-button");
const favoritesCheckbox = document.querySelector("input#favorites");

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

const clearMoviesContainer = () => {
  moviesContainer.innerHTML = "";
};

const renderMovies = (movie, isFavorite = false) => {
  const { title, vote_average, release_date, overview, poster_path } = movie;

  const imgURL = "https://image.tmdb.org/t/p/w500";

  const movieCard = document.createElement("div");
  movieCard.classList.add("movie");
  moviesContainer.appendChild(movieCard);

  const movieImage = document.createElement("img");
  movieImage.classList.add("cover");
  movieImage.src = imgURL + poster_path;
  movieImage.alt = `${title} cover`;
  movieCard.appendChild(movieImage);

  const movieStats = document.createElement("div");
  movieStats.classList.add("movie-stats");
  movieCard.appendChild(movieStats);

  const movieHeader = document.createElement("div");
  movieHeader.classList.add("movie-header");
  movieStats.appendChild(movieHeader);

  const movieTitle = document.createElement("h2");
  movieTitle.textContent = `${title} (${release_date.slice(0, 4)})`;
  movieHeader.appendChild(movieTitle);

  const movieInteractions = document.createElement("div");
  movieInteractions.classList.add("movie-interactions");
  movieHeader.appendChild(movieInteractions);

  const movieRate = document.createElement("div");
  movieRate.classList.add("movie-rate");
  movieInteractions.appendChild(movieRate);

  const starIcon = document.createElement("img");
  starIcon.classList.add("star");
  starIcon.src = "./assets/svg/Star.svg";
  starIcon.alt = "Star icon";
  movieRate.appendChild(starIcon);

  const rating = document.createElement("span");
  rating.setAttribute("id", "movie-rate");
  rating.textContent = vote_average;
  movieRate.appendChild(rating);

  const movieFav = document.createElement("div");
  movieFav.classList.add("movie-fav");
  movieInteractions.appendChild(movieFav);

  const heartIcon = document.createElement("img");
  heartIcon.classList.add("heart");
  heartIcon.src = isFavorite
    ? "./assets/svg/Heart-full.svg"
    : "./assets/svg/Heart.svg";
  heartIcon.alt = "Heart icon";
  movieFav.appendChild(heartIcon);
  heartIcon.onclick = () => {
    setFavorite(movie);
    changeHeartStyle(heartIcon);
  };

  const favText = document.createElement("span");
  favText.textContent = "Favoritar";
  movieFav.appendChild(favText);

  const movieDescription = document.createElement("p");
  movieDescription.classList.add("movie-description");
  movieDescription.textContent = overview;
  movieStats.appendChild(movieDescription);
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
