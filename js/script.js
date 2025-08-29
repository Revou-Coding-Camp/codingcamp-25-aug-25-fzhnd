// =======================
// Prompt user name
// =======================
document.addEventListener('DOMContentLoaded', function () {
  let userName = '';
  while (!userName || userName.trim() === '') {
    userName = prompt("Enter your name to continue:");
  }
  document.getElementById('user-greeting').textContent = userName;
  document.getElementById('main-content').classList.remove('hidden');
});

// =======================
// Toggle menu (hamburger)
// =======================
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menuBtn.textContent = menu.classList.contains('hidden') ? '☰' : '✕';
});

// =======================
// Carousel
// =======================
const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const cards = document.querySelectorAll('#carousel > div');
const cardWidth = 320 + 24; // ukuran card + gap antar card
let index = 1;

const firstClone1 = cards[0].cloneNode(true);
const firstClone2 = cards[1].cloneNode(true);
const lastClone1 = cards[cards.length - 1].cloneNode(true);
const lastClone2 = cards[cards.length - 2].cloneNode(true);

carousel.appendChild(firstClone1);
carousel.appendChild(firstClone2);
carousel.insertBefore(lastClone2, cards[0]);
carousel.insertBefore(lastClone1, cards[0]);

const totalCards = document.querySelectorAll('#carousel > div').length;
let position = -(cardWidth * 2);
carousel.style.transform = `translateX(${position}px)`;

carousel.addEventListener('transitionend', () => {
  if (index >= cards.length + 1) {
    carousel.style.transition = 'none';
    index = 1;
    position = -(cardWidth * 2);
    carousel.style.transform = `translateX(${position}px)`;
  }
  if (index <= 0) {
    carousel.style.transition = 'none';
    index = cards.length;
    position = -(cardWidth * (cards.length));
    carousel.style.transform = `translateX(${position}px)`;
  }
});

nextBtn.addEventListener('click', () => {
  index++;
  position -= cardWidth;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener('click', () => {
  index--;
  position += cardWidth;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${position}px)`;
});