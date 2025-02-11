import createH2 from "../atoms/h2.js";
import createCard from "../molecules/card.js";
function createLiveArticle(person_list) {
  const live_article = document.createElement("article");
  live_article.className = "flex-1";
  const live_head = document.createElement("div");
  const live_works = document.createElement("div");
  live_works.className = "live-works";
  const h2 = createH2("Live");
  live_head.append(h2);
  live_article.append(live_head, live_works);
  if (JSON.parse(localStorage.getItem(`Live`)) == null) {
    localStorage.setItem(`Live`, JSON.stringify([]));
  }
  const live_storage = JSON.parse(localStorage.getItem(`Live`));
  live_storage.forEach((work) => {
    const card = createCard(person_list, work);
    live_works.append(card);
  });
  return live_article;
}

export default createLiveArticle;
