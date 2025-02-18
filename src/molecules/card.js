import createH4 from "../atoms/h4.js";
import createP from "../atoms/p.js";
import createEditModal from "../organisms/editModal.js";
function createCard(person_list, work) {
  const h4 = createH4(work.id + " - " + work.name);
  const date_text = createP("Deadline: " + work.time);
  const person_text = createP("Attached to: " + work.person);
  const info_text = createP("Work Details: " + work.info);
  const card = document.createElement("div");
  card.className =
    "card py-2 px-3 min-w-60 max-w-70 text-wrap border-b-3 border-normal border-stone-300 hover:bg-violet-100";
  const card_head = document.createElement("div");
  card_head.className = "card_head";
  card_head.append(h4);
  card.append(card_head, date_text, person_text, info_text);
  card.addEventListener("click", function () {
    const modal = createEditModal(person_list, work);
    const body = document.querySelector("body");
    body.append(modal);
  });
  return card;
}
export default createCard;
