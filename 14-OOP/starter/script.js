'use strict';

// const Person = function (first, birthYear) {
//   this.first = first;
//   this.birthYear = birthYear;
// };

// const jailan = new Person('jailan', 91);

// console.log(jailan);

// const arr = [2, 2, 2, 3, 4, 4, 4];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// answer

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.speed} km/h`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.brake();

///////////////////////////////////////////////////

// classes Es6

//expertion
// const PersonC = class {};

// decleration

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calAge() {
//     console.log(200 - this.birthYear);
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`not full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }

// const lala = new Person('lala sh', 90);
// console.log(lala.fullName);
// lala.calAge();
// console.log(lala);

// getter and setter :

// const Bank = {
//   name: 'Jil',
//   movements: [30, 48, 300, 90],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(Bank.latest);
// Bank.latest = 99;

// console.log(Bank.movements);
