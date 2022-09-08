import { moviesContainer, clearMoviesContainer } from "./DOMElements.js";

const getGenres = (genres) => {
  const genreStr = genres.map((genre)=> genre.name)
  return genreStr;
}

const renderMovieDetails = (movie) => {
  clearMoviesContainer();

  const {
    title,
    original_title,
    homepage,
    genres,
    release_date,
    runtime,
    status,
    vote_average,
    vote_count,
    poster_path,
    popularity,
    overview,
  } = movie;

  const genreArr = getGenres(genres)

  const imgURL = "https://image.tmdb.org/t/p/w500";
  
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");
  moviesContainer.appendChild(detailsContainer);

  const movieCover = document.createElement("div");
  movieCover.classList.add("movie-cover");
  movieCover.style.backgroundImage = `url(${imgURL + poster_path})`
  detailsContainer.appendChild(movieCover);

  const movieTitleInfo = document.createElement("div");
  movieTitleInfo.classList.add("movie-title-info");
  detailsContainer.appendChild(movieTitleInfo);

  const movieTitle = document.createElement("h1");
  movieTitle.textContent = title;
  movieTitleInfo.appendChild(movieTitle);

  const movieOriginalTitle = document.createElement("h2");
  movieOriginalTitle.textContent = original_title;
  movieTitleInfo.appendChild(movieOriginalTitle);

  const movieDetailsInfo1 = document.createElement("div");
  movieDetailsInfo1.classList.add("movie-details-info");
  detailsContainer.appendChild(movieDetailsInfo1);

  const movieDate = document.createElement("div");
  movieDate.classList.add("date");
  movieDetailsInfo1.appendChild(movieDate);

  const releaseDate = document.createElement("span");
  releaseDate.textContent = `Release date: ${release_date}`;
  movieDate.appendChild(releaseDate);

  const movieRating = document.createElement("div");
  movieRating.classList.add("rating");
  movieDetailsInfo1.appendChild(movieRating);

  const rating = document.createElement("span");
  rating.innerHTML = `Rating:<img src="./assets/svg/Star.svg" alt="star" />${vote_average}`;
  movieRating.appendChild(rating);

  const movieVotes = document.createElement("div");
  movieVotes.classList.add("vote");
  movieDetailsInfo1.appendChild(movieVotes);

  const votes = document.createElement("span");
  votes.textContent = `Vote count: ${vote_count}`;
  movieVotes.appendChild(votes);

  const movieDuration = document.createElement("div");
  movieDuration.classList.add("duration");
  movieDetailsInfo1.appendChild(movieDuration);

  const duration = document.createElement("span");
  duration.textContent = `Duration: ${runtime}min`;
  movieDuration.appendChild(duration);

  const moviePopularity = document.createElement("div");
  moviePopularity.classList.add("popularity");
  movieDetailsInfo1.appendChild(moviePopularity);

  const movieWatchers = document.createElement("span");
  movieWatchers.textContent = `Popularity: ${popularity}`;
  moviePopularity.appendChild(movieWatchers);

  const movieDetailsInfo2 = document.createElement("div");
  movieDetailsInfo2.classList.add("movie-details-info2");
  detailsContainer.appendChild(movieDetailsInfo2);

  const genre = document.createElement("span");
  genre.textContent = `Genre: ${genreArr.join(", ")}`
  movieDetailsInfo2.appendChild(genre);

  const movieHomepage = document.createElement("span");
  movieHomepage.innerHTML = `Homepage:<a href=${homepage}>${homepage}</a>`
  movieDetailsInfo2.appendChild(movieHomepage);

  const movieStatus = document.createElement("span");
  movieStatus.textContent = `Status: ${status}`
  movieDetailsInfo2.appendChild(movieStatus);

  const movieDescription = document.createElement("div");
  movieDescription.classList.add("movie-description-info");
  detailsContainer.appendChild(movieDescription);

  const descriptionTitle = document.createElement("h3");
  descriptionTitle.textContent = "Description";
  movieDescription.appendChild(descriptionTitle);

  const textDescription = document.createElement("p");
  textDescription.textContent = overview;
  movieDescription.appendChild(textDescription);

};

export { renderMovieDetails };
