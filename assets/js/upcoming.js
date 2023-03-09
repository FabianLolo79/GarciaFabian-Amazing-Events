let contenedor = document.getElementById('containerUp');
let fragment = document.createDocumentFragment();
const diaActual = new Date(data.currentDate);


for (let element of data.events) {
    let diaEvento = new Date(element.date);
    
        if(diaEvento < diaActual) {
            let div = document.createElement('div');
            div.classList.add('card', 'ms-5', 'shadow');
            div.style.width = "20rem";
            div.innerHTML = 
                `<img src="${element.image}" class="card-img-top object-fit-cover mt-3 image" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center titulo">${element.name}</h5>
                        <p class="card-text text-center">${element.description}</p>
                        <p class="card-text text-center fw-bold">Date: ${element.date}</p>
                        <div class="d-flex justify-content-between mt-5 mb-0">
                            <p class="fw-bold">Precio: $${element.price}</p>
                            <a href="./details.html?_id=${element._id}" class="btn btn-outline-danger shadow">Details</a>
                        </div>
                    </div>`
            fragment.appendChild(div);
        }
}
contenedor.appendChild(fragment);

// CATEGORY 
let containerCheckUp = document.getElementById('containerCheckUp');
let fragmentCheckUp = document.createDocumentFragment();
//console.log(fragmentCheckUp);

const mapeo = data.events.map(element => element.category);
//console.table(mapeo);

// logra sacar los valores duplicados PERFECT
let categoriesArray = new Set(mapeo);
let result = [...categoriesArray];
//console.table(result);

for (let res of result) {
    let form = document.createElement('form');
    form.classList.add('d-flex', 'py-5');
    form.innerHTML = 
        `
        <div class="col-auto mx-5">
            <div class="form-check category1 category" id="form-category"> 
                <label class="form-check-label">
                    ${res} <input class="form-check-input mx-2 shadow" type="checkbox" id=${res} value=${res}>
                </label>
            </div>
        </div>    
        `
        fragmentCheckUp.appendChild(form);
}
containerCheckUp.appendChild(fragmentCheckUp);

// input checkbox
//containerCheckHome
let checkboxes = document.querySelectorAll('input[type=checkbox]');
//console.log(checkboxes);

checkboxes.forEach( checkbox => {
    checkbox.addEventListener('change', mostrarCheckCards)
})


function mostrarCheckCards() {
    let inputsChecked = Array.from(checkboxes).filter(checkbox => checkbox.checked == true);
    console.log(inputsChecked);
}