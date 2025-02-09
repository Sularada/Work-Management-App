import createH4 from "../atoms/h4.js";
import createP from "../atoms/p.js";

function createCard(id, head, date, state, person, info) {
  const h4 = createH4(id + " - " + head);
  const date_text = createP(date);
  const state_text = createP(state);
  const person_text = createP(person);
  const info_text = createP(info);
  const card = document.createElement("div");
  card.className = "card";
  const card_head = document.createElement("div");
  card_head.className = "card_head";
  card_head.append(h4);
  card.append(card_head, date_text, state_text, person_text, info_text);
  return card;
}
export default createCard;
