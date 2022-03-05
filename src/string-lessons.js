/* eslint-disable camelcase */
/* eslint-disable semi */
// eslint-disable-next-line camelcase
const my_name = 'NamefieldEmpty'; // single quote
const middle = 'Gabbar'; // doublequote
const last = 'Singh'; // back tick
console.log(my_name);
console.log(middle);
console.log(last);

const sentence1 = 'shes\'s so "cool"';
console.log(sentence1);
const sentence2 = "she's so cool";
console.log(sentence2);
const sentence3 = 'she\'s so cool';
console.log(sentence3);
const sentence4 = "she's so \"cool\"";
console.log(sentence4);

// multi line String using single quote doesn't work

const song1 = `I Like 
             ARR and
             Aniruth songs`;
console.log(song1);

const hello3 = 'hello my name is ' + my_name + '.Nice to meet you';
console.log(hello3);
// eslint-disable-next-line camelcase
const hello4 = `hello my name is  ${my_name}. Nice to meet you. I am ${1 + 100} years old) `;
console.log(hello4);

const html = `<div>
           <h2>${my_name}</h2>
           <p>${hello4}</p>
           </div>
           `;
console.log(html);
// document.body.innerHTML = html;
