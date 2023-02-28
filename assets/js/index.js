let contenedor = document.getElementById('containerHome');
let fragment = document.createDocumentFragment();

for (let element of data.events) {
    let div = document.createElement('div');
    div.classList.add('card', 'mx-5');
    div.style.width = "20rem";
    div.innerHTML = 
        `   
            <img src="${element.image}" class="card-img-top object-fit-cover mt-3 h-100 image" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center titulo">${element.name}</h5>
                <p class="card-text text-center">${element.description}</p>
                <p class="card-text text-center fw-bold">Date: ${element.date}</p>
                <div class="d-flex justify-content-between mt-5 mb-0">
                    <p class="fw-bold">Price: $${element.price}</p>
                    <a href="./description.html" class="btn btn-outline-danger shadow">Go</a>
                </div>
            </div>
        `
    fragment.appendChild(div);
}
contenedor.appendChild(fragment);



