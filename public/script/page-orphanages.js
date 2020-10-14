//tipos de dados
//string "" Number 01 object {}
//boolean true or false
//

//create map
const mymap = L.map("mapid").setView([-27.2151682,-49.642853], 15);

//create and add title layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(mymap);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [2,68],
    popupAnchor: [170,2]

});

// create popup overlay title
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>');


L.marker([-27.2151682, -49.642853],{ icon})
.addTo(mymap)
.bindPopup(popup);