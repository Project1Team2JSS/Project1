// function initMap() {
//     // Initialize the map
//     const { AdvancedMarkerElement } = google.maps.importLibrary("marker");
//     const map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });

//     // Initialize the geocoder
//     const geocoder = new google.maps.Geocoder();

//     // Store the marker globally
//     window.marker = new google.maps.Marker({ map: map });
// }

// function getCoordinates() {
//     const location = document.getElementById('locationInput').value;

//     if (location.trim() === '') {
//         alert('Please enter a location.');
//         return;
//     }

//     const geocoder = new google.maps.Geocoder();

//     geocoder.geocode({ address: location }, (results, status) => {
//         if (status === 'OK') {
//             const locationData = results[0].geometry.location;
//             const map = new google.maps.Map(document.getElementById('map'), {
//                 center: locationData,
//                 zoom: 12
//             });

//             // Set marker position
//             window.marker.setPosition(locationData);
//         } else {
//             alert('Geocoding was not successful for the following reason: ' + status);
//         }
//     });
// }
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMwLlSd35T9tTlXnZFDX3wVZK3u28Ty_Y&callback=initMap" async defer></script>


// // Initialize and add the map

// let map;

// async function initMap() {
//   // The location of Uluru

//   const position = { lat: 41.881832, lng: -87.623177 };

//   // Request needed libraries.
//   //@ts-ignore

//   const city = 'destination'
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 10,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }
// initMap();


// const apiKey = "73b0cba1ba046852f98801a447debff3"; //open weather
// const city = 'destination'

// const apiUrl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// // https://api.openweathermap.org/geo/1.0/direct?q=orlando&limit=1&appid=486a30fe2a4040f404391459060015ad

// // var requestLocationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&appid=${apiKey}`
// //^ link to feed our data to get log/lat need to fetch



// // $("#city").on("change keyup", function() {
// //     var city = $(this).val()
// //     $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(city), function(val) {
// //       if(val.results.length) {
// //         var location = val.results[0].geometry.location
// //         $("#lat").val(location.lat)
// //         $("#lon").val(location.lng)
// //       }
// //     })
// //   })





// const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// fetch(weatherUrl)
//     .then(response => response.json())
//     .then(weatherData => {

//     })
//     .catch(error => console.error('Error fetching weather data:', error));

// const currencyUrl = `${baseUrl}convert?from=USD&to=EUR&quantity=${weatherData.main.temp}&apikey=${currencyApiKey}`;
// fetch(currencyUrl)
//      .then(response => response.json())
//      .then(currencyData => {
//      })
//      .catch(error => console.error('Error fetching currency data:', error));


function initMap() {
    // Initialize the map
    const { AdvancedMarkerElement } = google.maps.importLibrary("marker");
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    // Initialize the geocoder
    const geocoder = new google.maps.Geocoder();

    // Store the marker globally
    window.marker = new google.maps.Marker({ map: map });
}

function getCoordinates() {
    const location = document.getElementById('locationInput').value;

    if (location.trim() === '') {
        alert('Please enter a location.');
        return;
    }

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: location }, (results, status) => {
        if (status === 'OK') {
            const locationData = results[0].geometry.location;
            const map = new google.maps.Map(document.getElementById('map'), {
                center: locationData,
                zoom: 12
            });

            // Set marker position
            window.marker.setPosition(locationData);
        } else {
            alert('Geocoding was not successful for the following reason: ' + status);
        }
    });
}