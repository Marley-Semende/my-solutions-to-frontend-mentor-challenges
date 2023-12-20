"use strict";

const submitButton = document.querySelector(".submit-btn");
const cardContainer = document.querySelector(".card-container");
const thankYouCard = document.querySelector(".thank-you-card");
const rating = document.querySelector(".rating");
const ratingButtons = document.querySelectorAll(".btn");
const spanZeroContainer = document.querySelector(".zero-container");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  thankYouCard.classList.remove("hidden");
  cardContainer.classList.add("hidden");
});

ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", (e) => {
    e.preventDefault();
    rating.innerHTML = ratingButton.innerHTML;
    spanZeroContainer.classList.add("hidden");
  });
});
