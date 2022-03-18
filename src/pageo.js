/* eslint-disable prefer-const */
/* eslint-disable semi */
const max = Math.max(10, 12, 35, 60, 8, 55)
console.log(max);
const min = Math.min(10, 12)
console.log(min);

const floatValue = parseFloat('2.032565')
console.log(floatValue);
let intValue = parseInt('2356abcd')
console.log(intValue);
intValue = parseInt('abcd2356') // if it is alphaNumeric it doesn't work
console.log(intValue);

// eslint-disable-next-line prefer-const
let today = Date.now(); // Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
console.log(today);

// parameters and arguments
function calculateBill (billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('Running Calculate Bill!!');
  console.log('billAmount: ' + billAmount + 'taxRate: ' + taxRate + 'tipRate: ' + tipRate)
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
calculateBill(100);
calculateBill(100, 0.66); // 100,0.66 are arguments.
// suppose in above,we want to pass the tipRate but not the taxRate and want taxRate to be default,
// then we can do this
calculateBill(100, undefined, 0.66);
// here taxRate will be default as 0.13 as we have passed undefined to it and the tipRate will be 0.66 as passed.

let billTotal = calculateBill(20 + 10 + 50, 0.75)
console.log(billTotal);

function yell (name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}
let greetings = yell('Annie')
console.log(greetings);
greetings = yell();
console.log(greetings);
