









































// Replace with your actual API keys
const countryApiKey = 'C4ZcT3i97dTmhMQh9pLU6Q==5lj4TfH531vJD2Tv';
const currencyApiKey = 'C4ZcT3i97dTmhMQh9pLU6Q==5lj4TfH531vJD2Tv';

// URLs for the APIs
const currencyApiUrl = 'https://api.api-ninjas.com/v1/country?name=';
const countryApiUrl = 'https://api.api-ninjas.com/v1/country?name=';

// Function to fetch country data
function fetchCountryData(countryName) {
  return fetch(`${countryApiUrl}?name=${countryName}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': countryApiKey
    }
  })
  .then(response => response.json());
}

// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
  return fetch(`${currencyApiUrl}?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': currencyApiKey
    }
  })
  .then(response => response.json());
}

// Function to calculate the amount in destination country's currency
function calculateAmountInDestinationCurrency(destinationCountry, amountInHomeCurrency, homeCurrency) {
  fetchCountryData(destinationCountry)
    .then(countryData => {
      const destinationCurrency = countryData[0].currency; // Assuming the API returns an array of countries
      return convertCurrency(amountInHomeCurrency, homeCurrency, destinationCurrency);
    })
    .then(conversionResult => {
      console.log(`Amount in ${destinationCountry}'s currency:`, conversionResult);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

var budgetButton = document.getElementById("tip");
// adding click listenter
budgetButton.addEventListener("click", function (event) {
  event.preventDefault();

  var countryName = document.getElementById("destination").value;
  getCountryCurrency(countryName);
});

// Example usage: Convert 100 units of USD to the currency of Japan
calculateAmountInDestinationCurrency('Japan', 100, 'USD');


