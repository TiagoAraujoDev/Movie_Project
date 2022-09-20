import { searchMovies } from "../router/apiRequests.js";
import { clearContainer } from "../utils/CleanerContainer.js";
import { CreateElement } from "../utils/CreateElement.js";

export const Search = () => {
  const Search = CreateElement("div", "search-box", null, null);

  const input = document.createElement("input");
  input.setAttribute("id", "search-input");
  input.type = "search";
  input.name = "search-movie";
  input.placeholder = "Enter some movie...";
  input.addEventListener("search", () => {
    clearContainer(".movies-container");
    const searchText = document.querySelector("#search-input").value;
    searchMovies(searchText);
  });

  Search.appendChild(input);

  const button = document.createElement("button");
  button.classList.add("search-button");
  button.type = "button";
  button.addEventListener("click", () => {
    clearContainer(".movies-container");
    const searchText = document.querySelector("#search-input").value;
    searchMovies(searchText);
  });

  const searchIcon = document.createElement("img");
  searchIcon.src = "./assets/svg/search-icon.svg";
  searchIcon.alt = "search icon";
  button.appendChild(searchIcon);

  Search.appendChild(button);

  return Search;
};
