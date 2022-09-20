import { Checkbox } from "./components/Checkbox.js";
import { Search } from "./components/Search.js";
import { CreateElement } from "./utils/CreateElement.js";

export const App = () => {
  const App = document.createElement("div");

  const headingDiv = CreateElement("div", "title", null, null);
  App.appendChild(headingDiv);
  const heading = CreateElement("h1", null, null, "The Movie Finder");
  headingDiv.appendChild(heading);

  App.appendChild(Search());
  App.appendChild(Checkbox());

  const MoviesContainer = CreateElement("div", "movies-container", null, null);
  App.appendChild(MoviesContainer);

  return App;
};
