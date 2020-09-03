let generateButton = document.querySelector(".generate");
let quote = document.querySelector(".quote");
let originator = document.querySelector(".originator");

let quotes = [
  `"We suffer more often in imagination than in reality."`,
  `“The soul becomes dyed with the colour of its thoughts.”`,
];
let originators = ["Seneca", "Marcus Aurelius"];

generateButton.addEventListener("click", () => {
  let n = Math.floor(Math.random() * quotes.length);
  quote.textContent = `${quotes[n]}`;
  originator.textContent = `- ${originators[n]}`;
});
