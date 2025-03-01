import createH2 from "../../atoms/h2/h2.js";
import createCard from "../../molecules/card/card.js";
import LocaleStorageApi from "../../sevices/localStorageApi.js";
function createDevArticle() {
  const dev_article = document.createElement("article");
  dev_article.className = "flex-1 border-l-2 border-dotted border-sky-950";
  const dev_head = document.createElement("div");
  dev_head.className =
    "text-stone-100  font-semibold  text-2xl bg-sky-950 border-y-4 border-double flex justify-between";
  const dev_works = document.createElement("div");
  dev_works.className = "dev-works";
  const h2 = createH2("Development");
  h2.className = " p-2";
  dev_head.append(h2);
  dev_article.append(dev_head, dev_works);
  const dev_storage = LocaleStorageApi.get(`Dev`);
  dev_storage.forEach((work) => {
    const card = createCard(work);
    dev_works.append(card);
  });
  return dev_article;
}

export default createDevArticle;
