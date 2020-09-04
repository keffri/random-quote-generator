let generateButton = document.querySelector(".generate");
let quote = document.querySelector(".quote");
let originator = document.querySelector(".originator");

let quotes = [
  `"We suffer more often in imagination than in reality."`,
  `“The soul becomes dyed with the colour of its thoughts.”`,
  `"Set aside a certain number of days, during which you shall be content with the scantiest and cheapest fare, with coarse and rough dress, saying to yourself the while: “Is this the condition that I feared?”`,
  `"Any man who reads too much and uses his own brain too little falls into lazy habits of thinking."`,
  `"If you don’t make mistakes, you’re not working on hard enough problems. And that’s a big mistake."`,
];
let originators = [
  "Seneca",
  "Marcus Aurelius",
  "Seneca",
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

function generateQuote() {
  let c = randomQuoteNumber();

  //Obtains current quote.
  let currentQuote = document.querySelector(".quote").textContent;
  let currentOriginator = document.querySelector(".originator").textContent;
  //Sets next quote to random quote from the quotes array.
  let nextQuote = quotes[c];
  let nextOriginator = originators[c];
  //While both quotes are the same another quote is chosen at random.
  while (currentQuote == nextQuote || currentOriginator == nextOriginator) {
    let n = randomQuoteNumber();
    nextQuote = quotes[n];
    nextOriginator = originators[n];
  }
  //While both quotes are no longer matching a new quote is set.
  quote.textContent = nextQuote;
  originator.textContent = `- ${nextOriginator}`;
}

generateButton.addEventListener("click", generateQuote);
