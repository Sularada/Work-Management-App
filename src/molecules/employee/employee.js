import createH2 from "../../atoms/h2/h2.js";
import LocaleStorageApi from "../../sevices/localStorageApi.js";
import createButton from "../../atoms/button/button.js";
import createInput from "../../atoms/input/input.js";

function createEmployee() {
  const emp = document.createElement("div");
  const emp_head = document.createElement("a");
  emp_head.className =
    "text-stone-100  font-semibold  text-2xl bg-sky-950 border-y-4 border-double flex justify-between btn btn-secondary ";
  const emp_body = document.createElement("div");
  emp_body.className = "flex  p-2";
  const h2 = createH2("Add Employee");
  const input = createInput("emp", "Enter employee name and surname", "text");
  input.className =
    "w-full border-1 border-sky-800 focus:border-sky-950 p-1 bg-stone-200 mr-2 inline-block align-middle";
  const button = createButton("💾", () => {
    if (input.value != "") {
      const emps = LocaleStorageApi.employeeGet();
      console.log(emps);
      emps.push(input.value);
      LocaleStorageApi.employeeSet(emps);
    } else {
      alert("Please enter employee information!");
    }
  });
  emp_head.append(h2);
  emp_body.append(input, button);
  emp.append(emp_head, emp_body);
  return emp;
}
export default createEmployee;
