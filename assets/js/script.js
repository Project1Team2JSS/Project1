console.log("connected");
var currencyArray;

//designates destination value//
// var destination = document.getElementById('destination').value;

//designate budget value//
var amount = document.getElementById("budget").value;

// API key
var key = "fca_live_0OUoo47t39YgiyRkWn6hAtnHSkBcNBPguWidPeWQ";
// Fetch call to grab currencies
fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${key}&currencies=`)
  .then((response) => response.json())
  .then((currencyData) => {
    console.log(currencyData);
    currencyArray = currencyData.data;
  });

//https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0OUoo47t39YgiyRkWn6hAtnHSkBcNBPguWidPeWQ&currencies=e



function getCountryCurrency(countryName) {
  console.log("made it here");

  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  

    .then((response) => response.json())
    .then((data) => {
      // Check if country was found
      if (data[0]) {
        // Get the currency code, name, and symbol
        const currencyCode = data[0].currencies[0].code;
        const currencyName = data[0].currencies[0].name;
        const currencySymbol = data[0].currencies[0].symbol;

        console.log(`Country: ${countryName}`);
        console.log(`Currency Code: ${currencyCode}`);
        console.log(`Currency Name: ${currencyName}`);
        console.log(`Currency Symbol: ${currencySymbol}`);
      } else {
        console.log(`No data found for ${countryName}`);
      }
    })
    .catch((error) => console.error("Error:", error));
}

// Call the function with a country name
// getCountryCurrency('United States');

// document.addEventListener('DOMContentLoaded', getCountryCurrency())

var budgetButton = document.getElementById("tip");
// adding click listenter
budgetButton.addEventListener("click", function (event) {
  event.preventDefault();

  var countryName = document.getElementById("destination").value;
  getCountryCurrency(countryName);
});

//make api call to acquire this info//
//convert entered amount to destinnation currency

// //OUTPUT OF ABOVE LOOKS LIKE THIS://
// // //Country: United States
// // Currency Code: USD
// // Currency Name: United States dollar
// // Currency Symbol: $

// country: Ireland
// code: EUR
// curr name: euro 
// curr symbol: symbol


// //event listener on = button where user inputs data , whatever country then call function when they hit submit on said form//
// //destination  maybe move your budget feature//

// //budget
// //destination
// //NEW PAGE//
// //new tabe
