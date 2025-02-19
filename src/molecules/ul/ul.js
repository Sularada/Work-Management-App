import createLi from "../../atoms/li/li.js";

function createUl(id, list) {
  const ul = document.createElement("ul");
  ul.id = id;
  list.forEach((li_item) => {
    const li = createLi(li_item);
    ul.append(li);
  });
  return ul;
}
export default createUl;
