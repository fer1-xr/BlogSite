const hamburguer = document.querySelector('.hamburguer')
const view = document.querySelector('.view')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav')
function openMenu (){
    view.classList.remove('view')
    nav.classList.add('nav')
}

function closeMenu(){

    nav.classList.add('view')
}




hamburguer.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)