import createH2 from "../../atoms/h2/h2.js";
import LocaleStorageApi from "../../sevices/localStorageApi.js";
import createSelect from "../select/select.js";
import createButton from "../../atoms/button/button.js";

function createFilter() {
  const filter = document.createElement("div");
  filter.className = "dropdown";
  const select = createSelect("filter-select", LocaleStorageApi.employeeGet());
  const filter_head = document.createElement("a");
  filter_head.className =
    "text-stone-100  font-semibold  text-2xl bg-sky-950 border-y-4 border-double flex justify-between btn btn-secondary dropdown-toggle";
  filter_head.role = "button";
  filter_head.setAttribute("data-bs-toggle", "dropdown");
  filter_head.setAttribute("aria-expanded", "false");
  const filter_body = document.createElement("div");
  const h2 = createH2("Filter Employee");
  const button = createButton("+", () => {});
  filter_head.append(h2, button);
  filter_body.append(select);
  filter.append(filter_head, filter_body);
  return filter;
}
export default createFilter;
