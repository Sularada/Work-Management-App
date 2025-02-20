import createUl from "../../molecules/ul/ul.js";
import createH2 from "../../atoms/h2/h2.js";
import createFilter from "../../molecules/filter/filter.js";
function createProcessArticle(process) {
  const pro_article = document.createElement("article");
  pro_article.className = "flex-1 bg-sky-950 ";
  const processes = document.createElement("div");
  processes.className = "pro-works";
  const filter = createFilter();
  processes.append(filter);
  pro_article.append(processes);
  return pro_article;
}

export default createProcessArticle;
