import createH2 from "../atoms/h2.js";

function createTestArticle() {
  const test_article = document.createElement("article");
  test_article.className = "flex-1";
  const test_head = document.createElement("div");
  const test_works = document.createElement("div");
  test_works.className = "dev-works";
  const h2 = createH2("Test");
  test_head.append(h2);
  test_article.append(test_head, test_works);
  return test_article;
}

export default createTestArticle;
