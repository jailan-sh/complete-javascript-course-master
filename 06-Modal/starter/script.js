'use strict';

// spaacify selected classes

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openEvent = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeEvent = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openEvent);
}

btnCloseModal.addEventListener('click', closeEvent);
overlay.addEventListener('click', closeEvent);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') closeEvent();
});
