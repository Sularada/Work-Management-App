import createButton from "../atoms/button.js";
import createH2 from "../atoms/h2.js";
import createAddModal from "./addModal.js";
function createTodoArticle(personList) {
  const todo_article = document.createElement("article");
  todo_article.className = "flex-1";
  const todo_head = document.createElement("div");
  const todo_works = document.createElement("div");
  todo_works.className = "todo-works";
  const h2 = createH2("Todo");
  const create_button = createButton("Create +", "", () => {
    const modal = createAddModal(personList);
    const body = document.querySelector("body");
    body.append(modal);
  });
  todo_head.append(h2, create_button);
  todo_article.append(todo_head, todo_works);
  return todo_article;
}

export default createTodoArticle;
