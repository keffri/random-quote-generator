let generateButton = document.querySelector(".generate");
let quote = document.querySelector(".quote");
let originator = document.querySelector(".originator");

let quotes = [
  `We suffer more often in imagination than in reality.`,
  `The soul becomes dyed with the colour of its thoughts.`,
  `Wealth consists not in having great possessions, but in having few wants.`,
  `Patience is bitter, but its fruit is sweet.`,
  `Failure is only the opportunity to begin again.`,
  `Wisdom is the offspring of suffering and time`,
  `Let go your earthly tether. Enter the void. Empty and become wind.`,
];

let originators = [
  `Seneca`,
  `Marcus Aurelius`,
  `Epictetus`,
  `Aristotle`,
  `Uncle Iroh`,
  `Emperor Izaro`,
  `Guru Laghima`,
];

//Sets the DOM for the quote and originator.
let currentQuote = document.querySelector(".quote");
let currentOriginator = document.querySelector(".originator");

//Create an array copy of the quotes and originators.
let copyQuotes = quotes.slice();
let copyOriginators = originators.slice();

//Boolean used to determine wether or not the button has been clicked recently.
let buttonClicked = false;

function generateRandom() {
  //If the copied arrays are empty, then reset them to their original lengths.
  if (copyQuotes.length === 0 || copyOriginators.length === 0) {
    copyQuotes = quotes.slice();
    copyOriginators = originators.slice();
  }

  //Obtains random index number from the amount of quotes/originators.
  let index = Math.floor(Math.random() * copyQuotes.length);

  //Screen displays text appropriate to corresponding element selected from array index.
  currentQuote.textContent = `"${copyQuotes[index]}"`;
  currentOriginator.textContent = `${copyOriginators[index]}`;

  //Adds a fade-in class with animation to change opacity.
  currentQuote.classList.add("fade-in");
  currentOriginator.classList.add("fade-in");

  //Removes the selected quote/originator from their arrays.
  copyQuotes.splice(index, 1);
  copyOriginators.splice(index, 1);

  //Sets button status to true when clicked.
  buttonClicked = true;

  buttonOff();
}

//If button has been clicked, remove its event listeners.
function checkClicked() {
  while (buttonClicked) {
    generateButton.removeEventListener("click", generateRandom);
    generateButton.removeEventListener("click", removeFade);
    break;
  }
}

//Five seconds after the button has been clicked readd event listeners, and set button status to false.
function buttonOff() {
  if (buttonClicked === true) {
    setTimeout(() => {
      buttonClicked = false;
      generateButton.addEventListener("click", generateRandom);
      generateButton.addEventListener("click", removeFade);
    }, 5000);
  }
}

//fade-in class removed 5 seconds after button is clicked.
function removeFade() {
  setTimeout(() => {
    currentQuote.classList.remove("fade-in");
    currentOriginator.classList.remove("fade-in");
  }, 5000);
}

generateButton.addEventListener("click", generateRandom);
generateButton.addEventListener("click", removeFade);
generateButton.addEventListener("click", checkClicked);
