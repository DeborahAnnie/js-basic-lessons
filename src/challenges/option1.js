import { gender } from "./gender";
const gender = document.getElementById("gender");
gender.innerHTML = generateOptions(gender);
function generateOptions(data) {
  return Object.entries(data)
    .map(
      ([code, city]) =>
        `<option value="${code}">${
          code == "You" ? " " : code
        }  ${city}</option>`
    )
    .join(" ");
}