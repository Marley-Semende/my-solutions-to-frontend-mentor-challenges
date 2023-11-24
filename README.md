# Order summary card solution

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: (https://github.com/Marley-Semende/order-summary-card)
- Live Site URL: (https://marley-semende.github.io/order-summary-card/)

## My process

I have made use of HTML and CSS concepts like flexbox, box-sizing, css variables, media queries and pseudo-selectors to build this order summary card.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox

### What I learned

CSS Variables
Pseudo-Selectors
Flexbox
@Media and Responsiveness

```css
.subscription-info {
  background-color: var(--very-pale-blue);
  border-radius: 8px;
  margin: 1% 7% 10% 7%;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  text-align: left;
}
:root {
  --pale-blue: #e0e8ff;
  --white: #fff;
  --dark-blue: #1f2f56;
  --bright-blue: #3829e0;
  --very-pale-blue: #f5f7ff;
  --desaturated-blue: #7280a7;
}
```

## Author

- Name - [Marley]
- Frontend Mentor - [@Marley-Semende](https://www.frontendmentor.io/profile/Marley-Semende)
- LinkedIn - [Marley Semende](https://www.linkedin.com/in/marley-semende-web-dev/)
