import createButton from "../atoms/button.js";
import createH2 from "../atoms/h2.js";
import createInput from "../atoms/input.js";
import createLabel from "../atoms/label.js";
import createSelect from "../atoms/select.js";

function createEditModal(person_list, work) {
  const modal = document.createElement("div");
  modal.className = "absolute top-50 right-50 max-w-lg";
  // modal.style.position = "absolute";
  // modal.style.top = "50%";
  // modal.style.left = "50%";
  // modal.style.maxWidth = "450px";
  const h2 = createH2("Edit Work");
  const form = document.createElement("form");
  const id_label = createLabel("Id");
  const id_input = createInput("id", "Please enter work id", "text");
  id_input.value = work.id;
  const name_label = createLabel("Name");
  const name_input = createInput("name", "Please enter work name");
  name_input.value = work.name;
  const person_label = createLabel("Assigned to");
  const person_input = createSelect("person", person_list);
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
      break;
    case "Dev":
      state_input_dev.checked = true;
      break;
    case "Test":
      state_input_test.checked = true;
      break;
    case "Live":
      state_input_live.checked = true;
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
  const info_input = createInput("info", "Please enter information");
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
  const update_button = createButton("Update", "", function () {
    let local_storage = JSON.parse(localStorage.getItem(`${work.state}`));
    work.id = id_input.value;
    work.name = name_input.value;
    work.person = person_input.value;
    work.time = time_input.value;
    work.info = info_input.value;
    if (
      work.state == document.querySelector('input[name="state"]:checked').value
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
          localStorage.setItem(`${work.state}`, JSON.stringify(local_storage));
        }
      }
      work.state = document.querySelector('input[name="state"]:checked').value;
      local_storage = JSON.parse(localStorage.getItem(`${work.state}`));
      local_storage.push(work);
    }
    localStorage.setItem(`${work.state}`, JSON.stringify(local_storage));
    location.reload();
  });
  const delete_button = createButton("Delete", "", function () {
    let local_storage = JSON.parse(localStorage.getItem(`${work.state}`));
    for (let i = 0; i < local_storage.length; i++) {
      if (local_storage[i].id == work.id) {
        //local_storage.item = work;
        local_storage.splice(i, 1);
        localStorage.setItem(`${work.state}`, JSON.stringify(local_storage));
      }
    }
    location.reload();
  });
  modal.append(h2, form, update_button, delete_button);
  return modal;
}
export default createEditModal;
