function createLabel(text) {
  const label = document.createElement("label");
  label.textContent = text;
  label.className = "p-2";
  return label;
}
export default createLabel;
