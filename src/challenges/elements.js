import { setcurrencies } from "./handlers.js";
import { calculate } from "./money.js";


function setmoney() {
    setcurrencies();
}
setmoney();

var listen = document.getElementById('inputvalue');
console.log(listen);
listen.addEventListener("change",function(){
    calculate();
})
// var dropdown = document.getElementById('money');
// dropdown.addEventListener("mouseover",function(){
//     var droplength = document.getElementById('money').options.length;
//         document.getElementById('money').size = droplength;
// })

// var tochange = document.getElementById('toconversion');
// tochange.addEventListener("mouseover",function(){
//     var droplength = document.getElementById('toconversion').options.length;
//         document.getElementById('toconversion').size = droplength;
// })