// import './shoppingCart.js';
// console.log('importing module');

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quentities: 5 },
    {
      product: 'banana',
      quentities: 7,
    },
  ],
  user: {
    loggedIn: true,
  },
};

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

const stateClone = Object.assign({}, state);
console.log(stateClone);

state.user.loggedIn = false;

if (module.hot) {
  module.hot.accept();
}
