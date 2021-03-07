$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slide/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slide/right.png" alt=""></button>',

    });
});

const blockMenu = document.querySelector(".catalog__menu");
const btn = document.querySelectorAll(".catalog__menu button");
const block = document.querySelectorAll('.catalog__block');

btn.forEach((el, i) => {
    el.addEventListener("click", () => {
        hideBlock();
        hideActiveBtn();
        block[i].classList.remove("hidden-catalog-block")
        btn[i].classList.add('btn__active')
    })
})
function hideBlock(){
    block.forEach((el) => {
        el.classList.add('hidden-catalog-block')
    })
}
function hideActiveBtn(){
    btn.forEach((el) => {
        el.classList.remove('btn__active')
    })
}


const btnMore = document.querySelectorAll(".content-item__more");
const btnBack = document.querySelectorAll(".content-list__back");

btnMore.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.path[2].classList.add('active_more')
        
    })
})
btnBack.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.path[2].classList.remove('active_more')
    })
})

const btnConsultation = document.querySelectorAll('[data-modal="consultation"]');
const modalBackground = document.querySelector(".modal__background")
const modalConsultation = document.querySelector("#form")
const modalOrder = document.querySelector("#order")
const btnOrder = document.querySelectorAll("[data-modal='order']")

btnConsultation.forEach((el) => {
    el.addEventListener("click", () => {
        modalBackground.style.display = "block";
        modalConsultation.style.display = "block";
        setTimeout(() =>{
            modalConsultation.style.opacity = 1;
        },10)
    })
})

btnOrder.forEach((el, i) => {
    el.addEventListener("click", (e) => {
        const title = document.querySelectorAll('.content-item__title')
        const modalSubtitle = document.querySelector(".modal__sub")
        modalBackground.style.display = "block";
        modalOrder.style.display = "block";
        modalSubtitle.textContent = title[i].textContent
        setTimeout(() => {
            modalOrder.style.opacity = 1;
        },10)
    })
})

document.querySelectorAll('.modal__close').forEach((el) => {
    el.addEventListener("click", () => {
        setTimeout(() =>{
            modalBackground.style.display = "none";
            modalConsultation.style.display = "none";
            modalOrder.style.display = "none";
        },500)
        modalConsultation.style.opacity = 0;
        modalOrder.style.opacity = 0;;
    })
})

