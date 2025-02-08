function createLabel(text) {
  const label = document.createElement("label");
  label.textContent = text;
  label.className = "";
  return label;
}
export default createLabel;
