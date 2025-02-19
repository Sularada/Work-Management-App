import createTodoArticle from "../../organisms/article/todo.js";
import createHeader from "../../organisms/header/header.js";
import createDevArticle from "../../organisms/article/dev.js";
import createTestArticle from "../../organisms/article/test.js";
import createLiveArticle from "../../organisms/article/live.js";
import createProcessArticle from "../../organisms/process/process.js";

function createHome(header, person_list, processes) {
  const header_section = createHeader(header);
  const main = document.createElement("main");
  main.className = "flex flex-wrap h-full";
  const screen = document.createElement("section");
  screen.className = "process flex-3 flex flex-wrap";
  const process_article = createProcessArticle(processes);
  const todo_article = createTodoArticle(person_list);
  const dev_article = createDevArticle(person_list);
  const test_article = createTestArticle(person_list);
  const live_article = createLiveArticle(person_list);
  screen.append(todo_article, dev_article, test_article, live_article);
  main.append(process_article, screen);
  return [header_section, main];
}

export default createHome;
