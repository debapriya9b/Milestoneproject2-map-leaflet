/* global L */

//-------------------------------------------------Modal

//Modal will open with page load

$(document).ready(function() {
    $("#myModal").modal('show');
});

//------------------------------------------------Creating map/Tile Layer/Popup


//Creating map options
var mapOptions = {
    center: [40.4168, -3.7038],
    zoom: 2,
    minZoom: 2,
    maxZoom: 18,
    maxBounds: [
        [-75, -190],
        [90, 190]
    ],
    maxBoundsViscosity: 0.5,
}

// Creating a map object
var map = new L.map('map', mapOptions);

L.control.navbar().addTo(map);

// Add Tile Layer and add to map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
}).addTo(map);

//Adding geoJson data and adding the marker and popup

var geojsonMarkerOptions = {
    radius: 3,
    fillColor: "#FF0000",
    color: "#000",
    weight: 1,
    opacity: 0.2,
    fillOpacity: 0.5
};

var geojsonMarkerOptionsActive = {
    radius: 4,
    fillColor: "#FF0000",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.5
};

var geojsonMarkerOptionsDormant = {
    radius: 4,
    fillColor: "#00CC00",
    color: "#000",
    weight: 1,
    opacity: 0.5,
    fillOpacity: 0.5
};






















