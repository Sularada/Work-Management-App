function createOption(text) {
  const op = document.createElement("option");
  op.textContent = text;
  op.value = text;
  return op;
}
export default createOption;
