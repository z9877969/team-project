document.addEventListener('DOMContentLoaded', function () {
  const howToPlaySlider = new Swiper('.mySwiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.mySwiper1 .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.howtoplay-next',
      prevEl: '.howtoplay-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  });

  const gallerySlider = new Swiper('.mySwiper2', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.mySwiper2 .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      // Закрываем все другие элементы
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.accordion-content');
          otherContent.style.display = 'none';
        }
      });

      // Переключаем текущий элемент
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }

      // Поворачиваем стрелку
      const arrow = header.querySelector('.chevron');
      if (arrow) {
        arrow.style.transform = item.classList.contains('active')
          ? 'rotate(180deg)'
          : 'rotate(0deg)';
      }
    });
  });

  // Добавляем новый слайдер Features
  const featuresSlider = new Swiper('.mySwiper3', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    pagination: {
      el: '.mySwiper3 .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.features-next',
      prevEl: '.features-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  });
});


export default swiper.js