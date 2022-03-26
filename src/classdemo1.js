/* eslint-disable semi */
function Car () {
  let milesDriven = 0;
  let speed = 0;

  this.accelerate = (velocity, distance) => {
    speed += velocity;
    milesDriven += distance;
  }
  this.getMilesDriven = () => milesDriven;
  this.getSpeed = () => speed;
}
const testCarModule = new Car();
console.log('Miles: ' + testCarModule.getMilesDriven());
console.log('Speed: ' + testCarModule.getSpeed());

testCarModule.speed = 100; // add a new field to the object
testCarModule.milesDriven = 10; // adds a new field to the object
console.log('Miles: ' + testCarModule.getMilesDriven());
console.log('Speed: ' + testCarModule.getSpeed());

testCarModule.accelerate(4, 10);
console.log('Miles: ' + testCarModule.getMilesDriven());
console.log('Speed: ' + testCarModule.getSpeed());
