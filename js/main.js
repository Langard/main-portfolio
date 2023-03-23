//код из интернета для мобильных устройств
const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|ipad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  ani: function () {
      return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
      );
  }
};



//меню бургер
const iconMenu = document.querySelector('.navbar__burger');

const menuBody = document.querySelector('.navigation');
if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


//Прокрутка при клике

//Создаем массив ссылок для вызова

const menuLinks = document.querySelectorAll('.nav-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.navbar__color').offsetHeight;


            //Здесь делаем закрытие при клике на ссылку

if (iconMenu.classList.contains('_active')) {
  document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
}

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


"use strict";

const ajaxSend = async (formData) => {  //создаем функцию отправки формы
  const fetchResp = await fetch("telegram.php", {  //указываем обработчик формы - telegram.php
    method: "POST",  //метод, которым мы отправляем форму
    body: formData,  //что будет внутри формы - содержимое input
  });
  if (!fetchResp.ok) {  //если ошибка, то....
    throw new Error('Ошибка по адресу ${url}, статус ошибки ${fetchREsp.status}');  //выводим статус ошибки и текст
  }
  return await fetchResp.text(); //если все прошло хорошо, возвращаем ответ с сервера  
};

const forms = document.querySelectorAll("form");  //находим все теги form
forms.forEach((form) => {  //для каждой формы...
  form.addEventListener("submit", function (e) {  //отслеживаем событие отправки
    e.preventDefault();  //отменить стандартную отправку формы
    
    const formData = new FormData(this);  //собираем все данные из формы
    console.log(formData);
    ajaxSend(formData)  //передаем данные из формы в обработчик
      .then((response) => {  //если все успешно, то...
        this.innerHTML = "Спасибо, <br> заявку получили"; //окно благодарности
        form.reset();  //очищаем поля формы
      })
      .catch((err) => console.error(err));   //если ошибка, выводим в консоль
  });
});

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mouseWheel: {
      invert: false,
  },
  // autoHeight: true
  pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
  }
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = 
  document.documentElement.scrollHeight - 
  document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  }
  else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#5B61D9 ${scrollValue}%, 
    #d7d7d7 ${scrollValue}%)`;
};


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;