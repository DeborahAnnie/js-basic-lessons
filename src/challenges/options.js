export const cities = {
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
export const city = document.getElementById("city");
city.innerHTML = generateOptions(cities);
function generateOptions(data) {
  return Object.entries(data)
    .map(
      ([code, city]) =>
        `<option value="${code}">${code == "" ? " " : code}  ${city}</option>`
    )
    .join("");
}
export const gender = {
  Choose: "",
  Male: "",
  Female: "",
  Other: "",
};
export const genders = document.getElementById("gender");
genders.innerHTML = generateOptions(gender);
