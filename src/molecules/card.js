import createH4 from "../atoms/h4.js";
import createP from "../atoms/p.js";
import createEditModal from "../organisms/editModal.js";
function createCard(person_list, work) {
  const h4 = createH4(work.id + " - " + work.name);
  const date_text = createP(work.time);
  const state_text = createP(work.state);
  const person_text = createP(work.person);
  const info_text = createP(work.info);
  const card = document.createElement("div");
  card.className = "card";
  const card_head = document.createElement("div");
  card_head.className = "card_head";
  card_head.append(h4);
  card.append(card_head, date_text, state_text, person_text, info_text);
  card.addEventListener("click", function () {
    const modal = createEditModal(person_list, work);
    const body = document.querySelector("body");
    body.append(modal);
  });
  return card;
}
export default createCard;
