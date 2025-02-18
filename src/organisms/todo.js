import createButton from "../atoms/button.js";
import createH2 from "../atoms/h2.js";
import createCard from "../molecules/card.js";
import createAddModal from "./addModal.js";
function createTodoArticle(person_list) {
  const todo_article = document.createElement("article");
  todo_article.className = "flex-1 border-l-2 border-dotted border-sky-950";
  const todo_head = document.createElement("div");
  todo_head.className =
    "text-stone-100  font-semibold  text-2xl bg-sky-950 border-y-4 border-double flex justify-between";
  const todo_works = document.createElement("div");
  todo_works.className = "todo-works";
  const h2 = createH2("Todo");
  const button = createButton("+", () => {
    const modal = createAddModal(person_list);
    const body = document.querySelector("body");
    body.append(modal);
  });
  todo_head.append(h2, button);
  todo_article.append(todo_head, todo_works);
  if (JSON.parse(localStorage.getItem(`Todo`)) == null) {
    localStorage.setItem(`Todo`, JSON.stringify([]));
  }
  const todo_storage = JSON.parse(localStorage.getItem(`Todo`));
  todo_storage.forEach((work) => {
    const card = createCard(person_list, work);
    todo_works.append(card);
  });
  return todo_article;
}

export default createTodoArticle;
