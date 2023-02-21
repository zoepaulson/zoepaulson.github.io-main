async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.activity);
    displayOther(json.type);
  }
  catch(err) {
    console.log(err);
    alert('Failed');
  }
}

const endpoint = 'https://www.boredapi.com/api/activity'

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);


function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

function displayOther(other) {
  const quoteOther = document.querySelector('#js-activity-type')
  quoteOther.textContent = other;
}
