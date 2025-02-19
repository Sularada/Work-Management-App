import createH2 from "../../atoms/h2/h2.js";
import createCard from "../../molecules/card/card.js";
import LocaleStorageApi from "../../sevices/localStorageApi.js";
function createLiveArticle(person_list) {
  const live_article = document.createElement("article");
  live_article.className = "flex-1 border-l-2 border-dotted border-sky-950";
  const live_head = document.createElement("div");
  live_head.className =
    "text-stone-100  font-semibold  text-2xl bg-sky-950 border-y-4 border-double flex justify-between";
  const live_works = document.createElement("div");
  live_works.className = "live-works";
  const h2 = createH2("Live");
  live_head.append(h2);
  live_article.append(live_head, live_works);
  const live_storage = LocaleStorageApi.get(`Live`);
  live_storage.forEach((work) => {
    const card = createCard(person_list, work);
    live_works.append(card);
  });
  return live_article;
}

export default createLiveArticle;
