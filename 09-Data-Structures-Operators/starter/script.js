'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDeliver: function ({ time = '23', sindex, eindex, address = 'cairo' }) {
    console.log(time, sindex, eindex, address);
  },
  pizza: function (ing1, ing2, ing3) {
    console.log(`the pizza ingredients ${ing1}, ${ing2} and ${ing3}`);
  },
};

// restaurant.orderDeliver({
//   time: '20:00',
//   sindex: 1,
//   eindex: 2,
//   address: 'damietta',
// });

// restaurant.orderDeliver({ sindex: 1, eindex: 2 });

// const nMenie = [...restaurant.mainMenu, 'shusi'];
// console.log(nMenie);

// const menu = [...nMenie, ...restaurant.mainMenu];
// console.log(menu);

// const ingredients = ['banna', 'pinaple', 'shrams'];

// restaurant.pizza(...ingredients);

// const newRestaurant = { ...restaurant };
// console.log(newRestaurant);

// const [a, b, ...re] = ingredients;
// console.log(a, b, re);

const collect = function (...numbers) {
  console.log(numbers);
};
collect(3, 5, 6, 7, 8, 9); // unknown arguments pass

const x = [3, 5, 6, 7, 8, 9];
collect(...x); // spread operator

restaurant.numGuests = 0; // edge case
const guests = restaurant.numGuests || 1;
console.log(guests); // 1 , 1
// restaurant.numGuests = false;
const guestsSolution = restaurant.numGuests ?? 1;
console.log(guestsSolution); // 0, false

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
