

const burgerButton = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__nav');
const burgerButtonClose = document.querySelector('.close');
const blackoutWrapper = document.querySelector('.blackout');
const menuLinks = document.querySelectorAll('.burger__nav-link');


burgerButton.addEventListener('click', function(event){
  burgerMenu.classList.add('is-open');
  blackoutWrapper.classList.add('blackout-mobile');
  document.body.classList.add('lock');
})

burgerButtonClose.addEventListener('click', function(event){
  burgerMenu.classList.remove('is-open');
  blackoutWrapper.classList.remove('blackout-mobile');
  document.body.classList.remove('lock');
})

blackoutWrapper.addEventListener('click', function(event){
  burgerMenu.classList.remove('is-open');
  blackoutWrapper.classList.remove('blackout-mobile');
  document.body.classList.remove('lock');
  
})

if(burgerMenu){
  for (let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', function(event){
      burgerMenu.classList.remove('is-open');
      blackoutWrapper.classList.remove('blackout-mobile');
      document.body.classList.remove('lock');
    })
  }
}


