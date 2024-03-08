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
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerator() {
//     this.speed += 10;
//     console.log(`${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car1 = new Car('Ford', 120);
// console.log(car1);
// console.log(car1.speedUS);
// car1.brake();
// car1.accelerator();

// car1.speedUS = 50;
// console.log(car1);
///////////////////////////////////////////

// const Person = function (fullName, birthYear) {
//   this.fullName = fullName;
//   this.birthYear = birthYear;
// };
// // instence method method in prototype any created instance can use it
// Person.prototype.calAge = function () {
//   console.log(2034 - this.birthYear);
// };

// const Student = function (fullName, birthYear, course) {
//   Person.call(this, fullName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// // special prototype for our object after inheritance
// Student.prototype.interduce = function () {
//   console.log(`my name is ${this.fullName} and courses are ${this.course}`);
// };

// const mike = new Student('mike', 2000, 'cs');
// console.log(mike);
// mike.calAge();
// mike.interduce();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

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
// // inheritance
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBatter = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBatter(90);
// console.log(tesla);
// tesla.brake();

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

// inheritance

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBatter(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const car1 = new EVCl('Rivian', 120, 23);
car1.accelerate().chargeBatter(20).brake().brake().accelerate();
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1.speedUS);
