const randomQuoteButton = document.querySelector(".random-quote");
const quoteParagraph = document.querySelector(".quote");
const authorParagraph = document.querySelector(".author");
const URL_BASE = "https://www.breakingbadapi.com/api";

const getRandomQuote = () => {
  fetch(`${URL_BASE}/quote/random`)
    .then((response) => response.json())
    .then((data) => {
      const { author, quote, series } = data[0];
      quoteParagraph.innerHTML = `“${quote}”`;
      authorParagraph.innerHTML = `- ${author} from <span>${series}</span>`;
    });
};

randomQuoteButton.addEventListener("click", getRandomQuote);

getRandomQuote();