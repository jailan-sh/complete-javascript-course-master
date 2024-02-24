'use strict';

///////////////////////////////////////
// Modal window
const nav = document.querySelector('.nav');
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

// scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////
// delegation page navigation

// document.querySelectorAll('.nav__link').forEach(function (ele) {
//   ele.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1- add event listener to common parent element

// 2- detemine what ele originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  //matching startegy
  if (e.target.classList.contains('nav__link')) {
    // console.log('link');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tab component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainers = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainers.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(cont =>
    cont.classList.remove('operations__content--active')
  );

  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////fade animations:
//code refractory:
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const target = e.target;
    const siblings = target.closest('.nav').querySelectorAll('.nav__link');
    const logo = target.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== target) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

/// addeventlistener   function not value : think of bind as it return function

nav.addEventListener('mouseout', handleHover.bind(1));

/////sticky navigation

// const bar = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY > bar.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//// intersection observer API:

////////////////////////////////////////////////////
// mouse enter event

// const h1 = document.querySelector('h1');
// const alertH = function (e) {
//   alert('here we are !:)');
//   h1.removeEventListener('mouseenter', alertH);
// };
// h1.addEventListener('mouseenter', alertH);

// properity

// h1.onmouseenter = function (e) {
//   alert('h !:)');}

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

/////////////////////////////////////////
// practice:

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//style

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//////////////

//dom traversing

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); //direct child
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// ///////// parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('header').style.backgroundImage = 'var( --gradient-secondary)';

// //siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// //all siblings :
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (e) {
//   if (e !== h1) e.style.transform = 'scale(0.5)';
// });
