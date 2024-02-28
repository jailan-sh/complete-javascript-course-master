'use strict';

// const Personobj = function (first, birthYear) {
//   this.first = first;
//   this.birthYear = birthYear;
// };

// const jailan = new Personobj('jailan', 91);

// Personobj.hey = function () {
//   console.log(this);
//   console.log('hey');
// };

// Personobj.hey();
// // console.log(jailan);

// // const arr = [2, 2, 2, 3, 4, 4, 4];

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// // answer

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.speed} km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.speed} km/h`);
// // };

// // const car1 = new Car('BMW', 120);
// // const car2 = new Car('Mercedes', 95);

// // car1.accelerate();
// // car1.brake();

// // car2.accelerate();
// // car2.brake();

// ///////////////////////////////////////////////////

// // classes Es6

// //expertion
// // const PersonC = class {};

// // decleration

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // instence method method in prototype any created instance can use it
//   calAge() {
//     console.log(200 - this.birthYear);
//   }
//   //set property
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`not full name!`);
//   }
//   // return fullname property:
//   get fullName() {
//     return this._fullName;
//   }

//   // static method :
//   static hey() {
//     console.log(this);
//     console.log(`hey you`);
//   }
// }
// Person.hey();

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

//// object.create:

// const PersonProto = {
//   calAge() {
//     console.log(200 - this.birth);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'steve';
// steven.birth = 1991;
// steven.calAge();
// console.log(steven.__proto__ === PersonProto);

///////////////////////////////////////
// Coding Challenge #2
// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerator() {
    this.speed += 10;
    console.log(`${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new Car('Ford', 120);
console.log(car1);
console.log(car1.speedUS);
car1.brake();
car1.accelerator();

car1.speedUS = 50;
console.log(car1);
