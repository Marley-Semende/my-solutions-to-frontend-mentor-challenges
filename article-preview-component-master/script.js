"use strict";

const shareButton = document.querySelector(".share-btn");
const socialMedia = document.querySelector(".social-media");
let isSocialMediaOpen = false;

const showSocialMedia = () => {
  isSocialMediaOpen = !isSocialMediaOpen;
  if (!isSocialMediaOpen) {
    socialMedia.classList.remove("hidden");
  } else {
    socialMedia.classList.add("hidden");
  }
};

shareButton.addEventListener("click", showSocialMedia);
