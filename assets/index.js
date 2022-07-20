'use strict';

const images = document.querySelectorAll('.img');

images.forEach((image) => {
  image.addEventListener('click', () => {
    removeClass();
    image.classList.add('active');
  });
});

const removeClass = () => {
  images.forEach((image) => {
    image.classList.remove('active');
  });
};
