//declare map variable globally so all functions have access
var map;

//function to instantiate the Leaflet map
function createMap(){

    //create the map
    var map = L.map('mapid', {
        center: [20, 0],
        zoom: 2
    });

    //openstreemap base tilelayer
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    //call getData function
    getData(map);
};

//function to retrieve the data and place it on the map
function getData(map){
    //load the data, then exectue mapCities. response passed by default
    $.getJSON("data/MegaCities.geojson", function(response){

            //create marker options
            var geojsonMarkerOptions = {
                radius: 8,
                fillColor: "#ff7800",
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            };

            //create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(response, {
                pointToLayer: function (feature, latlng){
                    return L.circleMarker(latlng, geojsonMarkerOptions);
                }
            }).addTo(map);
        });
};

$(document).ready(createMap);
