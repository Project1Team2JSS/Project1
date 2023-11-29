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
        // alert('Please enter a location.');
        // return;
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

