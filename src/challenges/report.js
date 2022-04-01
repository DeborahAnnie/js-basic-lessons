import { submit } from "./submit.js";
import { search } from "./search.js";
const cities = {
  Select: "Your City",
  Ariyalur: "",
  Chengalpattu: "",
  Chennai: "",
  Coimbatore: "",
  Cuddalore: "",
  Dharmapuri: "",
  Dindigul: "",
  Erode: "",
  Kallakurichi: "",
  Kanchipuram: "",
  Kanyakumari: "",
  Karur: "",
  Krishnagiri: "",
  Madurai: "",
  Nagapattinam: "",
  Namakkal: "",
  Nilgiris: "",
  Perambalur: "",
  Pudukkottai: "",
  Ramanathapuram: "",
  Ranipet: "",
  Salem: "",
  Sivagangai: "",
  Tenkasi: "",
  Thanjavur: "",
  Theni: "",
  Thoothukudi: "",
  Tiruchirappalli: "",
  Tirunelveli: "",
  Tirupathur: "",
  Tiruppur: "",
  Tiruvallur: "",
  Tiruvannamalai: "",
  Tiruvarur: "",
  Vellore: "",
  Viluppuram: "",
  Virudhunagar: "",
};
var radio;
const city = document.getElementById("city");
city.innerHTML = generateOptions(cities);
function generateOptions(data) {
  return Object.entries(data)
    .map(
      ([code, city]) =>
        `<option value="${code}">${
          code == "" ? " " : code
        }  ${city}</option>`
    )
    .join("");
}
const gender = {
  Choose: "",
  Male: "",
  Female: "",
  Other: "",
};
const genders = document.getElementById("gender");
genders.innerHTML = generateOptions(gender);

function result() {
  radio = document.getElementById("rad-btn").value;
}
function result1() {
  radio = document.getElementById("rad-btn1").value;
}
document.getElementById("data").style.display = "block";

const btn = document.getElementById("submit");

btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(
    "#pname, #aadhar, #dob, #city, #dot, #tot,#lname, #repnum, #gender"
  );

  inputs.forEach((input) => {
    input.value = "";
  });
});

function doSearch() {
  var searchText = document.getElementById("searchTerm").value;
  var targetTable = document.getElementById("data");
  var targetTableColCount;

  for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
    var rowData = "";

    if (rowIndex == 0) {
      targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
      continue;
    }
    var colIndex = 1;
    var cellText = "";
    cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;

    rowData += cellText;
    if (rowData.indexOf(searchText) == -1)
      targetTable.rows.item(rowIndex).style.display = "none";
    else targetTable.rows.item(rowIndex).style.display = "table-row";
  }
}
function searchCall() {
  doSearch();
}
searchCall();
function submitCall() {
  doSubmit();
}
submitCall();
