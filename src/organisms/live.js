import createH2 from "../atoms/h2.js";

function createLiveArticle() {
  const live_article = document.createElement("article");
  live_article.className = "flex-1";
  const live_head = document.createElement("div");
  const live_works = document.createElement("div");
  live_works.className = "dev-works";
  const h2 = createH2("Live");
  live_head.append(h2);
  live_article.append(live_head, live_works);
  return live_article;
}

export default createLiveArticle;
