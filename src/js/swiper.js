document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Intersection Observer для баннеров
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'bannerAppear 0.8s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll('.faq-banner').forEach(banner => {
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(30px)';
    banner.style.filter = 'blur(10px)';
    observer.observe(banner);
  });

  // Инициализация свайперов
  const swiperFeatures = new Swiper('.mySwiper3', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
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
        width: null,
      },
    },
  });

  const howToPlaySlider = new Swiper('.mySwiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false /*true,*/,
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
    loop: false /*true,*/,
    pagination: {
      el: '.mySwiper2 .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  // Инициализация аккордеона
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      // Закрываем все другие элементы
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.display = 'none';
        }
      });

      // Переключаем текущий элемент
      item.classList.toggle('active');
      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});

//
