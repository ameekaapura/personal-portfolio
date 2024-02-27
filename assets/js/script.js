/*PRELOADER*/
var fade_state = true;

function fade() {
  let preloading = document.getElementById("preloading-screen");

  if (fade_state == true) {
    preloading.style.animation = "fade-out 2s forwards";
    setTimeout(function () {
      preloading.style.display = "none";
    }, 1000);
    fade_state = false;
  } else {
    preloading.style.display = "block";
    preloading.style.animation = "fade-in 2s forwards";
    fade_state = true;
  }
}

/*BG VIDEO FUNCTION*/
var video = document.getElementById("video-1");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

/*TOP BUTTON*/
let mybutton = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*NAVBAR*/
const nav = document.querySelector("nav");
const navHeight = 86;

let lastScrollY = 0;

const delta = 10;

function scrolled() {
  let sy = window.scrollY;
  
  if (Math.abs(lastScrollY - sy) > delta) {
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("nav-up");
    }
    else if (sy < lastScrollY) {
      nav.classList.remove("nav-up");
    }
    lastScrollY = sy
  }
}

let didScroll = false;
window.addEventListener("scroll", function (e) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    scrolled();
    didScroll = false;
  }
}, 250)

/*CAROUSEL*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
