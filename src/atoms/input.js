function createInput(id, place_holder, type, value = "", name = "") {
  const input = document.createElement("input");
  input.id = id;
  input.placeholder = place_holder;
  input.type = type;
  input.value = value;
  input.name = name;
  input.className =
    "rounded-md border-1 border-sky-800 focus:border-sky-950 p-1 mb-2";
  input.required = true;
  return input;
}
export default createInput;
