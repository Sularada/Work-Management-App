import createTodoArticle from "../organisms/todo.js";
import createHeader from "../organisms/header.js";
import createDevArticle from "../organisms/dev.js";
import createTestArticle from "../organisms/test.js";
import createLiveArticle from "../organisms/live.js";

function createHome(header, person_list) {
  const header_section = createHeader(header);
  const main = document.createElement("main");
  main.className = "flex flex-wrap";
  const todo_article = createTodoArticle(person_list);
  const dev_article = createDevArticle();
  const test_article = createTestArticle();
  const live_article = createLiveArticle();
  main.append(todo_article, dev_article, test_article, live_article);
  return [header_section, main];
}

export default createHome;
