import createButton from "../atoms/button.js";
import createH2 from "../atoms/h2.js";
function createTodoArticle() {
  const todo_article = document.createElement("article");
  const todo_head = document.createElement("div");
  const todo_works = document.createElement("div");
  todo_works.className = "todo-works";
  const h2 = createH2("Todo");
  const create_button = createButton("Create +", "", createCard);
  todo_head.append(h2, create_button);
  todo_article.append(todo_head);
  return todo_article;
}
function createCard() {
  alert("Crate button created");
}

export default createTodoArticle;
