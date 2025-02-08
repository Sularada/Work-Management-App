function createTextarea(id, place_holder) {
  const textarea = document.createElement("textarea");
  textarea.id = id;
  textarea.placeholder = place_holder;
  textarea.type = type;
  textarea.className = "";
  return textarea;
}
export default createTextarea;
