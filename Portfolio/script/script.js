const gamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu__block'),
    close = document.querySelector('.menu__close');

gamburger.addEventListener('click', () =>{
    menu.classList.add('active')
});
close.addEventListener('click',() =>{
    menu.classList.remove('active')
});

const percent = document.querySelectorAll('.skills__graph-percent'),
    line = document.querySelectorAll('.skills__graph-line_orange');

percent.forEach((el, i) =>{
    line[i].style.width = el.innerHTML;
});