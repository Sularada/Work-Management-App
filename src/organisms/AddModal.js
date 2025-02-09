import createButton from "../atoms/button.js";
import createH2 from "../atoms/h2.js";
import createInput from "../atoms/input.js";
import createLabel from "../atoms/label.js";
import createSelect from "../atoms/select.js";

function createAddModal(person_list) {
  const modal = document.createElement("div");
  modal.className = "absolute top-50 right-50 max-w-lg";
  // modal.style.position = "absolute";
  // modal.style.top = "50%";
  // modal.style.left = "50%";
  // modal.style.maxWidth = "450px";
  const h2 = createH2("Create New Work");
  const form = document.createElement("form");
  const id_label = createLabel("Id");
  const id_input = createInput("id", "Please enter work id", "text");
  const name_label = createLabel("Name");
  const name_input = createInput("name", "Please enter work name");
  const person_label = createLabel("Assigned to");
  const person_input = createSelect("person", person_list);
  const time_label = createLabel("Date");
  const time_input = createInput("date", "", "date");
  const state_label = createLabel("State");
  const states = document.createElement("div");
  const state_input_todo = createInput("state", "", "radio", "Todo", "status");
  const state_input_dev = createInput("state", "", "radio", "Dev", "status");
  const state_input_test = createInput("state", "", "radio", "Test", "status");
  const state_input_live = createInput("state", "", "radio", "Live", "status");
  states.append(
    state_input_todo,
    state_input_dev,
    state_input_test,
    state_input_live
  );
  const info_label = createLabel("Work Information");
  const info_input = createInput("info", "Please enter information");
  form.append(
    id_label,
    id_input,
    name_label,
    name_input,
    person_label,
    person_input,
    time_label,
    time_input,
    state_label,
    states,
    info_label,
    info_input
  );
  const save_button = createButton("Save", "", saveFunction);
  modal.append(h2, form, save_button);
  return modal;
}
function saveFunction() {
  alert("saved");
}
export default createAddModal;
