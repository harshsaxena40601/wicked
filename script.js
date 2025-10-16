document.addEventListener('DOMContentLoaded', () => {
  // Custom cursor
  const cursor = document.createElement('div');
  cursor.classList.add('cursor-hover');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 40 + 'px';
    cursor.style.top = e.clientY - 40 + 'px';
  });

  // Hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });

  // Mobile Menu functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          navLinks.classList.remove('active');
      }
  });

  // Updated Swiper configuration
  const swiperConfig = {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          640: {
              slidesPerView: 2,
          },
          1024: {
              slidesPerView: 3,
          }
      },
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      touchRatio: 1,
      grabCursor: true,
      touchStartPreventDefault: false,
      touchMoveStopPropagation: true,
      touchEventsTarget: 'wrapper',
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
  }

  const categoriesSwiper = new Swiper('.categories-swiper', swiperConfig);
  const newsSwiper = new Swiper('.news-swiper', swiperConfig);
});
