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
    // welcomeMessage.textContent = `Welcome back!`;
    displaySearchHistory(userInfo);
  }
}

window.addEventListener("load", displayWelcomeMessage);

formSubmitHandler = function (event) {
  event.preventDefault();

  console.log("save info");
  var countryName = countryNameEl.value.trim();
  var budgetAmount = budgetAmountEl.value.trim();

  console.log(countryName);

  console.log("Raw Country Name Input:", countryName);
  console.log("Raw Amount Input:", budgetAmount);
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log("OLD USER INfO", [...userInfo])
  userInfo.push(countryName);
  userInfo.push(budgetAmount);
  console.log("NEW USER INFO", [...userInfo]);
  displaySearchHistory(userInfo);

};
// updated local storage
function displaySearchHistory(userInfo) {
    historyContainer.innerHTML = "";
    console.log(userInfo);

    // Creates Search History Header
    var historyDisplayEl = document.createElement("h3");
    console.log("Header Added");
    historyDisplayEl.textContent = "Search History";
    // Append Header to Container on DOM
    historyContainer.appendChild(historyDisplayEl);
    var historyListContainer = document.createElement("ul");

    for (i = 0; i < userInfo.length; i += 2) {
      console.log(userInfo[i]);
      var historyListItem = document.createElement("li");
      historyListItem.textContent = userInfo[i] + " - " + userInfo[i + 1];
      historyListContainer.appendChild(historyListItem);
    }

    historyContainer.appendChild(historyListContainer);
    console.log("SAVING TO LOCAL STORAGE", userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
submitButton.addEventListener("click", formSubmitHandler);
