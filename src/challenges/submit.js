import { radio } from "./radio";
export var submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  var table = document.getElementById("data");
  var row = table.insertRow(-1);
  var personName = row.insertCell(0);
  var aadhar = row.insertCell(1);
  var dob = row.insertCell(2);
  var city = row.insertCell(3);
  var dot = row.insertCell(4);
  var tot = row.insertCell(5);
  var res = row.insertCell(6);
  var labName = row.insertCell(7);
  var reportNo = row.insertCell(8);
  var gender = row.insertCell(9);
  personName.innerHTML = document.getElementById("pname").value;
  aadhar.innerHTML = document.getElementById("aadhar").value;
  dob.innerHTML = document.getElementById("dob").value;
  city.innerHTML = document.getElementById("city").value;
  dot.innerHTML = document.getElementById("dot").value;
  tot.innerHTML = document.getElementById("tot").value;
  res.innerHTML = radio;
  labName.innerHTML = document.getElementById("lname").value;
  reportNo.innerHTML = document.getElementById("repnum").value;
  gender.innerHTML = document.getElementById("gender").value;

  return false;
});
