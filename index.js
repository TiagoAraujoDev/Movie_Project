const movies = [
  {
    image: "./assets/movie-1.png",
    title: "Avengers Endgame",
    rate: 9.2,
    year: 2019,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorite: false,
  },
];

function renderMovies() {
  movies.forEach((movie) => {
    const { image, title, rate, year, description, isFavorite } = movie;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.appendChild(movieCard);

    const movieImage = document.createElement("img");
    movieImage.src = `${image}`;
    moviesContainer.appendChild(movieImage);

    

  });
}
