let contenedor = document.getElementById('contenedorPast');
let fragment = document.createDocumentFragment();
const diaActual = new Date (data.currentDate);

for (let element of data.events) {
        let diaEvento = new Date(element.date);

            if(diaActual > diaEvento) {
                let div = document.createElement('div');
                div.classList.add('card');
                div.style.width = "18rem";
                div.innerHTML = 
                    `<img src="${element.image}" class="card-img-top object-fit-cover h-100 image" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center titulo">${element.name}</h5>
                        <p class="card-text text-center">${element.category}</p>
                        <div class="d-flex justify-content-between mt-5 mb-0">
                            <p>Price: $${element.price}</p>
                            <a href="./description.html" class="btn btn-outline-danger shadow">Go</a>
                        </div>
                    </div>`
                fragment.appendChild(div);
                }
}
contenedor.appendChild(fragment);