/* eslint-disable quotes */
/* eslint-disable no-new-object */
/* eslint-disable semi */
/* eslint-disable no-array-constructor */

const o = new Object();
const a = new Array();
const d = new Date();
const f1 = function () {
//   console.log('The Cow Jumped over the MOON')
}

// console.log('Date=' + d)
f1()

const o1 = Object.create({ x: 100, y: 200 });
// console.log('x=' + o1.x + 'y=' + o1.y);
// console.log(o1);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
// const o3=new Object(); // both works same as the above line
// const o3={};
// console.log(o2);
// console.log(o3);

function getChild (parent) {
  if (parent == null) throw TypeError();
  return Object.create(parent);
}
const o4 = { x: "don't change this value" };
// console.log(o4.x);
let p = getChild(o4); // Object.create(o4)
// console.log(p);
// o4 = null;
// p = getChild(o4); // Object.create(null);
// console.log(p);
Object.prototype = 0;
// console.log(Object);
// the prototype objects of built-in are read-only. Object.prototype unchanged.

const o5 = { };
console.log(o5);
o5.x = 100;
console.log(o5);
p = getChild(o5);
console.log(p);
p.y = 200;
// eslint-disable-next-line prefer-const
let q = getChild(p);
q.z = 300;
console.log(q);
console.log('q.x + q.y + q.z ' + (q.x + q.y + q.z));
console.log('p.x + p.y ' + (p.x + p.y));
console.log('o5.x + o5.y' + (o5.x + o5.y));
console.log('o5.x ' + (o5.x));

const book = {
  'main title': 'Java Script', // property names include spaces
  subtitle: 'The definitive Guide',
  for: 'all audiences', // resreved keyword
  author: {
    first: 'Donald',
    last: 'Duck'
  }
};
let len;
// book = null;
// if (book) {
//   if (book.subtitles) {
//     len = book.subtitle.length;
//     console.log(len);
//   } else {
//     console.log('book.subtitle undefined:');
//   }
// } else {
//   console.log('book is null');
// }

// eslint-disable-next-line prefer-const
len = book && book.subtitle && book.subtitle.length;
if (len) console.log(len);

console.log(book.author);
delete book.author;
console.log(book.author);

console.log(book["main title"]);
delete book["main title"];
console.log(book["main title"]);

const o6 = { x: 100 };
console.log(o6.x);
delete o6.x;
console.log(o6.x);
console.log(o6.toString);
delete o6.toString;// not possibe

delete Object.prototype;// not possible because global avriable can't be deleted
// eslint-disable-next-line no-var
var b = 1;
delete this.b;
function f2 () {}
delete this.f2(); // these all can't be deleted
