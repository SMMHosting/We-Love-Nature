'use strict';

const images = document.querySelectorAll('.img');

images.forEach((pic) => {
  pic.addEventListener('click', () => {
    removeClass();
    pic.classList.add('active');
  });
});

const removeClass = () => {
  images.forEach((pic) => {
    pic.classList.remove('active');
  });
};
