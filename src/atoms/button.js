function createButton(text, className, eventFunction) {
  const button = document.createElement("button");
  button.textContent = text;
  button.type = "button";
  button.className = className;
  button.addEventListener("click", eventFunction);
  return button;
}
export default createButton;
