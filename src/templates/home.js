import createTodoArticle from "../organisms/todo.js";
import createHeader from "../organisms/header.js";

function createHome(header) {
  const header_section = createHeader(header);
  const main = document.createElement("main");
  const todo_article = createTodoArticle();
  main.append(todo_article);
  return [header_section, main];
}

export default createHome;
