function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  h1.className = "text-4xl  text-sky-950 text-center font-semibold ";
  return h1;
}
export default createH1;
