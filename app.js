const api_url ="https://jacintodesign.github.io/quotes-api/data/quotes.json";
let data = []
let newQuote
const loader = document.querySelector('.loader')
const quoteContainer = document.querySelector('.quote-container')

async function getapi(url)  {
try {
    const response = await fetch(url);
    data = await response.json();
    selectQuoteFromArray(data)
    updateQuotes()
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
  quoteContainer.style.display = "none"
  loader.style.display = "block"
  setTimeout(() => {
    quoteContainer.style.display = "block"
    loader.style.display = "none"
  }, 1000)
  quote.innerText = newQuote.text
  author.innerText = newQuote.author
  if (quote.innerText.split(" ").length > 20) {
    quote.style.fontSize = "4vh"
    author.style.fontSize = "4vh"
  } else if (quote.innerText.split(" ").length > 60) {
    quote.style.fontSize = "3vh"
    author.style.fontSize = "3vh"
  }
  else {
    quote.style.fontSize = "10vmin"
    author.style.fontSize = "5vh"
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
let twitterButton = document.querySelector('.twitter')

newQuoteButton.addEventListener('click', function() {
    selectQuoteFromArray(data)
    updateQuotes()
})

function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`
    window.open(twitterURL, '_blank')
}

twitterButton.addEventListener('click', tweetQuote)





