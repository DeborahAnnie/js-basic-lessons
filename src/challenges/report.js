import { submit } from "./submit.js";
import { search } from "./search.js";
import { cities, city, gender, genders } from "./options.js";
import { radio, radiobtn, radiobtn1 } from "./radio.js";

document.getElementById("data").style.display = "block";

const btn = document.getElementById("submit");

btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(
    "#pname, #aadhar, #dob, #city, #dot, #tot, #lname, #repnum, #gender"
  );

  inputs.forEach((input) => {
    input.value = "";
  });
});
function radioButton() {
  result();
};
radioButton();
function radioButton1() {
  result1();
};
radioButton1();
function searchCall() {
    doSearch();
};
searchCall();
function optionDisplay() {
  generateOptions(data);
};
optionDisplay();
