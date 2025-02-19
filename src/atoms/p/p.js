function createP(text) {
  const p = document.createElement("p");
  p.textContent = text;
  p.className = "mb-1 text-clip";
  return p;
}
export default createP;
