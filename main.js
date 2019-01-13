const burger = document.querySelector("i.fa-bars");
const times = document.querySelector("i.fa-times");
const nav = document.querySelector('nav');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    times.classList.toggle('active');
    nav.classList.toggle('active');
})