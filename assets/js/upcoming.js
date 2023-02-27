let contenedor = document.getElementById('contenedor');
let fragment = document.createDocumentFragment();

const numDate = new Date.parse(data.currentDate);
console.log(numDate);

for (let element of data.events) {
    let newElement = new Date.parse(element.Date);
    if(newElement > numDate) {
        let div = document.createElement('div');
        div.classList.add = ('card');
        div.style.height = "100%";
        div.innerHTML = 
            `<img src="${element.image}" class="card-img-top object-fit-cover h-100 image" alt="...">
            <div class="card-body">
            <h5 class="card-title text-center titulo">${element.name}</h5>
            <p class="card-text text-center">${element.category}</p>
            <div class="d-flex justify-content-between mt-5 mb-0">
                <p>${element.price}</p>
                <a href="./description.html" class="btn btn-outline-danger shadow">Go somewhere</a>
            </div>
        </div>`
        fragment.appendChild(div);
    }
}
contenedor.appendChild(fragment);