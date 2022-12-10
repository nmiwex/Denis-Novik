let burger = document.querySelector('.section-header__burger'),
    modal = document.querySelector('.section-header__modal'),
    modalClose = document.querySelector('.modal__close'),
    navBtn = document.querySelectorAll('.modal__nav-list__item');

burger.addEventListener('click', function() {
  modal.classList.add('section-header__modal_active');
})

modalClose.addEventListener('click', function() {
  modal.classList.remove('section-header__modal_active');
})

navBtn.forEach(function(el) {
  el.addEventListener('click', function() {
    modal.classList.remove('section-header__modal_active');
  })
})