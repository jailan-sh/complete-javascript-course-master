'use strict';

// geolocation API

// let map, mapevent;
// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(function (position) {
//     const { latitude, longitude } = position.coords;
//     const coords = [latitude, longitude];

//     //console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//     map = L.map('map').setView(coords, 13);
//     // console.log(map);
//     L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     map.on(
//       'click',
//       function (event) {
//         mapevent = event;
//         // display form

//         form.classList.remove('hidden');
//         inputDistance.focus();
//       },
//       function () {
//         alert(
//           'can not get your current location, Geolocation is not supported by this browser!....'
//         );
//       }
//     );

//     // display form

//     form.addEventListener('submit', function (e) {
//       e.preventDefault();
//       inputDistance.value =
//         inputCadence.value =
//         inputDuration.value =
//         inputElevation.value =
//           '';
//       const { lat, lng } = mapevent.latlng;

//       L.marker([lat, lng])
//         .addTo(map)
//         .bindPopup(
//           L.popup({
//             maxWidth: 250,
//             minWidth: 250,
//             autoClose: false,
//             closeOnClick: false,
//             className: 'running-popup',
//           })
//         )
//         .setPopupContent('workOut')
//         .openPopup();
//     });
//   });

// // toggle of input type

// inputType.addEventListener('change', function () {
//   inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//   inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// workout archeticture:
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;
    this.pace();
    this._setDescription();
  }

  pace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
    this.speed();
    this._setDescription();
  }
  speed() {
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

//////////////////////////////////////////////////////////////////
// archeticture :

// class app

class App {
  #map;
  #mapevent;
  workouts = [];
  mapZoomLevel = 13;

  constructor() {
    this._getPosition();

    //eventhendelers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    //get data storage
    this._getlocalstorage();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(
            'can not get your current location, Geolocation is not supported by this browser!....'
          );
        }
      );
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.mapZoomLevel);
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.workouts.forEach(work => {
      this.renderWorkoutMarker(work);
    });
  }

  _showForm(e) {
    this.#mapevent = e;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //prettier-ignore
    inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    //helper functions:
    const validationData = (...parms) =>
      parms.every(parm => Number.isFinite(parm));

    const allPositive = (...params) => params.every(parm => parm > 0);
    const { lat, lng } = this.#mapevent.latlng;
    //event of form:
    e.preventDefault();

    //get the data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;
    //create objects:
    //running
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validationData(distance, duration, cadence) ||
        !allPositive(duration, distance, cadence)
      )
        return alert('Input must be a number and positive!');
      workout = new Running(distance, duration, [lat, lng], cadence);
    }

    // cycling
    if (type === 'cycling') {
      const elevate = +inputElevation.value;
      if (
        !validationData(distance, duration, elevate) ||
        !allPositive(duration, distance)
      )
        return alert('Input must be a number and positive!');
      workout = new Cycling(distance, duration, [lat, lng], elevate);
    }

    // add to workouts to array
    this.workouts.push(workout);

    // render on the map as marker
    this.renderWorkoutMarker(workout);

    //render workout on list
    this.renderWorkoutForm(workout);
    //hide form
    this._hideForm();

    // storage
    this._storageWorkout();
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  renderWorkoutForm(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;
    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);
    this.#map.setView(workout.coords, this.mapZoomLevel, {
      Animate: true,
      pan: {
        duration: 1,
      },
    });
    // using puplic interface (clicks):

    // workout.click();
  }

  _storageWorkout() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
  _getlocalstorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);

    if (!data) return;

    this.workouts = data;

    this.workouts.forEach(work => {
      this.renderWorkoutForm(work);
    });
  }
  deleteStorage() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
