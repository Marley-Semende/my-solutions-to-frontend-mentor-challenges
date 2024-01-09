"use strict";
import data from "./data.json" assert { type: "json" };

const allBars = document.querySelectorAll(".bar");
const barPopUps = document.querySelectorAll(".popup-amount");

const updateAmount = (barMessage, amount) => {
  barMessage.classList.remove("hidden");
  barMessage.textContent = amount;
  barMessage.style.fontSize = "15px";
};

for (const [index, bar] of allBars.entries()) {
  bar.addEventListener("mouseover", () => {
    updateAmount(barPopUps[index], data[index].amount);
  });
}
for (const [index, bar] of allBars.entries()) {
  bar.addEventListener("mouseout", () => {
    barPopUps[index].classList.add("hidden");
  });
}
