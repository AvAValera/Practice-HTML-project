const gamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu__block')
const close = document.querySelector('.menu__close')

gamburger.addEventListener('click', () =>{
    menu.classList.add('active')
});
close.addEventListener('click',() =>{
    menu.classList.remove('active')
});