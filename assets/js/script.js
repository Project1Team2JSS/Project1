console.log("connected");
var currencyArray;

var countryApi = "C4ZcT3i97dTmhMQh9pLU6Q==5lj4TfH531vJD2Tv";

const getCountryCurrency = async (countryName, amount) => {
  console.log(amount);
  const countryResponse = await fetch(
    `https://api.api-ninjas.com/v1/country?name=${countryName}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": countryApi,
        "Content-Type": "application/json",
      },
    }
  );
  const countryData = await countryResponse.json();
  const currencyCode = countryData[0].currency.code;

  const currencyName = countryData[0].currency.name;
  console.log(currencyCode);

  const currResponse = await fetch(
    `https://api.api-ninjas.com/v1/convertcurrency?have=USD&want=${currencyCode}&amount=${amount}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": countryApi,
        "Content-Type": "application/json",
      },
    }
  );

  const currData = await currResponse.json();
  console.log(currData);
  if (currData.error == "This currency pair is for premium subscribers only.") {
    // document.getElementById("conversionResult").textContent =
    //   "currency not available. sowwy.";
    // Create modal object
    // Title, text, button labels
    const confirmModal = new validationModal({
      titleText: "Currency Not Supported",
      messageText: "Sorry, please choose a new destination.",
      confirmText: "Okay...",
      // cancelText: "Darn It!",
    });
    
    console.log(confirmModal);
    
    // document.getElementById("openModal").addEventListener("click", () => {
      console.log("Currency Validation Error");
      // open modal
      confirmModal.open()
        .then(value =>
          console.log('User clicked confirm:', value)
        )
        .catch(value => 
        console.log('User clicked cancel:', value)
        );
    // });
    
  } else {
    displayConversionResult(currData.new_amount, currencyName, currencyCode);
  }
  // displayConversionResult(jsoncurrencyConvertApi.currencyCode)
  console.log(currData.new_amount);
};

var budgetButton = document.getElementById("tip");
// adding click listenter
budgetButton.addEventListener("click", function (event) {
  event.preventDefault();
  var countryName = document.getElementById("locationInput").value;
  var amount = document.getElementById("budget").value;
  getCountryCurrency(countryName, amount);
  getCoordinates();
});

const displayConversionResult = (
  convertedAmount,
  currencyName,
  currencyCode
) => {
  const resultElement = document.getElementById("conversionResult");
  formatedAmount = convertedAmount.toLocaleString("en-Us", {
    style: "currency",
    currency: currencyCode,
  });
  console.log(formatedAmount);
  resultElement.textContent = `Converted amount: ${currencyName} ${formatedAmount}`;
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
