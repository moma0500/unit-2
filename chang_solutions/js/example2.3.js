/* Map of GeoJSON data from MegaCities.geojson */

var map;

//function to instantiate the Leaflet map
function createMap(){
    
    //create the map
    map = L.map('map', {
        center: [0, 0],
        zoom: 1
    });

    //add OSM base tilelayer
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
        //check that data loaded properly
        console.log(response);
        //create a Leaflet GeoJSON layer and add it to the map
        L.geoJson(response).addTo(map);

    });     
};


$(document).ready(createMap);