console.log("connected");
var countryNameEl = document.getElementById("locationInput");
var budgetAmountEl = document.getElementById("budget");
var amountInput = "";
var submitButton = document.getElementById("tip");
var historyContainer = document.getElementById("search-history");

function displayWelcomeMessage() {
const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo && userInfo.length > 0) {
      const welcomeMessage = document.getElementById("welcomeMessage");
      welcomeMessage.textContent =
      `Welcome back!`
    }
};

window.addEventListener("load", displayWelcomeMessage);

formSubmitHandler = function (event) {
   event.preventDefault();

  console.log("save info");
  var countryName = countryNameEl.value.trim();
  var budgetAmount = budgetAmountEl.value.trim();

  console.log(countryName);

  console.log("Raw Country Name Input:", countryName);
  console.log("Raw Amount Input:", budgetAmount);

  var userInfo = [countryName, budgetAmount];
displaySearchHistory();
  function displaySearchHistory() {
    console.log(userInfo);

    // Creates Search History Header
    var historyDisplayEl = document.createElement("h3");
    historyDisplayEl.textContent = "Search History";
// Append Header to Container on DOM
    historyContainer.appendChild(historyDisplayEl);
console.log("Header Added");
var historyListEl = document.createElement("ul");

console.log("Add UL to Container")
var historyListItem = document.createElement("li");
historyListItem.textContent = userInfo[0];

historyContainer.appendChild(historyDisplayEl);
    //     historyListItem.textContent = userInfo[0];
    //     historyListEl.appendChild(historyListItem);


    // for(i = 0; i < 3; i++){
    //     var historyListItem = document.createElement("li");
    //     historyListItem.textContent = userInfo[0];
    //     historyListEl.appendChild(historyListItem);
    // }
    
  };


  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};
// updated local storage

submitButton.addEventListener("click", formSubmitHandler);
