import createH2 from "../atoms/h2.js";
import createCard from "../molecules/card.js";
function createTestArticle(person_list) {
  const test_article = document.createElement("article");
  test_article.className = "flex-1";
  const test_head = document.createElement("div");
  const test_works = document.createElement("div");
  test_works.className = "test-works";
  const h2 = createH2("Test");
  test_head.append(h2);
  test_article.append(test_head, test_works);
  if (JSON.parse(localStorage.getItem(`Test`)) == null) {
    localStorage.setItem(`Test`, JSON.stringify([]));
  }
  const test_storage = JSON.parse(localStorage.getItem(`Test`));
  test_storage.forEach((work) => {
    const card = createCard(person_list, work);
    test_works.append(card);
  });
  return test_article;
}

export default createTestArticle;
