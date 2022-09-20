export function CreateElement(
  element,
  className = "",
  idName = "",
  content = ""
) {
  const el = document.createElement(element);
  el.classList.add(className);
  el.setAttribute("id", idName);
  el.textContent = content;

  return el;
}
