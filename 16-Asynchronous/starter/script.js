'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////////////////////////

// helper function

const renderCountery = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
///////////
// get countery and neighbour

// const getCountryAndNeighbour = function (country) {
//   // first AJAX call

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountery(data);
//     // render countery
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     // AJAX2 call to get neighbour:
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       // render neighbour
//       renderCountery(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('malaysia');
// getCountryAndNeighbour('swiss');

////////////////////////////////////////////////////////////////////////////////////

// promises:

const getCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok) throw new Error(`not Found , ${response.status}`);
      return response.json();
    })
    .then(data => {
      renderCountery(data[0]);

      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // countery 2

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      response.json();
    })
    .then(data => renderCountery(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`this ${err.message} try Again`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountry('pfererewr');
});
