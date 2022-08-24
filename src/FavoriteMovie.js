class FavoriteMovie {
  constructor({
    title,
    vote_average,
    release_date,
    overview,
    poster_path
  }) {
    this.title = title;
    this.vote_average = vote_average;
    this.release_date = release_date;
    this.overview = overview;
    this.poster_path = poster_path;
  }

  title;
  vote_average;
  release_date;
  overview;
  poster_path;
  isFavorite = true;

}

export { FavoriteMovie };
