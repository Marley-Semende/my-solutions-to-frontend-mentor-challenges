//constants

const billInputElement = document.getElementById("bill");
const numOfPeopleInput = document.getElementById("num-of-people");
const errorMessage = document.querySelectorAll(".error-msg");
const tipButton = document.querySelectorAll(".select-tip button");
const tipAmountPerPerson = document.querySelector(".amount");
const totalAmountPerPerson = document.querySelector(".amount-two");
const resetButton = document.querySelector(".reset-btn");
const formElement = document.querySelectorAll("form");

//variables
let tipBtnValue = [5, 10, 15, 25, 50];
let count = 0;

//functions
const calculateTipAmount1 = (button1) => {
  let totalAmount1 =
    (billInputElement.value * (button1 / 100)) / numOfPeopleInput.value;
  tipAmountPerPerson.innerText = `$${totalAmount1.toFixed(2)}`;

  let totalBillOne =
    billInputElement.value / numOfPeopleInput.value + totalAmount1;
  totalAmountPerPerson.innerText = `$${totalBillOne.toFixed(2)}`;
};

const calculateTipAmount2 = (button2) => {
  let totalAmount2 =
    (billInputElement.value * (button2 / 100)) / numOfPeopleInput.value;
  tipAmountPerPerson.innerText = `$${totalAmount2.toFixed(2)}`;
  let totalBillTwo =
    billInputElement.value / numOfPeopleInput.value + totalAmount2;
  totalAmountPerPerson.innerText = `$${totalBillTwo.toFixed(2)}`;
};

const calculateTipAmount3 = (button3) => {
  let totalAmount3 =
    (billInputElement.value * (button3 / 100)) / numOfPeopleInput.value;
  tipAmountPerPerson.innerText = `$${totalAmount3.toFixed(2)}`;
  let totalBillThree =
    billInputElement.value / numOfPeopleInput.value + totalAmount3;
  totalAmountPerPerson.innerText = `$${totalBillThree.toFixed(2)}`;
};
const calculateTipAmount4 = (button4) => {
  let totalAmount4 =
    (billInputElement.value * (button4 / 100)) / numOfPeopleInput.value;
  tipAmountPerPerson.innerText = `$${totalAmount4.toFixed(2)}`;
  let totalBillFour =
    billInputElement.value / numOfPeopleInput.value + totalAmount4;
  totalAmountPerPerson.innerText = `$${totalBillFour.toFixed(2)}`;
};
const calculateTipAmount5 = (button5) => {
  let totalAmount5 =
    (billInputElement.value * (button5 / 100)) / numOfPeopleInput.value;
  tipAmountPerPerson.innerText = `$${totalAmount5.toFixed(2)}`;
  let totalBillFive =
    billInputElement.value / numOfPeopleInput.value + totalAmount5;
  totalAmountPerPerson.innerText = `$${totalBillFive.toFixed(2)}`;
};
const populateCustomButton = () => {
  count++;
  tipButton[5].innerText = `${count}%`;
};
const calculateTipAmount6 = () => {
  let totalAmount6 =
    (billInputElement.value * (count / 100)) / numOfPeopleInput.value;
  tipAmountPerPerson.innerText = `$${totalAmount6.toFixed(2)}`;
  let totalBillSix =
    billInputElement.value / numOfPeopleInput.value + totalAmount6;
  totalAmountPerPerson.innerText = `$${totalBillSix.toFixed(2)}`;
};
//event listeners for form fields
billInputElement.addEventListener("input", (e) => {
  if (e.target.value === "" || e.target.value === "0") {
    billInputElement.style.border = "hsl(8, 100%, 59%) solid 2px";
    errorMessage[0].innerText = "Can't be zero";
    errorMessage[0].style.color = "hsl(8, 100%, 59%)";
  } else {
    billInputElement.style.border = "hsl(172, 67%, 45%) solid 2px";
    errorMessage[0].innerText = "";
  }
});
numOfPeopleInput.addEventListener("input", (e) => {
  if (e.target.value === "" || e.target.value === "0") {
    numOfPeopleInput.style.border = "hsl(8, 100%, 59%) solid 2px";
    errorMessage[1].innerText = "Can't be zero";
    errorMessage[1].style.color = "hsl(8, 100%, 59%)";
  } else {
    numOfPeopleInput.style.border = "hsl(172, 67%, 45%) solid 2px";
    errorMessage[1].innerText = "";
  }
});

tipButton[0].addEventListener("click", (e) => {
  e.preventDefault();
  calculateTipAmount1(tipBtnValue[0]);
});

tipButton[1].addEventListener("click", (e) => {
  e.preventDefault();
  calculateTipAmount2(tipBtnValue[1]);
});
tipButton[2].addEventListener("click", (e) => {
  e.preventDefault();
  calculateTipAmount3(tipBtnValue[2]);
});
tipButton[3].addEventListener("click", (e) => {
  e.preventDefault();
  calculateTipAmount4(tipBtnValue[3]);
});
tipButton[4].addEventListener("click", (e) => {
  e.preventDefault();
  calculateTipAmount5(tipBtnValue[4]);
});
tipButton[5].addEventListener("click", (e) => {
  e.preventDefault();
  populateCustomButton();
  calculateTipAmount6();
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  tipAmountPerPerson.innerText = "$0.00";
  totalAmountPerPerson.innerText = "$0.00";
  formElement[0].reset();
  formElement[1].reset();
});
