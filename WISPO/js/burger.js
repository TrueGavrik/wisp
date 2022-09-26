


const burger = document.querySelector('.mobil__burger')

burger.addEventListener('click', () => burger.classList.toggle('active'));

const burger1 = document.querySelector('.header__nav-menu ')

burger.addEventListener('click', () => burger1.classList.toggle('active'));

const burgerClose = document.querySelector('.cloce-burger')

burgerClose.addEventListener('click', () => burger1.classList.toggle('active'));

burgerClose.addEventListener('click', () => burger.classList.toggle('active'));