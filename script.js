let generateButton = document.querySelector(".generate");
let quote = document.querySelector(".quote");
let originator = document.querySelector(".originator");

let quotes = [
  `"We suffer more often in imagination than in reality."`,
  `“The soul becomes dyed with the colour of its thoughts.”`,
];
let originators = ["Seneca", "Marcus Aurelius"];

// //Current number of quotes (by index number) [0, 1, 2, 3, 4]
let quoteNumbers = [];
for (let i = 0; i < quotes.length; i++) {
  quoteNumbers.push(i);
}

// // //Return a random number within number of quotes in array [0 - 4]
function randomQuoteNumber() {
  let n = Math.floor(Math.random() * quotes.length);
  return quoteNumbers[n];
}

function generateQuote() {
  //Obtains current quote.
  let currentQuote = document.querySelector(".quote").textContent;

  //Sets next quote to random quote from the quotes array.
  let nextQuote = quotes[randomQuoteNumber()];
  //While both quotes are the same another quote is chosen at random.
  while (currentQuote == nextQuote) {
    nextQuote = quotes[randomQuoteNumber()];
  }
  //While both quotes are no longer matching a new quote is set.
  quote.textContent = nextQuote;
}

generateButton.addEventListener("click", generateQuote);
