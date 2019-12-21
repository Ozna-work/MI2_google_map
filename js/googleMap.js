//Créer une map de centre 46.905, 2.703, le 2e paramètre (6) correspond au zoom, plus il est grand, plus le zoom le sera
var mymap = L.map('mapid').setView([46.905, 2.703], 6);

//Créer un cercle de centre 48.772, 6.896, ayant la classe pulse et ayant un cercle de 40km
var circle = L.circle([48.772, 6.896], {
    className: 'pulse',
    radius: 40000
});

//Créer l'apparence des pins qui seront sur la map
var greenIcon = L.icon({
    iconUrl: '../src/img/pin1.png',     // Image du pin
    iconSize: [40, 40],                 // Taille du pin
    iconAnchor: [20, 40],               // La pointe du pin sera en bas de l'image au milieu
    popupAnchor: [0, -40]               // Pointe de la fenêtre popup par rapport au milieu et bas du pin
});

//Créer les pins pour des coordonnées spécifiques, avec l'apparence précédément crée et on les ajoute dans la map.
var markerSainteCroix = L.marker([48.772, 6.896], {icon: greenIcon}).addTo(mymap).on('click', onClick); // On ajoute un event au pin qui est notre zoo le plus grand
var markerPalmyre = L.marker([45.686, -1.165], {icon: greenIcon}).addTo(mymap);
var markerPeaugres = L.marker([45.266, 4.723], {icon: greenIcon}).addTo(mymap);

//On ajoute un popup à chaque pin
markerSainteCroix.bindPopup("Zoo de Sainte Croix, plus grand zoo de France !")
markerPalmyre.bindPopup("Zoo de Palmyre !");
markerPeaugres.bindPopup("Zoo de Peaugres !");

//Permet la mise en place d'openStreetMap, auquel on ajoute notre map précédément crée
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiaXJpZGVzY2VudGUiLCJhIjoiY2s0ZmhoYzk4MDZieTNrcDcxMnI0NjlwYyJ9.Vugl6YAb93_pZ_8_IFnwUQ'
}).addTo(mymap);

//Evenement appelé lors du clique sur le pin du plus grand zoo
function onClick(e) {
    circle.addTo(mymap);
}

//Ces 3 fonctions permettent de supprimer le cercle animé quand l'utilisateur clique ailleurs
markerPalmyre.on('click',function () {
    mymap.removeLayer(circle);
});
markerPeaugres.on('click',function () {
    mymap.removeLayer(circle);
});
mymap.on('click', function () {
    mymap.removeLayer(circle);
});