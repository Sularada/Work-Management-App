function createLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", () => {
    alert("li");
  });
  return li;
}
export default createLi;
