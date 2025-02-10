import createH2 from "../atoms/h2.js";

function createDevArticle() {
  const dev_article = document.createElement("article");
  dev_article.className = "flex-1";
  const dev_head = document.createElement("div");
  const dev_works = document.createElement("div");
  dev_works.className = "dev-works";
  const h2 = createH2("Development");
  dev_head.append(h2);
  dev_article.append(dev_head, dev_works);
  return dev_article;
}

export default createDevArticle;
