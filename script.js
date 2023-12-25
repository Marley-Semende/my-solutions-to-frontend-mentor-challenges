"use strict";

//constants
const inputField = document.getElementById("email");
const subscriptionButton = document.querySelector(".btn-1");
const successMessage = document.querySelector(".success-msg-container");
const signupForm = document.querySelector(".signup-container");
const errorMessage = document.querySelector(".span-1");
const labelElement = document.querySelector("label");
const dismissButton = document.querySelector(".btn-2");
const formElement = document.querySelector(".search-component");
//Email regex expression
const re =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Email validation function.
const validateEmail = () => {
  if (!inputField.value.match(re)) {
    inputField.style.border = "hsl(4, 100%, 67%) 1px solid";
    errorMessage.classList.remove("hidden");
    inputField.style.color = "hsl(4, 100%, 67%)";
  } else if (inputField.value === "") {
    inputField.style.border = "hsl(4, 100%, 67%) 1px solid";
    errorMessage.classList.remove("hidden");
  } else {
    inputField.style.border = "hsl(116, 46%, 49%) 1px solid";
    errorMessage.classList.add("hidden");
    successMessage.classList.remove("hidden");
    signupForm.classList.add("hidden");
  }
};

//eventListener for subscription submit button
subscriptionButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
});

//event listener for dismiss button
dismissButton.addEventListener("click", (e) => {
  e.preventDefault();
  successMessage.classList.add("hidden");
  signupForm.classList.remove("hidden");
  inputField.style.border = "hsl(231, 7%, 60%) 1px solid";
  inputField.style.color = "hsl(231, 7%, 60%)";
  formElement.reset();
});
