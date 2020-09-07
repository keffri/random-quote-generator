let generateButton = document.querySelector(".generate");
let quote = document.querySelector(".quote");
let originator = document.querySelector(".originator");

let quotes = [
  `"We suffer more often in imagination than in reality."`,
  `“The soul becomes dyed with the colour of its thoughts.”`,
  `"Any man who reads too much and uses his own brain too little falls into lazy habits of thinking."`,
  `"If you don’t make mistakes, you’re not working on hard enough problems. And that’s a big mistake."`,
];
let originators = [
  "Seneca",
  "Marcus Aurelius",
  "Albert Einstein",
  "Frank Wilczek",
];

// //Current number of quotes/originators (by index number).
let quoteNumbers = [];
for (let i = 0; i < quotes.length; i++) {
  quoteNumbers.push(i);
}

// // //Return a random number within number of quotes/originators in array.
function randomQuoteNumber() {
  let n = Math.floor(Math.random() * quotes.length);
  return quoteNumbers[n];
}

// OLD METHOD USED FOR GENERATING RANDOM.
// function generateQuote() {
//   //Sets random index for quote in cases where current and next do not match.
//   let c = randomQuoteNumber();
//   //Obtains current quote.
//   let currentQuote = document.querySelector(".quote").textContent;
//   let currentOriginator = document.querySelector(".originator").textContent;
//   //Sets next quote to random quote from the quotes array.
//   let nextQuote = quotes[c];
//   let nextOriginator = originators[c];
//   //While both quotes are the same another quote is chosen at random.
//   while (currentQuote == nextQuote || currentOriginator == nextOriginator) {
//     let n = randomQuoteNumber();
//     nextQuote = quotes[n];
//     nextOriginator = originators[n];
//   }
//   //While both quotes are no longer matching a new quote is set.
//   quote.textContent = nextQuote;
//   originator.textContent = `- ${nextOriginator}`;
// }

//Sets the DOM for the quote and originator.
let currentQuote = document.querySelector(".quote");
let currentOriginator = document.querySelector(".originator");

//Create an array copy of the quotes and originators.
let copyQuotes = quotes.slice();
let copyOriginators = originators.slice();

let buttonClicked = false;
function generateRandom() {
  //Sets the DOM of the about to be generated quote/originator.
  let nextQuote = document.querySelector(".quote");
  let nextOriginator = document.querySelector(".originator");

  //If either array is empty, they will be reset.
  if (copyQuotes.length === 0 || copyOriginators.length === 0) {
    copyQuotes = quotes.slice();
    copyOriginators = originators.slice();
  }

  //Obtains a random index number from the copy array. Varies depending on how many elements are left in the array.
  let index = Math.floor(Math.random() * copyQuotes.length);

  //Sets the quote and originator to the corresponding index number.
  currentQuote.classList.add("fade-in");
  currentOriginator.classList.add("fade-in");
  nextQuote.textContent = copyQuotes[index];
  nextOriginator.textContent = `- ${copyOriginators[index]}`;

  //Removes the current quote and originator from the copy array.
  copyQuotes.splice(index, 1);
  copyOriginators.splice(index, 1);

  buttonClicked = true;
  buttonOff();
}

function buttonOff() {
  if (buttonClicked === true) {
    setTimeout(() => {
      buttonClicked = false;
    }, 5000);
  }
}

// if (buttonClicked) {
//   // generateButton.setAttribute("disabled", "disabled");
//   generateButton.removeEventListener("click", generateRandom);
// } else if (buttonClicked === false) {
//   generateButton.addEventListener("click", generateRandom);
// }

generateButton.addEventListener("click", () => {
  setTimeout(() => {
    currentQuote.classList.remove("fade-in");
    currentOriginator.classList.remove("fade-in");
  }, 5000);
});
