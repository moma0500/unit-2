var mymap;

function createMap(){

  var mymap = L.map('mapid', {
    center: [40.75,-74],
    zoom: 11
  });

  //openstreemap base tilelayer
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(mymap);

  //call getData function
  getData(mymap);
};


function getData(mymap){

  $.getJSON("data/pickup_sample.geojson", function(response){

    var geojsonMarkerOptions = {
      radius: 5,
      fillColor: "#73A6AD",
      color: "#000",
      weight: 1,
      fillOpacity: 0.7
    };


    L.geoJson(response,{
      pointToLayer: function (feature, latlng){
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(mymap);
  });
};

$(document).ready(createMap);
