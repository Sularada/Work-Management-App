import createH2 from "../../atoms/h2/h2.js";
import createCard from "../../molecules/card/card.js";
import LocaleStorageApi from "../../sevices/localStorageApi.js";
function createTestArticle(person_list) {
  const test_article = document.createElement("article");
  test_article.className = "flex-1 border-l-2 border-dotted border-sky-950";
  const test_head = document.createElement("div");
  test_head.className =
    "text-stone-100  font-semibold  text-2xl bg-sky-950 border-y-4 border-double flex justify-between";
  const test_works = document.createElement("div");
  test_works.className = "test-works";
  const h2 = createH2("Test");
  test_head.append(h2);
  test_article.append(test_head, test_works);
  const test_storage = LocaleStorageApi.get(`Test`);
  test_storage.forEach((work) => {
    const card = createCard(person_list, work);
    test_works.append(card);
  });
  return test_article;
}

export default createTestArticle;
