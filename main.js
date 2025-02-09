import createHeader from "./src/organisms/header.js";
import createButton from "./src/atoms/button.js";
import createCard from "./src/molecules/card.js";
import createHomePage from "./src/pages/home_page.js";
const body = document.querySelector("body");

const all_home_page = createHomePage();
all_home_page.forEach((item) => {
  body.append(item);
});
console.log(home_page);

// import("./src/atoms/button.js").then(() => {
//   const btn = createButton(
//     "Create",
//     "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
//     create
//   );
//   document.querySelector("body").append(btn);
//   function create() {
//     alert("created");
//   }
// });
