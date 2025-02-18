import createHome from "../templates/home.js";

function createHomePage() {
  const home_temlate = createHome(
    "Work Management App",
    ["Kadriye Demirci", "Cansu Çevik", "Ahmet Özalp"],
    ["Projects", "Employees"]
  );
  console.log(home_temlate);
  return home_temlate;
}

export default createHomePage;
