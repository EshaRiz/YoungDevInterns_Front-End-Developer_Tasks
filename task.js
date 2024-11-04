burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
right = document.querySelector('.right');
nav = document.querySelector('.nav');

burger.addEventListener('click', ()=>{
    right.classList.toggle('visibility')
    nav.classList.toggle('visibility')
    navbar.classList.toggle('nav-height') 
}) 