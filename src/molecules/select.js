import createOption from "../atoms/option.js";

function createSelect(id, list) {
  const select = document.createElement("select");
  select.id = id;
  list.forEach((option) => {
    const op = createOption(option);
    select.append(op);
  });
  return select;
}
export default createSelect;
