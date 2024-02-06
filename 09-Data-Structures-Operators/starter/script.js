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

// const collect = function (...numbers) {
//   console.log(numbers);
// };
// collect(3, 5, 6, 7, 8, 9); // unknown arguments pass

// const x = [3, 5, 6, 7, 8, 9];
// collect(...x); // spread operator

// restaurant.numGuests = 0; // edge case
// const guests = restaurant.numGuests || 1;
// console.log(guests); // 1 , 1
// // restaurant.numGuests = false;
// const guestsSolution = restaurant.numGuests ?? 1;
// console.log(guestsSolution); // 0, false

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// coding:

// //1
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'coutinho', 'perisic'];
// console.log(players1Final);

// //5
// /* const {
//   odds: { team1, x: draw, team2 },
// } = game;
// */
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //6
// const printGoals = function (...scored) {
//   console.log(`${scored.length} goals`);
//   console.log(...scored);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
// //7
// const team1win = team1 < team2 && 'team1 is more likely to win';
// const team2win = team2 < team1 && 'team2 win is more likely to win';
// console.log(team2win || team1win);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const [i, item] of menu.entries()) {
//   console.log(i + 1 + ': ' + item);
// }
// console.log(...menu.entries());
// for (const item of menu) console.log(item);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
const result = Object.values(game.odds);
let ave = 0;
for (const item of result) {
  ave += item;
}
console.log(ave / result.length);

//3
for (const [k, v] of Object.entries(game.odds)) {
  const team = k === 'x' ? 'draw' : `victory ${game[k]}`;
  console.log(`odd of ${team} ${v}`);
  //console.log(`Odd of ${game[k] ?? 'draw'} : ${v}`);
}
//bonus  proparty : game.scored
const scorers = {};
for (const goal of game.scored) {
  scorers[goal] ? (scorers[goal] += 1) : (scorers[goal] = 1);
}
console.log(scorers);
