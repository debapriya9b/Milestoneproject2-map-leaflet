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