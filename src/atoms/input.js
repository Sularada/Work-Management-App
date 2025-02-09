function createInput(id, place_holder, type, value = "", name = "") {
  const input = document.createElement("input");
  input.id = id;
  input.placeholder = place_holder;
  input.type = type;
  input.value = value;
  input.name = name;
  input.className = "";
  input.required = true;
  return input;
}
export default createInput;
