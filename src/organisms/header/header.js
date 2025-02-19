import createH1 from "../../atoms/h1/h1.js";

function createHeader(text) {
  const header = document.createElement("header");
  const h1 = createH1(text);
  header.append(h1);
  header.className = "bg-stone-100 p-7";
  return header;
}
export default createHeader;
