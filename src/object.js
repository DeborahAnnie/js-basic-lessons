/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable semi */
const person = {
  first: 'Annie',
  last: 'Deborah',
  age: 20
}
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'Tom'
person.last = 'Jerry'
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

const empty = {};
const point = { x: 10, y: 50 };
const point2 = { x: point.x, y: point.y + 1 };
console.log(empty);
console.log(point);
console.log(point2);

const book = {
  'main title': 'Java Script', // property names include spaces
  'sub-title': 'Guide to Java Script for beginners', // using - should be in ' ' quote
  'for': 'students', // resreved keyword
  author: {
    first: 'Annie',
    last: 'Deborah'
  }
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book.for);
console.log(book.author.first);
console.log(book.author.last);
// eslint-disable-next-line space-infix-ops
// console.log(book.sub-title);
console.log(book.for);
