import { App } from "./src/App.js";
import { getPopularMovies } from "./src/router/apiRequests.js";

window.addEventListener("load", () => {
  const Main = document.querySelector("#root");
  Main.appendChild(App());
  getPopularMovies();
});
