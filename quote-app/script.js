const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#button");
const state = {
  quotes: [],
  author: [],
};

button.addEventListener("click", changeQuote);

function changeQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData); //zeigt Inhalt von jsonData obj an => sehen dann dass die keys author/quotes enthalten
      state.author = jsonData.author; //jsonData.author = key aus jsonData
      state.quotes = jsonData.quote; //jsonData.quote = key aus jsonData
      loadQuote();
    });
}

function loadQuote() {
  quote.innerText = state.quotes; //state.quotes = key aus state obj
  author.innerText = state.author; //state.author = key aus state obj
}
