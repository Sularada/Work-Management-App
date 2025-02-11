import createH2 from "../atoms/h2.js";
import createCard from "../molecules/card.js";
function createDevArticle(person_list) {
  const dev_article = document.createElement("article");
  dev_article.className = "flex-1";
  const dev_head = document.createElement("div");
  const dev_works = document.createElement("div");
  dev_works.className = "dev-works";
  const h2 = createH2("Development");
  dev_head.append(h2);
  dev_article.append(dev_head, dev_works);
  if (JSON.parse(localStorage.getItem(`Dev`)) == null) {
    localStorage.setItem(`Dev`, JSON.stringify([]));
  }
  const dev_storage = JSON.parse(localStorage.getItem(`Dev`));
  dev_storage.forEach((work) => {
    const card = createCard(person_list, work);
    dev_works.append(card);
  });
  return dev_article;
}

export default createDevArticle;
