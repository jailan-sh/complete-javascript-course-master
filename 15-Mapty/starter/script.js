'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// geolocation API

let map, mapevent;
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(function (position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    //console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    map = L.map('map').setView(coords, 13);
    // console.log(map);
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on(
      'click',
      function (event) {
        mapevent = event;
        // display form

        form.classList.remove('hidden');
        inputDistance.focus();
      },
      function () {
        alert(
          'can not get your current location, Geolocation is not supported by this browser!....'
        );
      }
    );

    // display form

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      inputDistance.value =
        inputCadence.value =
        inputDuration.value =
        inputElevation.value =
          '';
      const { lat, lng } = mapevent.latlng;

      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 250,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
          })
        )
        .setPopupContent('workOut')
        .openPopup();
    });
  });

// toggle of input type

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
