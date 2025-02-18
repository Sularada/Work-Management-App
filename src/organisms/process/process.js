import createUl from "../../molecules/ul.js";
import createH2 from "../../atoms/h2.js";
function createProcessArticle(process) {
  const pro_article = document.createElement("article");
  pro_article.className = "flex-1 bg-sky-950 ";
  const pro_head = document.createElement("div");
  const processes = document.createElement("div");
  processes.className = "pro-works";
  const h2 = createH2("Processes");
  h2.className =
    "text-stone-100 font-semibold  text-2xl border-y-4 border-double p-2";
  pro_head.append(h2);
  const ul = createUl("process", process);
  processes.append(ul);
  pro_article.append(pro_head, processes);
  return pro_article;
}

export default createProcessArticle;
