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
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [2,68],
    popupAnchor: [170,2]

});

function addMarker({id, name, lat, lng }){
// create popup overlay title
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`);

// create and add marker
L.marker([lat, lng],{ icon })
.addTo(mymap)
.bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')


orphanagesSpan.forEach( orphanagesElement => {
    const orphanage = {
        id: orphanagesElement.dataset.id,
        name: orphanagesElement.dataset.name,
        lat: orphanagesElement.dataset.lat,
        lng: orphanagesElement.dataset.lng
    }

    addMarker(orphanage)
})