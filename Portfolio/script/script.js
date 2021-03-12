const gamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu__block'),
    close = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');

gamburger.addEventListener('click', () =>{
    menu.classList.add('active')
    overlay.classList.add('active')
    document.body.style.overflow = 'hidden';
});
close.addEventListener('click',() =>{
    menu.classList.remove('active')
    overlay.classList.remove('active')
    document.body.style.overflow = 'visible';
});

const percent = document.querySelectorAll('.skills__graph-percent'),
    line = document.querySelectorAll('.skills__graph-line_orange');

percent.forEach((el, i) =>{
    line[i].style.width = el.innerHTML;
});