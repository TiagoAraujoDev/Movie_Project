export const App = () => {
  const App = document.createElement("div");
  App.innerHTML = `
    <div class="title">
      <h1>The Movie Finder</h1>
    </div>
    <div class="search-box">
      <input
        id="search-input"
        type="search"
        name="search-movie"
        placeholder="Enter some movie..."
      />
      <button class="search-button" type="button">
        <img src="./assets/svg/search-icon.svg" alt="search icon" />
      </button>
    </div>
    <div class="checkbox">
      <input id="favorites" type="checkbox" name="favorites" />
      <label class="checkbox-label" for="favorites"
        >Show only my favorite movies</label
      >
    </div>
    `;
  return App;
};
