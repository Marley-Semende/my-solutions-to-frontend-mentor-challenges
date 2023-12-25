# My solution for Newsletter sign-up form with success message challenge

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process and What I learned](#my-process-and-what-i-learned)
- [Built with](#built-with)
-
- [Author](#author)

## Overview

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [My Solution URL]()
- Live Site URL: [Live Site URL]()

## My process and What I learned

I have built this small frontend mentor challenge project using HTML, CSS and Vanilla Javascript as part of my learning curve to master frontend development. In this new challenge I used the javascript DOM and event listeners concepts to validate email submission dynamically using javascript. I've set to click event listeners for the submit and dismiss button, to apply different functionality as well as append and remove elements to the DOM when the buttons are clicked. This was an amazing challenge to do, I also spent quite some time working on responsiveness on different screensizes which I've achieved by applying the @Media rule.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### Code snippets

```css
@media only screen and (max-width: 765px) {
  body p {
    font-size: 1.5rem;
  }

  .signup-container {
    display: flex;
    flex-direction: column-reverse;
    margin: 8%;
  }
}
```

```js
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
```

## Author

- Name - [Marley]
- Frontend Mentor - [@Marley-Semende](https://www.frontendmentor.io/profile/Marley-Semende)
- LinkedIn - [Marley](https://www.linkedin.com/in/marley-semende-web-dev/)
