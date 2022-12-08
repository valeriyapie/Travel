const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slider__item');
const carousel = document.querySelector('.destinations__slider');

let count = 0;
let width;

function init(){
  width = carousel.offsetWidth;
  console.log(width);
  carousel.style.width = width * slides.length + 'px';
  slides.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlide();
}

window.addEventListener('resize', init);
init();

const currentSlide = n => {
  for(dot of dots){
    dot.classList.remove('dot-active');
  } 
  dots[n].classList.add('dot-active');
}

btnRight.addEventListener('click', () =>  {
  if (count === slides.length -1){
    count = 0;
    currentSlide(count);
  } else {
    count++;
    currentSlide(count);
  }
  rollSlide();
});

btnLeft.addEventListener('click', () => {
  if (count === 0){
    count = slides.length -1;
    currentSlide(count);
    } else {
      count--;
      currentSlide(count);
    }
  rollSlide();
});

function rollSlide() {
  carousel.style.transform = 'translateX(-'+ count * width + 'px)';
}

