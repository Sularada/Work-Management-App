import createHome from "../../templates/home/home.js";

function createHomePage() {
  const home_temlate = createHome(
    "Work Management App",
    ["Kadriye Demirci", "Cansu Çevik", "Ahmet Özalp"],
    ["Projects", "Employees"]
  );
  return home_temlate;
}

export default createHomePage;
