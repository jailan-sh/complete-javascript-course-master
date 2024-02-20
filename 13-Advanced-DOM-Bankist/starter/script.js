'use strict';
/////////////////////////////////////////
// practice:

// selectors element:

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');

const sections = document.querySelectorAll('.section');
console.log(sections);

const bottuns = document.getElementsByTagName('button');
console.log(bottuns);

document.getElementById('section__1');
console.log(document.getElementsByClassName('btn'));

//creat and insert elements:
// .insertAdjacentHTML(after befor..., html part)

const message = document.createElement('div');
message.classList.add('cookie--message');
//message.textContent = 'we use cookies';
message.innerHTML =
  'we add cookies <button class="btn--close--cookie">got it</button>';
header.append(message);
//header.prepend(message);
//header.append(message.cloneNode(true));
//header.before(message);
//header.after(message);

//delete:

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
