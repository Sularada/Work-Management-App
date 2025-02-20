import createOption from "../../atoms/option/option.js";

function createSelect(id, list) {
  const select = document.createElement("select");
  select.id = id;
  select.className = "border-1 border-sky-600  w-full p-2  my-3 ";
  list.forEach((option) => {
    const op = createOption(option);
    select.append(op);
  });
  return select;
}
export default createSelect;
