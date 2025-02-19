function createButton(text, eventFunction) {
  const button = document.createElement("button");
  button.textContent = text;
  button.type = "button";
  button.className = "bg-violet-500 px-3 hover:bg-violet-700";
  button.addEventListener("click", eventFunction);
  return button;
}
export default createButton;
