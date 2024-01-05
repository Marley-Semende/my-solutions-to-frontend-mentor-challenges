"use strict";
const buttons = document.querySelectorAll(".question-container img");
const questions = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
//event listeners.
buttons[0].addEventListener("click", (e) => {
  if (answer[0].textContent === "") {
    answer[0].textContent =
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
    questions[0].style.color = "hsl(238, 29%, 16%)";
    questions[0].style.fontWeight = "700";
    buttons[0].style.transform = "rotate(-180deg)";
  } else {
    answer[0].textContent = "";
    questions[0].style.color = "hsl(240, 6%, 50%)";
    buttons[0].style.transform = "rotate(0deg)";
  }
});

buttons[2].addEventListener("click", (e) => {
  if (answer[2].textContent === "") {
    answer[2].textContent =
      "Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.";
    questions[2].style.color = "hsl(238, 29%, 16%)";
    questions[2].style.fontWeight = "700";
    buttons[2].style.transform = "rotate(-180deg)";
  } else {
    answer[2].textContent = "";
    questions[2].style.color = "hsl(240, 6%, 50%)";
    buttons[2].style.transform = "rotate(0deg)";
  }
});

buttons[3].addEventListener("click", (e) => {
  if (answer[3].textContent === "") {
    answer[3].textContent =
      "Yes! Send us a message and we’ll process your request no questions asked.";
    questions[3].style.color = "hsl(238, 29%, 16%)";
    questions[3].style.fontWeight = "700";
    buttons[3].style.transform = "rotate(-180deg)";
  } else {
    answer[3].textContent = "";
    questions[3].style.color = "hsl(240, 6%, 50%)";
    buttons[3].style.transform = "rotate(0deg)";
  }
});

buttons[4].addEventListener("click", (e) => {
  if (answer[4].textContent === "") {
    answer[4].textContent =
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
    questions[4].style.color = "hsl(238, 29%, 16%)";
    questions[4].style.fontWeight = "700";
    buttons[4].style.transform = "rotate(-180deg)";
  } else {
    answer[4].textContent = "";
    questions[4].style.color = "hsl(240, 6%, 50%)";
    buttons[4].style.transform = "rotate(0deg)";
  }
});
