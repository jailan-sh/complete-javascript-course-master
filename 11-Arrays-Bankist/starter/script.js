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

// insertAdjacentHTML , for each
const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // outside
  movements.forEach((move, index) => {
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

    // display movements
    displayMovements(currentAccount.movements);

    //display summery
    calcDisplaySummary(currentAccount);
    //display balance
    calcPrintBalance(currentAccount);
  }
});

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
