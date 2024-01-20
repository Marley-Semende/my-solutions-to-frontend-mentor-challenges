const toggle = document.querySelector(".toggle-icon");
const body = document.querySelector("body");
const cardContainer = document.querySelector(".card-container");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const buttons = document.querySelectorAll(".btn");
const title = document.querySelector(".title");
const skills = document.querySelectorAll(".skills small");
const avatar = document.querySelector("img");
const toggleTxt = document.querySelectorAll(".toggle-text small");
const toggleSwitcher = document.styleSheets[0].cssRules[6];

let isClicked = false;

const switchColor = () => {
  isClicked = !isClicked;
  if (isClicked) {
    body.style.backgroundColor = "#d2d3db";
    body.style.fontFamily = "Lato";
    toggle.style.backgroundColor = "#d2d3db";
    toggle.style.border = "#212121 solid 2px";
    toggleSwitcher.style.backgroundColor = "#212121";
    cardContainer.style.backgroundColor = " #e4e5f1";
    avatar.src = "assets/images/unnamed.jpg";
    h1.style.color = "#212121";
    h1.style.fontWeight = 700;

    h2.style.color = "#1da1f2";
    title.style.color = "#212121";

    toggleTxt.forEach((text) => {
      text.style.color = "#212121";
    });
    skills.forEach((skill) => {
      skill.style.color = "#212121";
    });
    buttons.forEach((button) => {
      button.style.backgroundColor = "#212121";
      button.style.color = "#e4e5f1";
      button.style.fontFamily = "Lato";
    });
  } else {
    body.style.backgroundColor = "";
    body.style.fontFamily = "";
    toggle.style.backgroundColor = "";
    toggle.style.border = "";
    toggleSwitcher.style.backgroundColor = "#dddddd";
    cardContainer.style.backgroundColor = "";
    avatar.src = "assets/images/avatar.jpg";
    h1.style.color = "";
    h1.style.fontWeight = "";
    h2.style.color = "";
    title.style.color = "";

    toggleTxt.forEach((text) => {
      text.style.color = "";
    });
    skills.forEach((skill) => {
      skill.style.color = "";
    });
    buttons.forEach((button) => {
      button.style.backgroundColor = "";
      button.style.color = "";
      button.style.fontFamily = "";
    });
  }
};

toggle.addEventListener("click", switchColor);
