const popUp = document.querySelector('.popup');
const popUpLinks = document.querySelectorAll('.popup-link');
const popUpTitle = document.querySelector('.popup__title');
const regBtn = document.querySelector('.popup__login__register-link');
const accText = document.querySelector('popup__login__register-text');
const signInHidden = document.querySelectorAll('.sign-in__hidden');
const signInBtn = document.querySelector('.popup__login__form__btn');
const signInText = document.querySelector('.popup__login__register-text');

const email = document.getElementById('email');
const password = document.getElementById('password');

if(popUpLinks){
  for (let i = 0; i < popUpLinks.length; i++){
    const popUpLink = popUpLinks[i];
    popUpLink.addEventListener('click', (e) => {
      popUp.classList.add('popup-active');
      document.body.classList.add('lock');
    })
  }
}

//закрытие по клику вне pop-up
popUp.addEventListener('click', (e) => {
  if(!e.target.closest('.popup__container')){
  popUp.classList.remove('popup-active');
  document.body.classList.remove('lock');
  }
})

//смена pop-up
function signUp(){
  signInHidden.forEach(el => {
    el.style.display = (el.style.display == 'none') ? '' : 'none';
  })
  if (regBtn.innerHTML === 'Register'){
    popUpTitle.textContent = 'Create account';
    regBtn.textContent = 'Log in';
    signInBtn.textContent = 'Sign Up';
    signInText.textContent = 'Already have an account?';
  } else {
    popUpTitle.textContent = 'Log in to your account';
    regBtn.textContent = 'Register';
    signInBtn.textContent = 'Sign In';
    signInText.textContent = 'Don’t have an account?';
  }
} 
regBtn.addEventListener('click', signUp);

//alert
signInBtn.onclick = (e) => {
  if (regBtn.innerHTML === "Register"){
      alert(`You autorisation. \nEmail:${email.value} \npassword:${password.value}`);
  } else{
      alert(`You registrated. \nEmail:${email.value} \npassword:${password.value}`);
  }
  e.preventDefault();
}
