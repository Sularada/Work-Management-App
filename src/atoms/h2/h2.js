function createH2(text) {
  const h2 = document.createElement("h2");
  h2.textContent = text;
  h2.className = "p-2";
  return h2;
}
export default createH2;
