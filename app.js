const api_url ="https://jacintodesign.github.io/quotes-api/data/quotes.json";
let data = []
let newQuote

async function getapi(url)  {
try {
    const response = await fetch(url);
    data = await response.json();
    selectQuoteFromArray(data)
    updateQuotes()
    console.log(newQuote)
} catch(e) {
    console.log(e)
    quote.innerText = 'Cannot get quotes at this time. Sorry.'
    author.innerText = null;
}
  
}

function selectQuoteFromArray(arr) {
    newQuote = arr[Math.floor(Math.random() * data.length)]
}

function updateQuotes() {
  quote.innerText = newQuote.text
  author.innerText = newQuote.author
  if (quote.innerText.split(" ").length > 20) {
    quote.style.fontSize = "5vh"
    author.style.fontSize = "5vh"
  } else {
    quote.style.fontSize = "10vmin"
    author.style.fontSize = "7vh"
  }

  if (newQuote.author === "null") {
    author.innerText = "Anyonymous"
  } else {
    author.innerText = newQuote.author
  }
}

getapi(api_url);

let quote = document.querySelector('#quote-text')
let author = document.querySelector('.author-name')
let newQuoteButton = document.querySelector('.next-quote')

newQuoteButton.addEventListener('click', function() {
    selectQuoteFromArray(data)
    updateQuotes()
})






