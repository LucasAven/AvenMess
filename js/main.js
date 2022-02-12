const nav = document.querySelector(".nav-links");
const btn = document.querySelector(".menu-btn");

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
  if (nav.classList.contains("hide-nav-menu")) {
    nav.classList.remove("hide-nav-menu");
    btn.classList.add("menu-btn-clicked");
  } else {
    nav.classList.add("hide-nav-menu");
    btn.classList.remove("menu-btn-clicked");
  }
}

function hideTopBarOnScrollDown(ev) {
  if (window.pageYOffset >= 100) {
    const bar = document.getElementById("top-bar");
    const nav = document.querySelector(".nav-bar");
    bar.classList.remove("fixed-top");
    nav.classList.add("fixed-top-0");
  } else {
    const bar = document.getElementById("top-bar");
    const nav = document.querySelector(".nav-bar");
    bar.classList.add("fixed-top");
    nav.classList.remove("fixed-top-0");
  }
}
window.onscroll = hideTopBarOnScrollDown;
