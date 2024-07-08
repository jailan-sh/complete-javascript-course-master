'use strict';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  const limit = getLimit(user);

  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

const check = function () {
  for (let entery of budget) {
    if (entery.value < -getLimit(entery.user)) entery.flag = 'limit';
  }
};
check();

const bigExpenses = function (bigLimit) {
  let output = '';
  for (let el of budget)
    output += el.value <= -bigLimit ? `${el.description.slice(-2)} / ` : '';
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
bigExpenses(1000);

console.log(budget);
