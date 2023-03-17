/* Con api */

let urlApi = 'https://mindhub-xj03.onrender.com/api/amazing'

async function bringData() {
    try{
        // traigo todo de la API
        const response = await fetch(urlApi)
        const data = await response.json()
        const dataEvents = await data.events
        console.log(dataEvents);

        const queryString = location.search;
        
        const params = new URLSearchParams(queryString);
        
        const id = params.get("_id");

        const happening = data.events.find(happen => happen._id == id);

        details(happening, "eventContainer")
    } catch(error){
        console.log(error);
    }
}
bringData();

// const queryString = location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("_id");

// const happening = data.events.find(happen => happen._id == id);


// ORIGINAL DEL DETAILS
function details(array, idContainer) {
    const div = document.getElementById(idContainer)
    div.innerHTML = `<div class="img-details">
                    <img class="card-img-top h-50" src="${array.image}">
                    <div class="card-body d-flex flex-column details-div">
                    <h5 class="h2-details">${array.name}</h5>
                    <p class="p-details"> Description: ${array.description} </p>
                    <ul class="ul-details">
                        <li class="ul-details">Date: ${array.date}</li>
                        <li class="ul-details">Category: ${array.category}</li>
                        <li class="ul-details">Place: ${array.place}</li>
                        <li class="ul-details">Capacity: ${array.capacity} people</li>
                        <li class="ul-details">Assistance: ${array.estimate}</li>
                        <li class="ul-details">Price: ${array.price} USD</li>
                    </ul>
                    </div>
                    </div>`
}

// details(happening, "details-card")












/* así era antes  */
/*      let containerDetails = document.getElementById ("containerDetails")
        let dataEvents = data.events;
        
        const id = location.search
        const parametro = new URLSearchParams(id);
        //console.log(parametro);
        const idNumber = parseInt(parametro.get("_id"));
        //console.log(idNumber);

        const evento = dataEvents.find(element => element._id === idNumber);
        console.log(evento);
        
        containerDetails.innerHTML = `<div class="row">
        <div class="col-md-5">
            <img src="${evento.image}" alt="..." class="mb-4 mb-md-0 ms-0 pt-5" style="width: 400px; height: 300px;"/>
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center ps-5 pt-3">
            <h2 class="details_title">${evento.name}</h2>
            <p>${evento.description}</p>
            <p class="h6"><strong>Date: </strong>${evento.date}</p>
            <p><strong>Category: </strong>${evento.category}</p>
            <p><strong>Place: </strong>${evento.place}</p>
            <p><strong>Capacity: </strong>${evento.capacity}</p>
            <p><strong>Assistance: </strong>${evento.assistance}</p>
            <p><strong>Price: </strong>$${evento.price}</p>
            </div>
        </div>` */
        



