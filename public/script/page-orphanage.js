//tipos de dados
//string "" Number 01 object {}
//boolean true or false
//

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const mymap = L.map("mapid", options).setView([-27.2151682,-49.642853], 15);

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




L.marker([-27.2151682, -49.642853],{ icon})
.addTo(mymap);