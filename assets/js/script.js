

console.log("connected");
var currencyArray;

// API key
var key = "fca_live_0OUoo47t39YgiyRkWn6hAtnHSkBcNBPguWidPeWQ";
// Fetch call to grab currencies 
fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${key}&currencies=`)
.then(response => response.json())
.then(currencyData => {
    console.log(currencyData);
    currencyArray = currencyData.data;
}) 

//https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0OUoo47t39YgiyRkWn6hAtnHSkBcNBPguWidPeWQ&currencies=e





// //function getCountryCurrency(countryName) {
//     fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//         .then(response => response.json())
//         .then(data => {
//             // Check if country was found
//             if (data[0]) {
//                 // Get the currency code, name, and symbol
//                 const currencyCode = data[0].currencies[0].code;
//                 const currencyName = data[0].currencies[0].name;
//                 const currencySymbol = data[0].currencies[0].symbol;

//                 console.log(`Country: ${countryName}`);
//                 console.log(`Currency Code: ${currencyCode}`);
//                 console.log(`Currency Name: ${currencyName}`);
//                 console.log(`Currency Symbol: ${currencySymbol}`);
//             } else {
//                 console.log(`No data found for ${countryName}`);
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

// // Call the function with a country name
// getCountryCurrency('United States');


//OUTPUT OF ABOVE LOOKS LIKE THIS://
// //Country: United States
// Currency Code: USD
// Currency Name: United States dollar
// Currency Symbol: $

