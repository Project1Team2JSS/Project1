console.log("connected");
var currencyArray;

var countryApi = "C4ZcT3i97dTmhMQh9pLU6Q==5lj4TfH531vJD2Tv";

const getCountryCurrency = async (countryName, amount) => {
  console.log(amount);
  const data = await fetch(
    `https://api.api-ninjas.com/v1/country?name=${countryName}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": countryApi,
        "Content-Type": "application/json",
      },
    }
  );
  const jsonData = await data.json();
  const currencyCode = jsonData[0].currency.code;
  console.log(currencyCode);

  const currencyConvertapi = await fetch(
    `https://api.api-ninjas.com/v1/convertcurrency?have=USD&want=${currencyCode}&amount=${amount}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": countryApi,
        "Content-Type": "application/json",
      },
    }
  ); 
  const jsoncurrencyConvertapi = await currencyConvertapi.json();
  console.log(jsoncurrencyConvertapi);
  if (data.json.error = "This currency pair is for premium subscribers only.") {
    alert("Please enter another country. Wouldn't you like you go to Canada or Europe.");
  }
  displayConversionResult(jsoncurrencyConvertapi.new_amount)
  console.log(jsoncurrencyConvertapi.new_amount)
};




var budgetButton = document.getElementById("tip");
// adding click listenter
budgetButton.addEventListener("click", function (event) {
  event.preventDefault();
  var countryName = document.getElementById("locationInput").value;
  var amount = document.getElementById("budget").value;
  getCountryCurrency(countryName, amount)
});




const displayConversionResult = (convertedAmount) => {
  const resultElement = document.getElementById('conversionResult');
  resultElement.textContent = `Converted amount: ${convertedAmount}`;
}; 

var budgetButton = document.getElementById("tip");
  budgetButton.addEventListener("click", function (event) {
    event.preventDefault();
    var countryName = document.getElementById("destination").value;
    var amount = document.getElementById("budget").value;
    getCountryCurrency(countryName, amount);
  });




//1 BUTTON ONLY
//GET MAP TO DISPLAY ON THIS PAGE
//
  //it can't p
 

// localStorage.setItem (key of that item)
// var = localStorage.getitem(key of that item)


// //city api goes 
// [
//   {
//     "name": "San Francisco",
//     "latitude": 37.7562,
//     "longitude": -122.443,
//     "country": "US",
//     "population": 3592294,
//     "is_capital": false
//   }
// // ]

// //OR make it city AND country 
// run validation to make sure the values are correct//
//or drop down with all applicable countries???//

//main page click a button, you want to use local storage where it moves you to new page// 

// localStorage.setItem (key of that item)
// var = localStorage.getitem(key of that item)

// //QUERY STRING WITH DA QUESTION MARKS
// //LCOATION.SEARCH - PARSE THAT NOISE
// //EMBED INTO THE URL
// OPTION 2
// LOCAL STORAGE LIKE ABOVE