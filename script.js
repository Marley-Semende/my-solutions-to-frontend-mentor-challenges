"use strict";
//constants
const button = document.querySelector(".dice-container");
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");

//unicode for double qoutation Marks
const quotationLeft = "\u201C";
const quotationRight = "\u201D";

//fetch api
async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(`Unable to fetch advice. Status ${response.status}`);
    }
    const data = await response.json();
    adviceId.textContent = `${quotationLeft}Advice #${data.slip.id}${quotationRight}`;
    adviceText.textContent = `${quotationLeft}${data.slip.advice}${quotationRight}`;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

//event listener fo button
button.addEventListener("click", fetchAdvice);
