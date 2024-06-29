"use strict";

(() => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");

  if (!(menu instanceof HTMLElement) || !(burger instanceof HTMLButtonElement)) {
    return;
  }

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("lock");
  });
})();

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
