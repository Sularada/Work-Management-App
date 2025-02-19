function createLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.className = "p-2 text-white border-b-2 border-dotted  hover:bg-sky-700 ";
  li.addEventListener("click", () => {
    alert("li");
  });
  return li;
}
export default createLi;
