const menuBtn = document.querySelector('.menu__open');
const menu = document.querySelector('.menu__inner');
const close = document.querySelector('.menu__close');

menuBtn.addEventListener('click', function() {
  menu.classList.add('menu__list--active');
  close.classList.add('menu__close--active');
})

close.addEventListener('click', function() {
  menu.classList.remove('menu__list--active');
  close.classList.remove('menu__close--active');
})

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

if (document.documentElement.clientWidth < 900) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
  });
} else {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
  });
};

if (document.documentElement.clientWidth < 600) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
  });
} else {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
  });
};




let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
  })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
  }
});

var popupSwiper = new popupSwiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});
