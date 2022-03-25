const top_bar = document.getElementById("top-bar");
const nav_bar = document.querySelector(".nav-bar");
const nav_links = document.querySelector(".nav-links");
const btn = document.querySelector(".menu-btn");
const arrow = document.querySelector(".top-btn");

function applyScrollRevealEffectOpposites(claseLeft, claseRight) {
  ScrollReveal().reveal(claseLeft, {
    duration: 900,
    delay: 400,
    easing: "ease-in",
    distance: "100px",
    mobile: false,
    origin: "right",
  });
  ScrollReveal().reveal(claseRight, { origin: "left" });
}

function calculateVisibleSlides() {
  let viewportWidth = window.innerWidth;
  let visibleSlides = 1;

  if (viewportWidth >= 1200) {
    visibleSlides = 3;
  } else {
    if (viewportWidth >= 992) {
      visibleSlides = 2;
    }
  }
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: visibleSlides,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

setTimeout(function () {
  let w_btn = document.querySelector(".whatsapp-btn");
  w_btn.classList.remove("hide-wsp-btn");
}, 3000);

function navBarToggle() {
  if (nav_links.classList.contains("hide-nav-menu")) {
    nav_links.classList.remove("hide-nav-menu");
    btn.classList.add("menu-btn-clicked");
  } else {
    nav_links.classList.add("hide-nav-menu");
    btn.classList.remove("menu-btn-clicked");
  }
}

function hideTopBarOnScrollDown(ev) {
  if (window.pageYOffset >= 100) {
    top_bar.classList.remove("fixed-top");
    nav_bar.classList.add("fixed-top-0");
  } else {
    top_bar.classList.add("fixed-top");
    nav_bar.classList.remove("fixed-top-0");
  }
  if (window.pageYOffset >= 800) {
    arrow.classList.add("arrow--scrolled");
  } else {
    arrow.classList.remove("arrow--scrolled");
  }
}
window.onscroll = hideTopBarOnScrollDown;


