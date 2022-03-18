/* eslint-disable semi */
// const doc = doctorize('Shiny');
// console.log(doc);
/* function doctorize (firstName) {
  return `Dr. ${firstName}`;
 } */
// thses are hoisted., meaning JS 'hoists' or put them at top of the file.
// so if we run a function that is defined with the "function" keyword before it is defined above its definition.

// Anonymous func
/* function (firstName) {
    return `Dr.${firstName}`;
} */

// function expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`
}
const doc = doctorize('Shiny');
console.log(doc);
// these are not hoisted,meaning js doesn't put them at top of the file.
// so if the func isn't defined with the func keyword, so if we try to run it before it is defined(above its definition)
// then theres an error and func fail to execute.

// arrow or lambda functions
const inchToCM = inches => {
  console.log(inches);
  return inches * 2.54;
};
const resultcm = inchToCM(10)
console.log(resultcm);

const funcA = () => {
  console.log('Hi');
};
funcA();

const add = (a, b = 3) => a + b;
const inTocm = inches => inches * 2.54;

console.log(add(100));
console.log(inTocm(25));

const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0 });
const person = makeAPerson('annie', 'deborah');
console.log(person);

// IIFE: Immediately Invoked Function Expressions.
(function (age) {
  console.log(`You are Cool and your age is ${age}`);
})(10);
// parantheses run first in js, so we have wrapped the func in ().
// the func immediately runs.
// the argument passed here is 10 for parameter age.

const employee = {
  name: 'Annie Deborah',
  // method
  sayHi: function () { // anon func
    console.log(`Hi!!! ${this.name}`);
    return `Hi ${this.name}`;
  },
  print: () => { // arrow func
    console.log('Hello employee');
  },
  yellHi () { // short hand method
    console.log(`HI ${this.name.toUpperCase()}`);
  }
};
employee.sayHi();
employee.print();
employee.yellHi();
