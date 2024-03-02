// get the elements
const hBtn = document.querySelector('.h-btn');
const header = document.querySelector('header');

// when you click h-btn
hBtn.addEventListener('click', () => {
    header.classList.toggle('active');
});