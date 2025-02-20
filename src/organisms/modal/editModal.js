import createButton from "../../atoms/button/button.js";
import createH2 from "../../atoms/h2/h2.js";
import createInput from "../../atoms/input/input.js";
import createLabel from "../../atoms/label/label.js";
import createTextarea from "../../atoms/textarea/textarea.js";
import createSelect from "../../molecules/select/select.js";
import LocaleStorageApi from "../../sevices/localStorageApi.js";

function createEditModal(work) {
  const modal = document.createElement("div");
  const modal_head = document.createElement("div");
  modal_head.className = "flex justify-between my-3";
  modal.className =
    "bg-stone-200 p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ";
  const h2 = createH2("Edit Work");
  h2.className = "text-xl";
  const close_btn = createButton("✖️", () => {
    modal.remove();
  });
  modal_head.append(h2, close_btn);
  const form = document.createElement("form");
  const id_label = createLabel("Id");
  const id_input = createInput("id", "Please enter work id", "text");
  id_input.value = work.id;
  id_input.readOnly = true;
  const name_label = createLabel("Name");
  const name_input = createInput("name", "Please enter work name");
  name_input.value = work.name;
  const person_label = createLabel("Assigned to");
  const person_input = createSelect("person", LocaleStorageApi.employeeGet());
  person_input.value = work.person;
  const time_label = createLabel("Date");
  const time_input = createInput("date", "", "date");
  time_input.value = work.time;
  const state_label = createLabel("State");
  const states = document.createElement("div");
  const state_input_todo = createInput("state", "", "radio", "Todo", "state");
  const state_label_todo = createLabel("Todo");
  const state_input_dev = createInput("state", "", "radio", "Dev", "state");
  const state_label_dev = createLabel("Dev");
  const state_input_test = createInput("state", "", "radio", "Test", "state");
  const state_label_test = createLabel("Test");
  const state_input_live = createInput("state", "", "radio", "Live", "state");
  const state_label_live = createLabel("Live");
  switch (work.state) {
    case "Todo":
      state_input_todo.checked = true;
      state_input_test.disabled = true;
      state_input_live.disabled = true;
      break;
    case "Dev":
      state_input_dev.checked = true;
      state_input_live.disabled = true;
      break;
    case "Test":
      state_input_test.checked = true;
      state_input_todo.checked = true;
      break;
    case "Live":
      state_input_live.checked = true;
      state_input_dev.disabled = true;
      state_input_todo.disabled = true;
      break;
  }
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
  const info_label = createLabel("Work Information");
  const info_input = createTextarea("info", "Please enter information");
  info_input.value = work.info;
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
  const update_button = createButton("Update", function () {
    if (
      checkInputs(
        [
          ...form.querySelectorAll("input"),
          ...form.querySelectorAll("textarea"),
        ].filter((item) => item.name != `state`)
      ) == true &&
      person_input.value != "Select Employee"
    ) {
      let local_storage = LocaleStorageApi.get(work.state);
      work.id = id_input.value;
      work.name = name_input.value;
      work.person = person_input.value;
      work.time = time_input.value;
      work.info = info_input.value;
      if (
        work.state ==
        document.querySelector('input[name="state"]:checked').value
      ) {
        for (let i = 0; i < local_storage.length; i++) {
          if (local_storage[i].id == work.id) {
            //local_storage.item = work;
            local_storage[i] = work;
          }
        }
      } else {
        for (let i = 0; i < local_storage.length; i++) {
          if (local_storage[i].id == work.id) {
            //local_storage.item = work;
            local_storage.splice(i, 1);
            LocaleStorageApi.set(work.state, local_storage);
          }
        }
        work.state = document.querySelector(
          'input[name="state"]:checked'
        ).value;
        local_storage = LocaleStorageApi.get(work.state);
        local_storage.push(work);
      }
      LocaleStorageApi.set(work.state, local_storage);
    } else {
      alert("Please, check your inputs!");
    }
  });
  const delete_button = createButton("Delete", function () {
    let local_storage = LocaleStorageApi.get(work.state);
    for (let i = 0; i < local_storage.length; i++) {
      if (local_storage[i].id == work.id) {
        //local_storage.item = work;
        local_storage.splice(i, 1);
        LocaleStorageApi.set(work.state, local_storage);
        break;
      }
    }
  });
  modal.append(modal_head, form, update_button, delete_button);
  return modal;
}
function checkInputs(inputs) {
  let valid = true;
  inputs.forEach((input) => {
    if (input.value == "" || input.value == null) {
      valid = false;
    }
  });
  return valid;
}

export default createEditModal;
