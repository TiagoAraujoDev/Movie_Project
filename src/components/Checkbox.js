import { showOnlyFavorites } from "../localStorage.js";
import { getPopularMovies } from "../router/apiRequests.js";
import { clearContainer } from "../utils/CleanerContainer.js";
import { CreateElement } from "../utils/CreateElement.js";

export const Checkbox = () => {
  const Checkbox = CreateElement("div", "checkbox", null, null);

  const input = CreateElement("input", null, "favorites", null);
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "favorites");
  input.addEventListener("change", () => {
    clearContainer(".movies-container");
    if (input.checked) {
      showOnlyFavorites();
    } else {
      getPopularMovies();
    }
  });

  Checkbox.appendChild(input);

  const label = CreateElement(
    "label",
    "checkbox-label",
    null,
    "Show only my favorite movies"
  );
  label.setAttribute("for", "favorites");

  Checkbox.appendChild(label);

  return Checkbox;
};
