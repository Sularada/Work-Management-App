import createHomePage from "./src/pages/home_page/home_page.js";
const body = document.querySelector("body");

const all_home_page = createHomePage();
all_home_page.forEach((item) => {
  body.append(item);
});
