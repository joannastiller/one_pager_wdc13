const burger = document.querySelector("i.fa-bars");
const times = document.querySelector("i.fa-times");
const nav = document.querySelector('section.top nav');

burger.addEventListener('click', function () {
    burger.classList.remove('active');
    times.classList.add('active');
    nav.classList.add('active');
})

times.addEventListener('click', function () {
    times.classList.remove('active');
    burger.classList.add('active');
    nav.classList.remove('active');
})

$('nav ul li').on('click', function () {
    $('body, html').animate({
        scrollTop: $("#" + $(this).attr('class')).offset().top
    }, 1000)

    $('i.fa-times').removeClass('active');
    $('i.fa-bars').addClass('active');
    $('nav').removeClass('active');
})