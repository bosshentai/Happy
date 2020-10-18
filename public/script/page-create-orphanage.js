
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
    iconAnchor: [29,68]
});


let marker;


// create and add market 
mymap.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    

    //remove icon 
    marker && mymap.removeLayer(marker)


    // add icon layer 
    marker = L.marker([lat,lng], { icon })
    .addTo(mymap)
})

// upload photos 

function addPhotoField(){
    // pegar o container  de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionada. 
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo esta vazio ,se sim, nao adicionar ao container de iamgens 
    const input = newFieldContainer.children[0]

    console.log(input.value == "")
    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicionar ao container de imagens 
   // value = ""

    // adicionar o clone ao container de #images 
    container.appendChild(newFieldContainer)
    
    
}

function deleteField(event){
    const span  = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0] = ""
        return
    }

    // deletar o campo

    span.parentNode.remove();
}


// select yes or no 

function toogleSelect (event){

    // retirar a class .active (dos botoes)
    document.querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove('active')
    )
    // colocar a cass .active nesse botao clicado 
    const button = event.currentTarget('active')


    // atualizar o meu input hidden com o valor selecionada
    const input = document.querySelector('[name="open_on_weekends"]')

    // verificar sim ou nao 
    input.value = button.dataset.value 
    
}

function validade(event){
    // validat se lat e lng estao preenchido
    const needsLatAndLng = false;
    if(needsLatAndLng){
    event.preventDefault()
    alert('Seleciona o ponto no mapa')
    }
}