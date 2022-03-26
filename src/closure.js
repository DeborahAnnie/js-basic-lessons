/* eslint-disable prefer-const */
/* eslint-disable semi */
function doSomeTask () {
  const x = 100;
  const y = 20;
  console.log('x: ' + x + ' y: ' + y);
}

doSomeTask();
console.log('completed');

function outer () {
  const outerVar = 'Hey I am Outer Var!'
  // console.log(outerVar);
  function inner () {
    const innerVar = 'Hey I am Inner Var!';
    console.log(innerVar);
    console.log(outerVar); // closure-captured variable
  }
  // console.log(innerVar); // uncaught refrenece error: innerVar is not defined
  // inner(); // call to inner() from outer
  return inner;
}
// outer();
// inner(); // error inner is not defined
const innerFunc = outer();
innerFunc();

function createGreeting (greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  }
}
const greeting = createGreeting('hey');
console.log(greeting('Annie'));

const sayHello = createGreeting('hello');
const sayVanakam = createGreeting('vanakam');
console.log(sayHello('Annie'));
console.log(sayVanakam('Deborah'));
console.log(sayVanakam('Annie'));

function createGame (gameName) {
  let score = 0;
  return function win () {
    score++;
    return `Your name ${gameName} score is ${score}`;
  }
}
const res = createGame('Cricket');
console.log(res('score'));

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');
hockeyGame();
hockeyGame();
hockeyGame();
soccerGame();
console.log(hockeyGame('score'));
console.log(soccerGame('score'));
