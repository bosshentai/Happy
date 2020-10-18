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


const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng
//create map


const mymap = L.map("mapid", options).setView([lat, lng], 15);

//create and add title layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(mymap);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [2, 68],
    popupAnchor: [170, 2]

});


// create and add marker


L.marker([lat, lng], {
        icon
    })
    .addTo(mymap);


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget;

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")

    buttons.forEach(removeActiveClass)


    function removeActiveClass(button) {
        button.classList.remove(".active")
    }

    //selecionar a imagem clicada layer
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")



    //atualizar o container de image
    imageContainer.src = image.src


    // adicionar a classe .active para este botao
    button.classList.add('active')


}