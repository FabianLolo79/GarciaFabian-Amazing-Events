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

// CATEGORY 
let formContainerCheck = document.getElementsByClassName('formContainerCheck');
let fragmentCheck = document.createDocumentFragment();
//console.log(formContainerCheck);

const mapeo = data.events.map(element => element.category);
//console.table(mapeo);

// logra sacar los valores duplicados PERFECT
let categoriesArray = new Set(mapeo);
let result = [...categoriesArray];
console.table(result);

//NO ANDA!!0
for (let res of result) {
    let div = document.createElement('div');
    div.classList.add('col-auto');
    div.innerHTML = 
        `
        <div class="form-check category1 category" id="form-category"> 
            <input class="form-check-input mx-2" type="checkbox" id=${res.category} value=${res.category}>
            <label class="form-check-label" for=${res.category}>
                ${res.category}
            </label>
        </div>
        `
        fragmentCheck.appendChild(div);
}
formContainerCheck.appendChild(fragmentCheck);







