function createH4(text) {
  const h4 = document.createElement("h4");
  h4.textContent = text;
  h4.className = "text-l pb-2 mb-2 border-b-2 border-normal border-stone-300";
  return h4;
}
export default createH4;
