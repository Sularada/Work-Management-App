function createTextarea(id, place_holder) {
  const textarea = document.createElement("textarea");
  textarea.id = id;
  textarea.rows = 5;
  textarea.placeholder = place_holder;
  textarea.className = "w-full border-1 border-sky-600 p-2 my-3";
  return textarea;
}
export default createTextarea;
