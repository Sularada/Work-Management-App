import createHeader from "./src/organisms/header.js";
import createButton from "./src/atoms/button.js";

const header = createHeader("Work Management App");
document.querySelector("body").append(header);

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
