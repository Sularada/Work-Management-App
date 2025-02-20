import createH2 from "../../atoms/h2/h2.js";
import LocaleStorageApi from "../../sevices/localStorageApi.js";
import createSelect from "../select/select.js";
import createEmployee from "../employee/employee.js";

function createFilter() {
  const filter = document.createElement("div");
  const select = createSelect("filter-select", LocaleStorageApi.employeeGet());
  select.addEventListener("change", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (select.value == "Select Employee") {
        card.classList.remove("opacity-25");
        card.classList.add("opacity-100");
      } else {
        if (
          "Attached to: " + select.value !=
          card.querySelector(".person-info").textContent
        ) {
          card.classList.add("opacity-25");
          card.classList.remove("opacity-100");
        } else {
          card.classList.remove("opacity-25");
          card.classList.add("opacity-100");
        }
      }
    });
  });
  select.classList.add("bg-sky-950");
  select.classList.add("text-stone-200");
  select.classList.add("mb-3");
  const filter_head = document.createElement("a");
  filter_head.className =
    "text-stone-100  font-semibold  text-2xl bg-sky-950 border-y-4 border-double flex justify-between btn btn-secondary ";
  const filter_body = document.createElement("div");
  const h2 = createH2("Filter Employee");
  const emps = createEmployee();
  filter_head.append(h2);
  filter_body.append(select, emps);
  filter.append(filter_head, filter_body);
  return filter;
}
export default createFilter;
