function createInput(id, place_holder, type) {
  const input = document.createElement("input");
  input.id = id;
  input.placeholder = place_holder;
  input.type = type;
  input.className = "";
  return input;
}
export default createInput;
