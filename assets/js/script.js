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

//google map API Key
//var key = "AIzaSyAMwLlSd35T9tTlXnZFDX3wVZK3u28Ty_Y"