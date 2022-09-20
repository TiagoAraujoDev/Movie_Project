import { setFavorite, changeHeartStyle } from "../localStorage.js";
import { MovieDetails } from "./MovieDetails.js";
import { getMovieDetails } from "../router/apiRequests.js";

const MovieCard = (movie, isFavorite = false) => {
  const moviesContainer = document.querySelector(".movies-container");

  const { id, title, vote_average, release_date, overview, poster_path } =
    movie;

  const imgURL = "https://image.tmdb.org/t/p/w500";

  const MovieCard = document.createElement("div");
  MovieCard.classList.add("movie");
  moviesContainer.appendChild(MovieCard);

  const movieImage = document.createElement("img");
  movieImage.classList.add("cover");
  movieImage.src = imgURL + poster_path;
  movieImage.alt = `${title} cover`;
  MovieCard.appendChild(movieImage);

  const movieStats = document.createElement("div");
  movieStats.classList.add("movie-stats");
  MovieCard.appendChild(movieStats);

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
  favText.textContent = "Favorite";
  movieFav.appendChild(favText);

  const movieDescription = document.createElement("p");
  movieDescription.classList.add("movie-description");
  movieDescription.textContent = overview;
  movieStats.appendChild(movieDescription);

  const moreDetails = document.createElement("span");
  moreDetails.classList.add("more-details");
  moreDetails.textContent = "See more details";
  MovieCard.appendChild(moreDetails);
  moreDetails.onclick = async () => {
    const detailedMovie = await getMovieDetails(id);
    MovieDetails(detailedMovie);
  };
};

export { MovieCard };
