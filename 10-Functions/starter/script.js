'use strict';
`let's start 🙆`;
// functions

// high ordered function
// const oneWord = function (str) {
//   return str.replace(/ /g, '');
// };

// const upperFirstWord = str => {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fun) {
//   console.log(str);
//   console.log(`${fun(str)}`);
//   console.log(`${fun}`); //object
// };

// transformer('do your effort and god will help u', upperFirstWord);
// transformer('do your effort and god will help u', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// // function as greet retun function
// const greeter = greet('السلام عليكم و رحمة الله و بركاته ');
// greeter('Jailan');
// // 😲
// greet('hello')('jonas');

// //arrow
// const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// greet2('immpossible')('lala');

// ///////////////////////////////////////
// // The call and apply Methods
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// ///////////////////////////////////////
// // The bind Method
// // book.call(eurowings, 23, 'Sarah Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addvat2 = function (rate) {
//   return function (value) {
//     console.log(value * rate + value);
//   };
// };

// const res1 = addvat2(0.23);
// res1(100);

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

// answer:

//1:

poll.registerNewAnswer = function () {
  const replay = Number(
    prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    )
  );
  //typeof replay === 'number' && answer < this.answers.length && this.answers[replay]++;
  if (typeof replay === 'number' && replay < this.answers.length) {
    this.answers[replay] += 1;
  } else {
    console.log(`not valid`);
  }
  this.displayResults();
  this.displayResults(this.answers);
};

//2:
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//3:
poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  }
};

//bouns
const DATA1 = [5, 2, 3];
const DATA2 = [1, 5, 3, 9, 6, 1];
let display = poll.displayResults.call({ answers: [2, 5, 3] }, 'string');
display = poll.displayResults.call({ answers: DATA2 });
// direct use
poll.displayResults.call({ answers: DATA1 });
