import { cities } from "./city";
const city = document.getElementById("city");
city.innerHTML = generateOptions(cities);
function generateOptions(data) {
  return Object.entries(data)
    .map(
      ([code, city]) =>
        `<option value="${code}">${
          code == "TN1" ? " " : code
        }  ${city}</option>`
    )
    .join(" ");
}