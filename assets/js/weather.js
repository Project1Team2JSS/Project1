console.log("connected");
let userFormEl = document.getElementById("searchForm");
console.log(userFormEl);
let searchInput = document.getElementById("locationInput");
let searchButton = document.getElementById("tip");
console.log(searchButton)
let currentContainer = document.getElementById("weather-container");


var formSubmitHandler = function (event) {
  event.preventDefault();

  let search = searchInput.value.trim();

  if (search) {
    getWeather(search);
    currentContainer.textContent = "";
    searchInput.value = "";
  } else {
    console.log("Please enter a city/location.");
  }
};

var getWeather = function (city) {
  let apiKey = "825dda9ae5ba6a08a48bbade32e85c41";
  let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
  console.log(city);

  fetch(weatherApi)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);

          displayCurrentWeather(data, city);

        });
      } else {
        console.log("Error:" + response.statusText);
      }
    })
    .catch(function (error) {
      console.log("Unable to get weather.");
    });
};
let displayCurrentWeather = function (data, city) {
  console.log(city);
  date = new Date();
  console.log(date);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let cityDate = data.name + ` (${month}/${day}/${year})`;
  let temp = data.main.temp;
  let tempF = 1.8 * (temp - 273) + 32;
  let tempFF = tempF.toFixed(2);
  let tempFFF = `${tempFF}\u00B0 F`;
  console.log(tempFFF);
  let wind = data.wind.speed;
  console.log(`${wind} MPH`);
  let windF = `${wind} MPH`;
  let humidity = data.main.humidity;
  console.log(`${humidity}%`);
  let humidityF = `${humidity}%`;

  console.log(cityDate)
  var cityDateEl = document.createElement("h3");
  cityDateEl.textContent = cityDate;
  currentContainer.appendChild(cityDateEl);

  var conditionsEl = document.createElement("ul");
  currentContainer.appendChild(conditionsEl);

  var tempConditionsEl = document.createElement("li");
  tempConditionsEl.textContent = `Temp: ${tempFFF}`;
  conditionsEl.appendChild(tempConditionsEl);

  var windCondtionsEL = document.createElement("li");
  windCondtionsEL.textContent = `Wind: ${windF}`;
  conditionsEl.appendChild(windCondtionsEL);

  var humidityConditionsEl = document.createElement("li");
  humidityConditionsEl.textContent = `Humidity: ${humidityF}`;
  conditionsEl.appendChild(humidityConditionsEl);

  var liEL = document.querySelectorAll("li");
  for (let i = 0; i < liEL.length; i++) {
    liEL[i].setAttribute("style", "list-style-type: none");
  }
};





userFormEl.addEventListener("click", formSubmitHandler);
