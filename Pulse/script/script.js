$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slide/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slide/right.png" alt=""></button>',

    });
});

const blockMenu = document.querySelector(".catalog__menu")
const btn = document.querySelectorAll(".catalog__menu button")

blockMenu.addEventListener("click", (e) => {
    btn.forEach((el) => {
        el.classList.remove('btn__active')
    })
    
    if(e.target.tagName == "DIV"){
        e.target.parentNode.classList.add('btn__active');
    }
    else{
        e.target.classList.add('btn__active');
    }
    console.log('click');
    
    
    
})