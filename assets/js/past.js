//console.log(data);

let contenedor = document.getElementById('contenedor');
let fragment = document.createDocumentFragment();
const fechaActual = Date.parse(data.currentDate);

for (let event of data.events) { 
        let fechaEvento = Date.parse(event.date);   
            if (fechaEvento > fechaActual) {
                let div = document.createElement('div')
                div.classList.add("card")
                div.style.width = "18rem"
                div.innerHTML = `<img src=${event.image} class="card-img-top " alt="...">
                                <div class="card-body text_center">
                                    <h5 class="card-title title_card">${event.name}</h5>
                                    <p class="card-text">${event.description}</p>
                                    <p>Price: ${event.price} U$D</p>
                                    <a href="./description.html" class="btn btn-outline-danger shadow">Go somewhere</a>
                                </div>`            
            }             
}

console.log(fechaActual);


/* 
let fragment = document.createDocumentFragment()

for (let element of data.events) {

let fechasFuturas = Date.parse(element.date)

    if (fechasFuturas > fechaActual) {

        let div = document.createElement('div')
        div.classList.add("card")
        div.style.width = "18rem"
        div.innerHTML = <img src=${element.image} class="card-img-top " alt="...">
                 <div class="card-body text_center">
                     <h5 class="card-title title_card">${element.name}</h5>
                    <p class="card-text">${element.description}</p>
                    <p>Price: ${element.price} U$D</p>
                     <a href="./details.html" class="navega1">View More</a>
                 </div>
        fragment.appendChild(div)
    }
}
card_up.appendChild(fragment) */