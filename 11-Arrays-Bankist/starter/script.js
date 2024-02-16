'use strict';

/////////////////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const checkDogs = function (julia, kate) {
//   //const cop = julia.splice(1, julia.length - 3);
//   //const dogs = julia.slice(1, -2);
//   const dogs = julia.slice();
//   dogs.splice(0, 1);
//   dogs.splice(-2, 2);
//   console.log(dogs, julia);
//   const total = [...dogs, ...kate];
//   total.forEach((dog, index) => {
//     const kind = dog >= 3 ? 'an adult' : 'still a puppy 🐶';
//     console.log(`Dog number${index + 1} is ${kind}, and is ${dog} years old `);
//   });
// };

// checkDogs(julia, kate);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const DATA1 = [5, 2, 4, 1, 15, 8, 3];
// const DATA2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (arr1, arr2) {
//   const dogs = arr1.concat(arr2);
//   console.log(dogs);
//   const humanAge = dogs.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAge);
//   const adult = humanAge.filter(item => item > 18);
//   console.log(adult);
//   const average = adult.reduce((acc, age, i, arr) => acc + age / arr.length, 0); // arr in reduce 😀
//   return average;
// };
// const av = calcAverageHumanAge(DATA1, DATA2);
// console.log(av);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const DATA1 = [5, 2, 4, 1, 15, 8, 3];
// const DATA2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(item => item > 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// const av = calcAverageHumanAge(DATA1);
// console.log(av);

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1-
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

//2
const SaraDog = dogs.find(dog => dog.owners.includes('Sarah'));
//return target;
console.log(
  `Sara's dog is eating too ${
    SaraDog.curFood > SaraDog.recFood ? 'much' : 'little'
  }`
);

// 3
const ownersEatTooLittle = [];
const ownersEatTooMuch = [];
dogs.forEach(dog =>
  dog.curFood > dog.recFood
    ? ownersEatTooMuch.push(...dog.owners)
    : ownersEatTooLittle.push(...dog.owners)
);
console.log(ownersEatTooLittle, ownersEatTooMuch);

//4
console.log(
  `${ownersEatTooMuch.join(
    ' and '
  )}'s dogs eat too much! and ${ownersEatTooLittle.join(
    ' and '
  )}'s dogs eat too little!`
);

//5
console.log(dogs.some(dog => dog.curFood === dog.recFood));
//6
console.log(dogs.some(check));
const check = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
// 7
const okeyAmount = dogs.filter(check);
console.log(okeyAmount);

//8
const sortDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortDogs);

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// update
const upDateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);

  //display summery
  calcDisplaySummary(acc);
  //display balance
  calcPrintBalance(acc);
};

// insertAdjacentHTML , for each
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // outside
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((move, index) => {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${move}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUserName = function (accs) {
  accs.forEach(acount => {
    acount.userName = acount.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(item => item[0])
      .join('');
  });
};

createUserName(accounts);

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, item) => acc + item, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}💲`;
  const outGoingMoney = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + Math.abs(mov), 0);
  labelSumOut.textContent = `${outGoingMoney}€`;

  const inerest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, inter) => acc + inter, 0);
  labelSumInterest.textContent = `${inerest}€`;
};

//log in

let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display welcame message
    labelWelcome.textContent = `welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
  upDateUI(currentAccount);
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciveraccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciveraccount?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    reciveraccount.movements.push(amount);
  }
  upDateUI(currentAccount);
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    upDateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
let state = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !state);
  state = !state;
});
//////////////////////////////////
/////////////////////////////////
// all movments
// const allMovements = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(allMovements);

// const allmov = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(allmov);
////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// const movesusd = movements.map(move => move * 1.1);
// console.log(movesusd);

// const createUserName = function (accs) {
//   accs.forEach(acount => {
//     acount.userName = acount.owner
//       .toLocaleLowerCase()
//       .split(' ')
//       .map(item => item[0])
//       .join('');
//   });
// };
// // console.log(createUserName(accounts)); // not return anything to make username 🤔
// createUserName(accounts);
// console.log(accounts);
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log(accounts);

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// // console.log(max);

// const totalUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * 1.1;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalUSD);

// const acount = function (accounts) {
//   for (const acc of accounts) {
//     if (acc.owner === 'Jessica Davis') return acc;
//   }
// };
// console.log(acount(accounts));

// const bankdeposit = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, dep) => acc + dep, 0);
// console.log(bankdeposit);

// const deposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(deposit1000);
// const deposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
// console.log(deposit1000);

// const { deposite, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, curr) => {
//       //curr > 0 ? (sum.deposite += curr) : (sum.withdrawal += curr);
//       sum[curr > 0 ? 'deposite' : 'withdrawal'] += curr;
//       return sum;
//     },
//     { deposite: 0, withdrawal: 0 }
//   );
// console.log(deposite, withdrawal);

// 4 title case

// const convertTitleCase = function (title) {
//   const exceptions = ['but', 'and', 'a', 'an', 'the'];
//   const captilized = str => str[0].toUpperCase() + str.slice(1);
//   const result = title
//     .toLocaleLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : captilized(word)))
//     .join(' ');
//   return captilized(result);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
