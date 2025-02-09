function createP(text) {
  const p = document.createElement("p");
  p.textContent = text;
  p.className = "";
  return p;
}
export default createP;
