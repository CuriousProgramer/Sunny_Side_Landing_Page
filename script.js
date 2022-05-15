const mobileNavBtnContainer = document.querySelector('.nav__btn__container');
const mobileNav = document.querySelector('.mobile__nav');
const mobileNavBtn = document.querySelector('.mobile__nav__btn');



mobileNavBtnContainer.addEventListener('click',()=>{
  
  if(mobileNavBtnContainer.style.backgroundColor == 'transparent'){
    mobileNavBtnContainer.style.backgroundColor = 'black';
  }
  mobileNav.classList.toggle('active');
  

});



