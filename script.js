"use strict";

"use strict";
const formInput = document.querySelectorAll("input");
const errorElement = document.querySelectorAll("small");
const labelElement = document.querySelectorAll("label");
const inputElement = document.querySelectorAll("input");
const ageContainer = document.querySelectorAll(".dash");
const arrowButton = document.querySelector(".arrow-button");
const birthdayElement = document.querySelector(".happy-birthday p");
const countingNumbers = [
  document.querySelector(".main-text-container h1 span"),
  document.querySelector(".main-text-container h2:nth-child(2) span"),
  document.querySelector(".main-text-container h2:nth-child(3) span"),
];

let currentValues = [0, 0, 0];
let animationIntervals = [null, null, null];
let calculatedAges = [0, 0, 0];

const updateCount = (index) => {
  currentValues[index]++;
  countingNumbers[index].textContent = currentValues[index];

  // stop animation when it reaches the calculated age
  if (currentValues[index] >= calculatedAges[index]) {
    clearInterval(animationIntervals[index]);
  }
};

const calculateAge = () => {
  let today = new Date();

  // parse formInput values
  let year = parseInt(formInput[2].value, 10);
  let month = parseInt(formInput[1].value, 10);
  let day = parseInt(formInput[0].value, 10);
  let birthDate = new Date(year, month - 1, day);

  let ageInMilliseconds = today - birthDate;
  let years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  let months = Math.floor(
    (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  let days = Math.floor(
    (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  // show results
  if (formInput[2].value) {
    ageContainer[0].textContent = `${years}`;

    // Start counting animation for years
    currentValues[0] = 0;
    calculatedAges[0] = years;
    animationIntervals[0] = setInterval(() => updateCount(0), 30);
  }

  if (formInput[1].value) {
    ageContainer[1].textContent = `${months}`;
    // Start counting animation for months
    currentValues[1] = 0;
    calculatedAges[1] = months;
    animationIntervals[1] = setInterval(() => updateCount(1), 30);
  }

  if (formInput[0]) {
    ageContainer[2].textContent = `${days}`;
    // Start counting animation for days
    currentValues[2] = 0;
    calculatedAges[2] = days;
    animationIntervals[2] = setInterval(() => updateCount(2), 30);
  }
  //happy birthday
  if (
    today.getDate() === birthDate.getDate() &&
    today.getMonth() === birthDate.getMonth() &&
    today.getFullYear() >= birthDate.getFullYear()
  ) {
    birthdayElement.textContent = "Happy Birthday!";
  } else {
    birthdayElement.textContent = "";
  }
};

//event listener for button

arrowButton.addEventListener("click", (e) => {
  if (formInput[0].value === "") {
    formInput[0].style.border = "hsl(0, 100%, 67%) solid 1px";
    errorElement[0].innerText = "This field is required";
    errorElement[0].style.color = "hsl(0, 100%, 67%)";
    errorElement[0].style.fontStyle = "italic";
    labelElement[0].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorElement[0].innerText = "";
    formInput[0].style.border = "hsl(0, 1%, 44%) solid 1px";
    labelElement[0].style.color = "hsl(0, 1%, 44%)";
  }

  if (formInput[1].value === "") {
    formInput[1].style.border = "hsl(0, 100%, 67%) solid 1px";
    errorElement[1].innerText = "This field is required";
    errorElement[1].style.color = "hsl(0, 100%, 67%)";
    errorElement[1].style.fontStyle = "italic";
    labelElement[1].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorElement[1].innerText = "";
    labelElement[1].style.color = "hsl(0, 1%, 44%)";
    formInput[1].style.border = "hsl(0, 1%, 44%) solid 1px";
  }

  if (formInput[2].value === "") {
    formInput[2].style.border = "hsl(0, 100%, 67%) solid 1px";
    errorElement[2].innerText = "This field is required";
    errorElement[2].style.color = "hsl(0, 100%, 67%)";
    errorElement[2].style.fontStyle = "italic";
    labelElement[2].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorElement[2].innerText = "";
    formInput[2].style.border = "hsl(0, 1%, 44%) solid 1px";
    labelElement[2].style.color = "hsl(0, 1%, 44%)";
  }
  //calculate age
  if (formInput[0].value && formInput[1].value && formInput[2].value) {
    calculateAge();
  }
});
