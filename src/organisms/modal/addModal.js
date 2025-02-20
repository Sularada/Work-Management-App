import createButton from "../../atoms/button/button.js";
import createH2 from "../../atoms/h2/h2.js";
import createInput from "../../atoms/input/input.js";
import createLabel from "../../atoms/label/label.js";
import createTextarea from "../../atoms/textarea/textarea.js";
import createSelect from "../../molecules/select/select.js";
import LocaleStorageApi from "../../sevices/localStorageApi.js";

function createAddModal() {
  const modal = document.createElement("div");
  const modal_head = document.createElement("div");
  modal_head.className = "flex justify-between my-3";
  modal.className =
    "bg-stone-200 p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ";
  const h2 = createH2("Create New Work");
  h2.className = "text-xl";
  const close_btn = createButton("✖️", () => {
    modal.remove();
  });
  modal_head.append(h2, close_btn);
  const form = document.createElement("form");
  const id_div = document.createElement("div");
  const id_label = createLabel("Id");
  const id_input = createInput("id", "Please enter work id", "text");
  id_div.append(id_label, id_input);
  const name_div = document.createElement("div");
  const name_label = createLabel("Name");
  const name_input = createInput("name", "Please enter work name");
  name_div.append(name_label, name_input);
  const person_div = document.createElement("div");
  const person_label = createLabel("Assigned to");
  const person_input = createSelect("person", LocaleStorageApi.employeeGet());
  person_div.append(person_label, person_input);
  const time_div = document.createElement("div");
  const time_label = createLabel("Date");
  const time_input = createInput("date", "", "date");
  time_div.append(time_label, time_input);
  const state_div = document.createElement("div");
  const state_label = createLabel("State");
  const states = document.createElement("div");
  const state_input_todo = createInput("state", "", "radio", "Todo", "state");
  state_input_todo.checked = true;
  const state_label_todo = createLabel("Todo");
  const state_input_dev = createInput("state", "", "radio", "Dev", "state");
  const state_label_dev = createLabel("Dev");
  const state_input_test = createInput("state", "", "radio", "Test", "state");
  const state_label_test = createLabel("Test");
  const state_input_live = createInput("state", "", "radio", "Live", "state");
  const state_label_live = createLabel("Live");
  states.append(
    state_input_todo,
    state_label_todo,
    state_input_dev,
    state_label_dev,
    state_input_test,
    state_label_test,
    state_input_live,
    state_label_live
  );
  state_div.append(state_label, states);
  const info_div = document.createElement("div");
  const info_label = createLabel("Work Information");
  const info_input = createTextarea("info", "Please enter information");
  info_div.append(info_label, info_input);
  form.append(id_div, name_div, person_div, time_div, state_div, info_div);
  const save_button = createButton("Save", function () {
    if (
      checkInputs(
        [
          ...form.querySelectorAll("input"),
          ...form.querySelectorAll("textarea"),
        ].filter((item) => item.name != `state`)
      ) == true &&
      checkId(id_input.value) == true &&
      person_input.value != "Select Employee"
    ) {
      const work = {
        id: id_input.value,
        name: name_input.value,
        person: person_input.value,
        time: time_input.value,
        state: document.querySelector('input[name="state"]:checked').value,
        info: info_input.value,
      };
      const todo_storage = LocaleStorageApi.get(work.state);
      todo_storage.push(work);
      LocaleStorageApi.set(work.state, todo_storage);
    }
  });
  modal.append(modal_head, form, save_button);
  return modal;
}
function checkInputs(inputs) {
  let valid = true;
  inputs.forEach((input) => {
    if (input.value == "" || input.value == null) {
      valid = false;
      alert(input.name + " is requred!");
    }
  });
  return valid;
}
function checkId(id) {
  let valid = true;
  ["Todo", "Dev", "Test", "Live"].forEach((state) => {
    LocaleStorageApi.get(state).forEach((work) => {
      if (work.id == id) {
        valid = false;
        alert("Id must be unique!");
      }
    });
  });
  return valid;
}

export default createAddModal;
