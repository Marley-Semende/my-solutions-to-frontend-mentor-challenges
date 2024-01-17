"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".nav-bar");
const lineOne = document.querySelector(".hamburger-1");
const lineTwo = document.querySelector(".hamburger-2");
const lineThree = document.querySelector(".hamburger-3");
let isMenuOpen = false;

hamburgerMenu.addEventListener("click", (e) => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    lineOne.style.transform = "rotate(-45deg) translate(-5px, 6px)";
    lineTwo.style.opacity = 0;
    lineThree.style.transform = "rotate(45deg) translate(-5px, -6px)";
    navBar.classList.remove("hidden");
  } else {
    lineOne.style.transform = "";
    lineTwo.style.opacity = 1;
    lineThree.style.transform = "";
    navBar.classList.add("hidden");
  }
});
