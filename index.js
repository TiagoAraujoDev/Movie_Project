const moviesContainer = document.querySelector(".movies-container");

const movies = [
  {
    image: "./assets/movie-1.png",
    title: "Avengers Endgame",
    rate: 9.2,
    year: 2019,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorite: true,
  },
  {
    image: "./assets/movie-2.png",
    title: "The Batman",
    rate: 9.5,
    year: 2022,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorite: true,
  },
  {
    image: "./assets/movie-3.png",
    title: "Doctor Strange",
    rate: 9.8,
    year: 2022,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorite: false,
  },
  {
    image: "./assets/movie-4.png",
    title: "Avatar",
    rate: 8.2,
    year: 2011,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorite: false,
  },
];

window.addEventListener("load", () => {
  movies.forEach((movie) => renderMovies(movie));
});

function renderMovies(movie) {
  const { image, title, rate, year, description, isFavorite } = movie;

  const movieCard = document.createElement("div");
  movieCard.classList.add("movie");
  moviesContainer.appendChild(movieCard);

  const movieImage = document.createElement("img");
  movieImage.src = image;
  movieImage.alt = `${title} cover`;
  movieCard.appendChild(movieImage);

  const movieStats = document.createElement("div");
  movieStats.classList.add("movie-stats");
  movieCard.appendChild(movieStats);

  const movieHeader = document.createElement("div");
  movieHeader.classList.add("movie-header");
  movieStats.appendChild(movieHeader);

  const movieTitle = document.createElement("h2");
  movieTitle.textContent = `${title} (${year})`;
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
  rating.textContent = rate;
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

  const favText = document.createElement("span");
  favText.textContent = "Favoritar";
  movieFav.appendChild(favText);

  const movieDescription = document.createElement("p");
  movieDescription.classList.add("movie-description");
  movieDescription.textContent = description;
  movieStats.appendChild(movieDescription);
}
