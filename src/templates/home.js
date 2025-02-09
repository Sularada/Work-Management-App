import createTodoArticle from "../organisms/todo.js";
import createHeader from "../organisms/header.js";

function createHome(header, person_list) {
  const header_section = createHeader(header);
  const main = document.createElement("main");
  main.className = "flex";
  const todo_article = createTodoArticle(person_list);
  main.append(todo_article);
  return [header_section, main];
}

export default createHome;
