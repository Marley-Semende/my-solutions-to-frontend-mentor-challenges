const iconOne = document.querySelector(".plus-icon-one");
const answerElementOne = document.getElementById("answer-1");
const iconTwo = document.querySelector(".plus-icon-two");
const iconThree = document.querySelector(".plus-icon-three");
const iconFour = document.querySelector(".plus-icon-four");
const minusButton = "assets/images/icon-minus.svg";
const answerElement = document.querySelectorAll(".other-answers");

// iconOne.addEventListener("click", (e) => {
//   iconOne.src = minusButton;
//   iconOne.style.cursor = "pointer";
// answerElementOne.innerHTML = ``;
// answerElementOne.style.color = "";
//});

iconTwo.addEventListener("click", (e) => {
  iconTwo.src = minusButton;
  iconTwo.style.cursor = "pointer";
  answerElement[0].innerHTML =
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the freeoption providing access to a range of projects suitable for all skill levels.";
  answerElement[0].style.color = "hsl(292, 16%, 49%)";
});

iconThree.addEventListener("click", (e) => {
  iconThree.src = minusButton;
  iconThree.style.cursor = "pointer";
  answerElement[1].innerHTML =
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>";
  answerElement[1].style.color = "hsl(292, 16%, 49%)";
});

iconFour.addEventListener("click", (e) => {
  iconFour.src = minusButton;
  iconFour.style.cursor = "pointer";
  answerElement[2].innerHTML =
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
  answerElement[2].style.color = "hsl(292, 16%, 49%)";
});
