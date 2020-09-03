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

let quoteNumbers = [];
for (let i = 0; i < quotes.length; i++) {
  quoteNumbers.push(i);
}

function randomQuoteNumber() {
  let n = Math.floor(Math.random() * quotes.length);
  return quoteNumbers[n];
}

let previousQuote;
let currentQuote;

function generateQuote() {
  let n = Math.floor(Math.random() * quotes.length);
  quote.textContent = `${quotes[n]}`;
  originator.textContent = `- ${originators[n]}`;
}

generateButton.addEventListener("click", generateQuote);

generateQuote();
