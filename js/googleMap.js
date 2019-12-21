var mymap = L.map('mapid').setView([46.905, 2.703], 6);

var greenIcon = L.icon({
    iconUrl: '../src/img/pin1.png',

    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -40]
});

var markerSainteCroix = L.marker([48.772, 6.896], {icon: greenIcon}).addTo(mymap);
var markerPalmyre = L.marker([45.686, -1.165], {icon: greenIcon}).addTo(mymap);
var markerPeaugres = L.marker([45.266, 4.723], {icon: greenIcon}).addTo(mymap);

markerSainteCroix.bindPopup("Zoo de Sainte Croix !")
markerPalmyre.bindPopup("Zoo de Palmyre !");
markerPeaugres.bindPopup("Zoo de Peaugres !");

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiaXJpZGVzY2VudGUiLCJhIjoiY2s0ZmhoYzk4MDZieTNrcDcxMnI0NjlwYyJ9.Vugl6YAb93_pZ_8_IFnwUQ'
}).addTo(mymap);